//
//  DetailRepository.swift
//  project04
//
//  Created by 남기범 on 2020/11/25.
//

import Foundation

protocol DetailRepositoryProtocol {
    func fetchDetailList(completion: @escaping ([RealmDetail]) -> Void)
    func appendDetailList(_ element: RealmDetail)
    func removeDetailList(at index: Int)
    func reviseDetailList(element: RealmDetail, title: String, dueDate: String)
    func reviseDetailListStatus(element: RealmDetail)
}

class DetailRepository: DetailRepositoryProtocol {
    private var local: DetailLocalAgent
    
    required init(local: DetailLocalAgent) {
        self.local = local
    }
    
    func fetchDetailList(completion: @escaping ([RealmDetail]) -> Void) {
        completion(local.load())
    }
    
    func appendDetailList(_ element: RealmDetail) {
        local.append(element)
    }
    
    func removeDetailList(at index: Int) {
        local.remove(at: index)
    }
    
    func reviseDetailList(element: RealmDetail, title: String, dueDate: String) {
        local.revise(element: element, title: title, dueDate: dueDate)
    }
    
    func reviseDetailListStatus(element: RealmDetail) {
        local.reviseStatus(element: element)
    }
}
