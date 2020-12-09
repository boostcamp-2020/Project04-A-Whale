//
//  ImpressionUseCase.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation

protocol ImpressionUseCaseProtocol {
    func fetch(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void)
    func save(bucketNo: Int, text: String)
    func edit(element: RealmImpression?, text: String)
}

class ImpressionUseCase: ImpressionUseCaseProtocol {
    var repository: ImpressionRepositoryProtocol
    
    init(repository: ImpressionRepositoryProtocol) {
        self.repository = repository
    }
    
    func fetch(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void) {
        repository.fetchImpression(bucketNo: bucketNo, completion: { impression in
            completion(impression)
        })
    }
    
    func save(bucketNo: Int, text: String) {
        repository.saveImpression(bucketNo: bucketNo, text: text)
    }
    
    func edit(element: RealmImpression?, text: String) {
        repository.editImpression(element: element, text: text)
    }
}
