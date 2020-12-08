//
//  BucketListViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/11/23.
//

import Foundation
import RealmSwift

protocol BucketListViewModelProtocol {
    var buckets: [RealmBucket.Section: [RealmBucket]]? { get set }
    var count: Int { get }
    var handler: (([RealmBucket.Section: [RealmBucket]]?) -> Void)? { get set }
    func fetch() ->Void
    func append(bucket: RealmBucket) -> Void
    func revise(at index: Int) -> Void
    func autoIncreaseIdValue() -> Int
    func reviseStatus(index: Int)
}

class BucketListViewModel: BucketListViewModelProtocol {
    
    var buckets: [RealmBucket.Section: [RealmBucket]]? {
        didSet {
            handler?(buckets)
        }
    }
    
    var count: Int {
        (self.buckets?[.todo]?.count ?? 0) + (self.buckets?[.done]?.count ?? 0)
    }
    
    let useCase: BucketListUseCase    
    var handler: (([RealmBucket.Section: [RealmBucket]]?) -> Void)?
    
    init(useCase: BucketListUseCase) {
        self.useCase = useCase
    }
    
    func fetch() {
        self.useCase.fetch { [weak self] list in
            let buckets: [RealmBucket.Section: [RealmBucket]] = [.todo: list.filter({ $0.status == "O" }),
                           .done: list.filter({ $0.status == "A" })]
            self?.buckets = buckets
        }
    }
    
    func append(bucket: RealmBucket) {
        let newId = autoIncreaseIdValue()
        bucket.no = newId
        self.buckets?[.todo]?.append(bucket)
        useCase.append(bucket)
    }
    
    func revise(at index: Int) {
        guard let bucket = self.buckets?[.todo]?.remove(at: index) else { return }
        self.buckets?[.done]?.append(bucket)
        
        useCase.revise(at: bucket.no, element: bucket)
    }
    
    func autoIncreaseIdValue() -> Int {
        do {
            let realm = try Realm()
            guard let maxIdValue: Int = realm.objects(RealmBucket.self).max(ofProperty: "no") else {
                return 0
            }
            return maxIdValue + 1
        } catch {
            print(error)
        }
        return 0
    }
    
    func reviseStatus(index: Int) {
        guard let bucket = buckets?[.todo]?.remove(at: index) else {
            return
        }
        buckets?[.done]?.append(bucket)
        useCase.reviseStatus(element: bucket)
    }
}
