//
//  BucketListAddUseCase.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import Foundation

class BucketListAddUseCase: DetailListUseCaseProtocol {

    let repository: PresetRepositoryProtocol
    
    init(repository: PresetRepositoryProtocol) {
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
        
    }
    
}
