//
//  BucketListAddUseCase.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import Foundation
import RealmSwift

class BucketListAddUseCase: DetailListUseCaseProtocol {

    let repository: BucketListAddRepositoryProtocol
    
    init(repository: BucketListAddRepositoryProtocol) {
        self.repository = repository
    }
    func fetch(with index: Int?, completion: @escaping ([RealmDetail]) -> Void) {
        repository.fetch(with: index) { (list) in
            completion(list)
        }
    }
    
    func append(_ element: RealmDetail) {
    }
    
    func remove(at index: Int) {
        
    
    }
    
    func revise(at index: Int, element: RealmDetail) {

    }
    
    func reviseStatus(element: RealmDetail) {
        
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
