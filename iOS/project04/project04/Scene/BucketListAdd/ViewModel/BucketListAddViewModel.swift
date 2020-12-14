//
//  BucketListAddViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import Foundation
import RealmSwift

protocol BucketViewModelProtocol {
    var bucket: RealmBucket? { get set }
    var didChangeBucket: ((RealmBucket) -> Void)? { get set }
    func saveAction(completion: @escaping (Bool) -> Void)
}

class BucketListAddViewModel: BucketViewModelProtocol, DetailListViewModelProtocol {
    var bucket: RealmBucket? {
        didSet {
            guard let bucket = self.bucket else { return }
            didChangeBucket?(bucket)
        }
    }
    var didChangeBucket: ((RealmBucket) -> Void)?
    
    var list: [RealmDetail.Section: [RealmDetail]] = [:] {
        didSet {
            listDidChange?(self)
        }
    }
    
    var usecase: DetailListUseCaseProtocol
    var listDidChange: ((DetailListViewModelProtocol) -> Void)?
    
    init(usecase: DetailListUseCaseProtocol) {
        self.usecase = usecase
    }
    
    func listDeleteAction(at index: Int) {
        usecase.remove(at: index)
        list[.todo]?.remove(at: index)
    }
    
    func listAddAction(_ newElement: RealmDetail) {
        usecase.append(newElement)
        list[.todo]?.append(newElement)
    }
    
    func listReviseAction(_ element: RealmDetail, title: String, dueDate: String) {
        usecase.revise(element: element, title: title, dueDate: dueDate)
        listDidChange?(self)
    }
    
    func listStatusReviseAction(at index: Int) {
        
    }
    
    func listFetchAction(with index: Int?) {
        usecase.fetch(with: index, completion: { [weak self] list in
            self?.list[.todo] = list
        })
    }
    
    func saveAction(completion: @escaping (Bool) -> Void) {
        var details =  [[String: String]]()
        if let list =  list[.todo] {
            details = list.map({ ["title": $0.title,
                                              "status": "O",
                                              "dueDate": $0.dueDate
            ] })
        }
        print(details)
        let data: [String: Any] = ["title": bucket?.title ?? "",
                    "description": bucket?.subTitle ?? "",
                    "details": details
        ]
        let body = try? JSONSerialization.data(withJSONObject: data, options: .prettyPrinted)
        NetworkService.shared.request(from: Endpoint.buckets.urlString, method: .POST, body: body) { (result) in
            switch result {
            case .success(_):
                completion(true)
            case .failure(_):
                completion(false)
            }
        }
        
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
}
