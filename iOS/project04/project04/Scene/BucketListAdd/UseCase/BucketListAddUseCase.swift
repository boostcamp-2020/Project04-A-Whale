//
//  BucketListAddUseCase.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import Foundation

class BucketListAddUseCase: ListUseCase {

    typealias Item = RealmDetail

    func fetch(completion: @escaping ([RealmDetail]) -> Void) {
        
    }
    
    func fetch(with bucket: RealmBucket, completion: @escaping ([RealmDetail]) -> Void) {
        let list =  (1...10).map({ RealmDetail(value: [0,
                                                  "Test \($0)",
                                                  "O",
                                                  "Test \($0)",
                                                  "Test \($0)",
                                                  "Test \($0)",
                                                  nil,
                                                  0]) })
        completion(list)
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
