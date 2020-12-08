//
//  ImpressionAPIAgent.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation

class ImpressionAPIAgent: ListNetworkService {
    typealias Item = RealmImpression
    enum RequestURL {
        static let fetch = "https://~~"
        static let save = "https://~~"
        static let revise = "https://~~"
    }
    
    func request(from urlString: String, method: HTTPMethod, body: RealmImpression?, completion: @escaping (Result<Data, NetworkError>) -> Void) {
        completion(.failure(.URLError))
    }
}
