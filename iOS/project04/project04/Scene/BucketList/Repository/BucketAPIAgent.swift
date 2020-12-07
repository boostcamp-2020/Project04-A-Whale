//
//  BucketAPIAgent.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation

class BucketAPIAgent: NetworkService {
    typealias Item = RealmBucket
    
    enum RequestURL {
        static let append = "https://~~"
        static let remove = "https://~~"
        static let revise = "https://~~"
        static let fetch = "https://~~"
    }
    
    func request(from urlString: String, method: HTTPMethod, body: RealmBucket?, completion: @escaping (Result<Data, NetworkError>) -> Void) {
        completion(.failure(.URLError))
    }
}
