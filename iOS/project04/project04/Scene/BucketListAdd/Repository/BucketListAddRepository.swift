//
//  BucketListAddRepository.swift
//  project04
//
//  Created by jaejeon on 2020/12/07.
//

import Foundation

protocol BucketListAddRepositoryProtocol {
    func fetch(with no: Int?, completion: @escaping ([RealmDetail]) -> Void)
    func remove(at index: Int)
    func append(element: RealmDetail)
}

class BucketListAddRepository: BucketListAddRepositoryProtocol {
    var memory: DetailMemoryAgent
    
    init(memory: DetailMemoryAgent) {
        self.memory = memory
    }
    
    func fetch(with no: Int?, completion: @escaping ([RealmDetail]) -> Void) {
        completion(self.memory.load() ?? [])
    }
    
    func remove(at index: Int) {
        memory.remove(at: index)
    }
    
    func append(element: RealmDetail) {
        memory.append(element)
    }
}
