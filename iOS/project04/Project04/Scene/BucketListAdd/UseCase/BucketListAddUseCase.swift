//
//  BucketListAddUseCase.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import Foundation
import RealmSwift

protocol BucketListAddUseCaseProtocol {
    func fetch(with index: Int?, completion: @escaping ([RealmDetail]) -> Void)
    func revise(element: RealmDetail, title: String, dueDate: String)
}

class BucketListAddUseCase: BucketListAddUseCaseProtocol {
    private let repository: BucketListAddRepositoryProtocol
    
    init(repository: BucketListAddRepositoryProtocol) {
        self.repository = repository
    }
    
    func fetch(with index: Int?, completion: @escaping ([RealmDetail]) -> Void) {
        repository.fetch(with: index) { (list) in
            completion(list)
        }
    }
    
    func revise(element: RealmDetail, title: String, dueDate: String) {
        do {
            try Realm().write {
                element.title = title
                element.dueDate = dueDate
                element.updatedAt = Date().toStringKST(dateFormat: "yyyy-MM-dd HH:mm:ss")
            }
        } catch {
            print(error)
        }
    }
    
}
