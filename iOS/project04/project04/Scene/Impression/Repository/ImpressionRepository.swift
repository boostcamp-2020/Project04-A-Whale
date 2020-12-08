//
//  ImpressionRepository.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation


//protocol ImpressionUseCaseProtocol {
//    func fetch(bucketNo: Int)
//    func save(text: String)
//    func edit(text: String)
//}
protocol ImpressionRepositoryProtocol {
    func fetchImpression(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void)
    func saveImpression(text: String)
    func editImpression(element: RealmImpression?, text: String)
}

class ImpressionRepository: ImpressionRepositoryProtocol {
    private var local: ImpressionLocalAgent
    
    init(local: ImpressionLocalAgent) {
        self.local = local
    }
    
    func fetchImpression(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void) {
        completion(local.fetch(bucketNo: bucketNo))
    }
    
    func saveImpression(text: String) {

    }
    
    func editImpression(element: RealmImpression?, text: String) {

    }
}
