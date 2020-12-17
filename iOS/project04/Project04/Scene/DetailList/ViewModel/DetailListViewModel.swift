//
//  DetailListViewModel.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import Foundation
import RealmSwift

protocol DetailListViewModelProtocol {
    var list: [RealmDetail.Section: [RealmDetail]] { get }
    var listDidChange: ((DetailListViewModelProtocol) -> ())? { get set }
    func listDeleteAction(at index: Int)
    func listAddAction(_ newElement: RealmDetail)
    func listReviseAction(_ element: RealmDetail, title: String, dueDate: String)
    func listStatusReviseAction(at index: Int)
    func listFetchAction(with index: Int?)
}

class DetailListViewModel: DetailListViewModelProtocol {
    
    var list: [RealmDetail.Section: [RealmDetail]] = [:] {
        didSet {
            self.listDidChange?(self)
        }
    }
    
    var listDidChange: ((DetailListViewModelProtocol) -> ())?
    var usecase: DetailListUseCaseProtocol
    
    required init(usecase: DetailListUseCaseProtocol) {
        self.usecase = usecase
    }
    
    func listFetchAction(with index: Int?) {
        usecase.fetch(with: index, completion: { [weak self] list in
            self?.list[.done] = list.filter { $0.status == "A" }
            self?.list[.todo] = list.filter { $0.status == "O" }
        })
    }
    
    func listDeleteAction(at index: Int) {
        list[.todo]?.removeAll(where: { $0.no == index })
        usecase.remove(at: index)
    }
    
    func listAddAction(_ newElement: RealmDetail) {
        let item = newElement
        item.no = autoIncreaseIdValue()
        list[.todo]?.append(item)
        usecase.append(item)
    }
    
    func listReviseAction(_ element: RealmDetail, title: String, dueDate: String) {
        usecase.revise(element: element, title: title, dueDate: dueDate)
        listDidChange?(self)
    }
    
    func autoIncreaseIdValue() -> Int {
        do {
            let realm = try Realm()
            guard let maxIdValue: Int = realm.objects(RealmDetail.self).max(ofProperty: "no") else {
                return 0
            }
            return maxIdValue + 1
        } catch {
            print(error)
        }
        return 0
    }
    
    func listStatusReviseAction(at index: Int) {
        guard let detail = list[.todo]?.remove(at: index) else {
            return
        }
        list[.done]?.append(detail)
        
        usecase.reviseStatus(element: detail)
    }
}
