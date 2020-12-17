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
    private var memory: DetailMemoryAgentProtocol
    
    init(memory: DetailMemoryAgentProtocol) {
        self.memory = memory
    }
    
    func fetch(with no: Int?, completion: @escaping ([RealmDetail]) -> Void) {
        guard let no = no else {
            completion(self.memory.load())
            return
        }
        NetworkService.shared.request(from: Endpoint.details.urlString + "/\(no)",
                                      method: .GET,
                                      completion: { [weak self] result in
                                        switch result {
                                        case .success(let data):
                                            let detailFetch = try? JSONDecoder().decode(Response<Bucket>.self, from: data)
                                            completion(detailFetch?.data.details.allDetails ?? [])
                                        case .failure(let error):
                                            print(error)
                                            completion(self?.memory.load() ?? [])
                                        }
                                      })
    }
    
    func remove(at index: Int) {
        memory.remove(at: index)
    }
    
    func append(element: RealmDetail) {
        memory.append(element)
    }
}
