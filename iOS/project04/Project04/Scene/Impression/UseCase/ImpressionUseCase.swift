//
//  ImpressionUseCase.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation

protocol ImpressionUseCaseProtocol {
    func fetch(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void)
    func save(_ element: RealmImpression)
    func edit(element: RealmImpression?, text: String)
}

class ImpressionUseCase: ImpressionUseCaseProtocol {
    private var repository: ImpressionRepositoryProtocol
    
    init(repository: ImpressionRepositoryProtocol) {
        self.repository = repository
    }
    
    func fetch(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void) {
        repository.fetchImpression(bucketNo: bucketNo, completion: { impression in
            completion(impression)
        })
    }
    
    func save(_ element: RealmImpression) {
        repository.saveImpression(element)
    }
    
    func edit(element: RealmImpression?, text: String) {
        repository.editImpression(element: element, text: text)
    }
}
