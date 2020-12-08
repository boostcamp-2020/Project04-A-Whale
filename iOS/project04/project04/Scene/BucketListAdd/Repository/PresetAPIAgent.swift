//
//  PresetAPIAgent.swift
//  project04
//
//  Created by jaejeon on 2020/12/07.
//

import Foundation

class PresetAPIAgent: ListNetworkService {
    typealias Item = RealmDetail

    enum RequestURL: String {
        case fetch = ""
    }
    
    func request(from urlString: String, method: HTTPMethod, body: RealmDetail?, completion: @escaping (Result<Data, NetworkError>) -> Void) {
        completion(.failure(.URLError))
    }
}
