//
//  BucketListSearchUseCase.swift
//  project04
//
//  Created by jaejeon on 2020/12/04.
//

import Foundation

protocol SearchUseCase {
    func fetch(handler: @escaping ([Bucket]) -> Void) -> Void
    func serach(with keyword: String, handler: @escaping ([Bucket]) -> Void)
}

class BucketListSearchUseCase: SearchUseCase {
    var repository: SearchRepositoryProtocol
    
    init(repository: SearchRepositoryProtocol) {
        self.repository = repository
    }
    
    func fetch(handler: @escaping ([Bucket]) -> Void) {
        repository.fetch { (buckets) in
            handler(buckets)
        }
    }
    
    func serach(with keyword: String, handler: @escaping ([Bucket]) -> Void) {
        repository.search(with: keyword) { (buckets) in
            handler(buckets)
        }
    }
    
    
}
