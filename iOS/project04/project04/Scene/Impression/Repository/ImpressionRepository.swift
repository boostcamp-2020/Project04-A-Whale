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
    private var network: ImpressionAPIAgent
    
    init(local: ImpressionLocalAgent, network: ImpressionAPIAgent) {
        self.local = local
        self.network = network
    }
    
    func fetchImpression(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void) {
        network.request(from: ImpressionAPIAgent.RequestURL.fetch,
                        method: .GET,
                        body: nil,
                        completion: { [weak self] result in
                            switch result {
                            case .success(_):
                                break
                            case .failure(_):
                                completion(self?.local.fetch(bucketNo: bucketNo))
                            }
        })
    }
    
    func saveImpression(text: String) {
        network.request(from: ImpressionAPIAgent.RequestURL.save,
                        method: .GET,
                        body: nil,
                        completion: { [weak self] result in
                            switch result {
                            case .success(_):
                                break
                            case .failure(_):
                                self?.local.save(text: text)
                            }
        })
    }
    
    func editImpression(element: RealmImpression?, text: String) {
        network.request(from: ImpressionAPIAgent.RequestURL.revise,
                        method: .GET,
                        body: nil,
                        completion: { [weak self] result in
                            switch result {
                            case .success(_):
                                break
                            case .failure(_):
                                self?.local.edit(element: element, text: text)
                            }
        })
    }
}
