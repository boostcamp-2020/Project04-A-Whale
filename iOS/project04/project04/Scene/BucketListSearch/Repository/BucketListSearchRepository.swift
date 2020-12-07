//
//  BucketListSearchRepository.swift
//  project04
//
//  Created by jaejeon on 2020/12/04.
//

import Foundation

protocol SearchRepositoryProtocol {
    func fetch(completion: @escaping ([RealmBucket]) -> Void)
    func search(with keyword: String, completion: @escaping ([RealmBucket]) -> Void)
}

class BucketListSearchRepository: SearchRepositoryProtocol {
    let buckets = (1...100).map({ RealmBucket(value: [-1, "목표 \($0)", "목표 \($0) 설명", "O"]) })
    func fetch(completion: @escaping ([RealmBucket]) -> Void) {
        completion(buckets)
    }
    
    func search(with keyword: String, completion: @escaping ([RealmBucket]) -> Void) {
        completion(buckets.filter({$0.title.contains(keyword)}))
    }
    
}
