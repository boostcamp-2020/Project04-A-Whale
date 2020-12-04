//
//  BucketListSearchRepository.swift
//  project04
//
//  Created by jaejeon on 2020/12/04.
//

import Foundation

protocol SearchRepositoryProtocol {
    func fetch(completion: @escaping ([Bucket]) -> Void)
    func search(with keyword: String, completion: @escaping ([Bucket]) -> Void)
}

class BucketListSearchRepository: SearchRepositoryProtocol {
    let buckets = (1...100).map({ Bucket(id: nil, title: "목표 \($0)",description: "목표 \($0) 설명", status: "O") })
    func fetch(completion: @escaping ([Bucket]) -> Void) {
        completion(buckets)
    }
    
    func search(with keyword: String, completion: @escaping ([Bucket]) -> Void) {
        completion(buckets.filter({$0.title.contains(keyword)}))
    }
    
}
