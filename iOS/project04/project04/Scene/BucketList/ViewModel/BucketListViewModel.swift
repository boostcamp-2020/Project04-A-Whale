//
//  BucketListViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/11/23.
//

import Foundation
import RealmSwift

class BucketListViewModel {
    var buckets: [Bucket.Section: [Bucket]]? {
        didSet {
            handler(buckets)
        }
    }
    
    var count: Int {
        (self.buckets?[.todo]?.count ?? 0) + (self.buckets?[.done]?.count ?? 0)
    }
    
    let useCase: BucketListUseCase
    
    private var handler: ([Bucket.Section: [Bucket]]?) -> Void
    
    init(useCase: BucketListUseCase, handler: @escaping ([Bucket.Section: [Bucket]]?) -> Void) {
        self.handler = handler
        self.useCase = useCase
        self.useCase.fetch { [weak self] list in
            let buckets = [Bucket.Section.todo: list]
            self?.buckets = buckets
        }
    }
    
    func append(bucket: Bucket) {
        let newId = autoIncreaseIdValue()
        let newBucket = Bucket(id: newId, title: bucket.title)
        self.buckets?[.todo]?.append(newBucket)
        useCase.append(newBucket)
    }
    
    func remove(bucket: Bucket) {
        self.buckets?[.todo]?.removeAll(where: { $0.title == bucket.title })
        self.buckets?[.done]?.append(bucket)
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
