//
//  DetailAPIAgent.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation

class DetailAPIAgent: ListNetworkService {
    enum RequestURL {
        static let append = "https://~~"
        static let remove = "https://~~"
        static let revise = "https://~~"
        static let fetch = "https://~~"
    }
    
    func request(from urlString: String,
                 method: HTTPMethod,
                 body: RealmDetail?,
                 completion: @escaping (Result<Data, NetworkError>) -> Void) {
        completion(.failure(.URLError))
    }
}
