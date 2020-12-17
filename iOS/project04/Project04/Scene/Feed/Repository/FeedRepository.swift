//
//  FeedRepository.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import Foundation

protocol FeedRepositoryProtocol {
    func fetch(completion: @escaping ([RealmFeed]) -> Void)
}

class FeedRepository: FeedRepositoryProtocol {
    private let local: FeedLocalAgentProtocol
    
    init(local: FeedLocalAgentProtocol) {
        self.local = local
    }
    
    func fetch(completion: @escaping ([RealmFeed]) -> Void) {
        NetworkService.shared.request(from: Endpoint.feeds.urlString, method: .GET) { [weak self]  (result) in
            switch result {
            case .success(let data):
                guard let response = try? JSONDecoder().decode(Response<[RealmFeed]>.self, from: data) else {
                    return
                }
                DispatchQueue.main.async {
                    self?.local.sync(feeds: response.data)
                }
            case .failure(let error):
                print(error)
            }
            DispatchQueue.main.async {
                completion(self?.local.load() ?? [])
            }
        }
    }
}
