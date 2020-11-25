//
//  DetailListUseCase.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation

class DetailListUseCase: ListUseCase {
    let repository: DetailRepository
    
    init(repository: DetailRepository) {
        self.repository = repository
    }
    
    func fetch(completion: @escaping ([DetailList]) -> Void) {
        repository.fetchDetailList(completion: { list in
            completion(list)
        })
    }

    func append(_ element: DetailList) {
        repository.appendDetailList(element)
    }

    func remove(at index: Int) {
        repository.removeDetailList(at: index)
    }

    func revise(at index: Int, element: DetailList) {
        repository.reviseDetailList(at: index, element: element)
    }
    
    
}
