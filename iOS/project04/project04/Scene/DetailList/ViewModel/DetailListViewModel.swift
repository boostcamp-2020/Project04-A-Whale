//
//  DetailListViewModel.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import Foundation
import RealmSwift

protocol DetailListViewModelProtocol {
    var list: [Detail.Section: [Detail]] { get }
    var usecase: DetailListUseCase { get }
    var listDidChange: ((DetailListViewModelProtocol) -> ())? { get set }
    func listDeleteAction(at index: Int)
    func listAddAction(_ newElement: Detail)
    func listReviseAction(_ newElement: Detail, at index: Int)
    func listStatusReviseAction(at index: Int)
    func listFetchAction()
    init(usecase: DetailListUseCase)
}

class DetailListViewModel: DetailListViewModelProtocol {
    
    var list: [Detail.Section: [Detail]] = [:] {
        didSet {
            self.listDidChange?(self)
        }
    }
    
    var listDidChange: ((DetailListViewModelProtocol) -> ())?
    var usecase: DetailListUseCase
    
    required init(usecase: DetailListUseCase) {
        self.usecase = usecase
    }
    
    func listFetchAction() {
        usecase.fetch(completion: { [weak self] list in
            self?.list[.done] = list.filter { $0.status == "A" }
            self?.list[.todo] = list.filter { $0.status == "O" }
        })
    }
    
    func listDeleteAction(at index: Int) {
        list[.todo]?.remove(at: index)
        usecase.remove(at: index)
    }
    
    func listAddAction(_ newElement: Detail) {
        var item = newElement
        item.no = autoIncreaseIdValue()
        list[.todo]?.append(item)
        usecase.append(item)
    }
    
    func listReviseAction(_ newElement: Detail, at index: Int) {
        list[.todo]?[index] = newElement
        usecase.revise(at: index, element: newElement)
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
        guard var detail = list[.todo]?.remove(at: index) else {
            return
        }
        list[.done]?.append(detail)
        
        detail.status = "A"
        usecase.revise(at: index, element: detail)
    }
}
