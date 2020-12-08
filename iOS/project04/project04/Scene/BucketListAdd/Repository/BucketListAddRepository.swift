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
    var network: PresetAPIAgent
    var memory: DetailMemoryAgent
    
    init(network: PresetAPIAgent, memory: DetailMemoryAgent) {
        self.network = network
        self.memory = memory
    }
    
    func fetch(with no: Int?, completion: @escaping ([RealmDetail]) -> Void) {
        guard let no = no
        else {
            completion([])
            return
        }
        network.request(from: PresetAPIAgent.RequestURL.fetch.rawValue + "\(no)", method: .GET, body: nil) { [weak self] (result) in
            switch result {
            case .success(_):
                break
            case .failure(_):
                completion(self?.memory.load() ?? [])
            }
        }
    }
    
    func remove(at index: Int) {
        memory.remove(at: index)
    }
    
    func append(element: RealmDetail) {
        memory.append(element)
    }
}
