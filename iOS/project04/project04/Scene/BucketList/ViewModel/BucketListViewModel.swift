//
//  BucketListViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/11/23.
//

import Foundation
import RealmSwift

protocol BucketListViewModelProtocol {
    var buckets: [Bucket.Section: [Bucket]]? { get set }
    var count: Int { get }
    var handler: (([Bucket.Section: [Bucket]]?) -> Void)? { get set }
    func fetch() ->Void
    func append(bucket: Bucket) -> Void
    func remove(at index: Int) -> Void
    func autoIncreaseIdValue() -> Int
}

class BucketListViewModel: BucketListViewModelProtocol {
    var buckets: [Bucket.Section: [Bucket]]? {
        didSet {
            handler?(buckets)
        }
    }
    
    var count: Int {
        (self.buckets?[.todo]?.count ?? 0) + (self.buckets?[.done]?.count ?? 0)
    }
    
    let useCase: BucketListUseCase    
    var handler: (([Bucket.Section: [Bucket]]?) -> Void)?
    
    init(useCase: BucketListUseCase) {
        self.useCase = useCase
    }
    
    func fetch() {
        self.useCase.fetch { [weak self] list in
            let buckets: [Bucket.Section: [Bucket]] = [.todo: list.filter({ $0.status == "O" }),
                           .done: list.filter({ $0.status == "A" })]
            self?.buckets = buckets
        }
    }
    
    func append(bucket: Bucket) {
        let newId = autoIncreaseIdValue()
        let newBucket = Bucket(id: newId, title: bucket.title, status: bucket.status)
        self.buckets?[.todo]?.append(newBucket)
        useCase.append(newBucket)
    }
    
    func remove(at index: Int) {
        guard let bucket = self.buckets?[.todo]?.remove(at: index),
              let bucketID = bucket.id else { return }
        self.buckets?[.done]?.append(bucket)
        useCase.remove(at: bucketID)
    }
    
    func autoIncreaseIdValue() -> Int {
        do {
            let realm = try Realm()
            guard let maxIdValue: Int = realm.objects(RealmBucket.self).max(ofProperty: "id") else {
                return 0
            }
            return maxIdValue + 1
        } catch {
            print(error)
        }
        return 0
    }
}
