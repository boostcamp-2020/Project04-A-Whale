//
//  BucketListRepository.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation

class BucketListRepository {
    var local: BucketLocalAgent
    
    init(local: BucketLocalAgent) {
        self.local = local
    }
    
    func fetchBucketList(completion: @escaping ([RealmBucket]) -> Void) {
        completion(local.load())
    }
    
    func appendBucketList(_ element: RealmBucket) {
        local.append(element)
    }
    
    func removeBucketList(at index: Int) {
        local.remove(at: index)
    }
    
    func reviseBucketList(at index: Int, element: RealmBucket) {
        local.revise(at: index, element: element)
    }
    
    func reviseBucketListStatus(element: RealmBucket) {
        local.reviseStatus(element: element)
    }
}
