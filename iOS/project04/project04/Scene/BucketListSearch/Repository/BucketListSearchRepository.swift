//
//  BucketListSearchRepository.swift
//  project04
//
//  Created by jaejeon on 2020/12/04.
//

import Foundation

protocol SearchRepositoryProtocol {
    func search(with keyword: String, completion: @escaping ([SearchBucket]) -> Void)
}

class BucketListSearchRepository: SearchRepositoryProtocol {
    func search(with keyword: String, completion: @escaping ([SearchBucket]) -> Void) {
        NetworkService.shared.request(from: Endpoint.presets.urlString  + "?keyword=\(keyword)", method: .GET) { (result) in
            switch result {
            case .success(let data):
                let response = try? JSONDecoder().decode(Response<[SearchBucket]>.self, from: data)
                DispatchQueue.main.async {
                    completion(response?.data ?? [])
                }
            case .failure(let error):
                print(error)
            }
            
        }
    }
    
}
