//
//  BucketListUseCase.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation

class BucketListUseCase: ListUseCase {
    typealias Item = RealmBucket
    
    let repository: BucketListRepository
    
    init(repository: BucketListRepository) {
        self.repository = repository
    }
    
    func fetch(completion: @escaping ([RealmBucket]) -> Void) {
        repository.fetchBucketList { (list) in
            completion(list)
        }
    }
    
    func append(_ element: RealmBucket) {
        repository.appendBucketList(element)
    }
    
    func remove(at index: Int) {
        repository.removeBucketList(at: index)
    }
    
    func revise(at index: Int, element: RealmBucket) {
        repository.reviseBucketList(at: index, element: element)
    }
    
    func reviseStatus(element: RealmBucket) {
        repository.reviseBucketListStatus(element: element)
    }
   
}
