//
//  BucketListRepository.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation

class BucketListRepository {
    var network: BucketAPIAgent
    var local: BucketLocalAgent
    
    init(network: BucketAPIAgent, local: BucketLocalAgent) {
        self.network = network
        self.local = local
    }
    
    func fetchBucketList(completion: @escaping ([RealmBucket]) -> Void) {
        network.request(from: BucketAPIAgent.RequestURL.fetch, method: .GET, body: nil) { [weak self] result in
            switch result {
            case .success(_):
                break
            case .failure(_):
                completion(self?.local.load() ?? [])
            }
        }
    }
    
    func appendBucketList(_ element: RealmBucket) {
        network.request(from: BucketAPIAgent.RequestURL.append,
                        method: .GET,
                        body: element,
                        completion: { result in
                            switch result {
                            case .success(_):
                                break
                            case .failure(_):
                                self.local.append(element)
                            }
                        })
    }
    
    func removeBucketList(at index: Int) {
        network.request(from: BucketAPIAgent.RequestURL.remove,
                        method: .GET,
                        body: nil,
                        completion: { result in
                            switch result {
                            case .success(_):
                                break
                            case .failure(_):
                                self.local.remove(at: index)
                            }
                        })
    }
    
    func reviseBucketList(at index: Int, element: RealmBucket) {
        network.request(from: BucketAPIAgent.RequestURL.revise,
                        method: .GET,
                        body: nil,
                        completion: { result in
                            switch result {
                            case .success(_):
                                break
                            case .failure(_):
                                self.local.revise(at: index, element: element)
                            }
                        })
    }
    
}
