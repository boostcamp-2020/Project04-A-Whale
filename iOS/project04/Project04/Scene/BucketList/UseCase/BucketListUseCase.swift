//
//  BucketListUseCase.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation

protocol BucketListUseCaseProtocol {
    func fetch(completion: @escaping (RealmUserData) -> Void)
    func fetch(completion: @escaping ([RealmBucket]) -> Void)
    func reviseStatus(element: RealmBucket)
}

class BucketListUseCase: BucketListUseCaseProtocol {
    private let repository: BucketListRepositoryProtocol
    
    init(repository: BucketListRepositoryProtocol) {
        self.repository = repository
    }
    
    func fetch(completion: @escaping (RealmUserData) -> Void) {
        repository.fetchUserIfo { (userData) in
            completion(userData)
        }
    }

    func fetch(completion: @escaping ([RealmBucket]) -> Void) {
        repository.fetchBucketList { (list) in
            completion(list)
        }
    }
    
    func reviseStatus(element: RealmBucket) {
        repository.reviseBucketListStatus(element: element)
    }
}
