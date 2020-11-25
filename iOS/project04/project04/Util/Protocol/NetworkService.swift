//
//  NetworkService.swift
//  project04
//
//  Created by 남기범 on 2020/11/25.
//

import Foundation

protocol NetworkService {
    associatedtype Item: Any
    
    func request(from urlString: String,
                 method: HTTPMethod,
                 body: Item?,
                 completion: @escaping (Result<Data, NetworkError>) -> Void)
}
