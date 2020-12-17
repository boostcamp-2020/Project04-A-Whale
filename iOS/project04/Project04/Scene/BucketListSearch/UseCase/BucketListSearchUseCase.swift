//
//  BucketListSearchUseCase.swift
//  project04
//
//  Created by jaejeon on 2020/12/04.
//

import Foundation

protocol SearchUseCase {
    func fetch(handler: @escaping ([SearchBucket]) -> Void) -> Void
    func serach(with keyword: String, handler: @escaping ([SearchBucket]) -> Void)
}

class BucketListSearchUseCase: SearchUseCase {
    private var repository: SearchRepositoryProtocol
    
    init(repository: SearchRepositoryProtocol) {
        self.repository = repository
    }
    
    func fetch(handler: @escaping ([SearchBucket]) -> Void) {
        repository.search(with: "") { (buckets) in
            handler(buckets)
        }
    }
    
    func serach(with keyword: String, handler: @escaping ([SearchBucket]) -> Void) {
        repository.search(with: keyword) { (buckets) in
            handler(buckets)
        }
    }
}
