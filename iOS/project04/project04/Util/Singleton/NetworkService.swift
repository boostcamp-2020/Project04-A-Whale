//
//  NetworkService.swift
//  project04
//
//  Created by jaejeon on 2020/12/08.
//

import Foundation
import UIKit

class NetworkService {
    static let shared =  NetworkService()

    private init() {
        
    }
    
    func request(sync: Bool = false, from urlString: String,
                 method: HTTPMethod,
                 body: Data? = nil,
                 completion: @escaping (Result<Data, NetworkError>) -> Void) {
        var semaphore: DispatchSemaphore?
        
        if sync {
            semaphore = DispatchSemaphore(value: 0)
        }
        
        guard let url = URL(string: urlString) else {
            return
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = method.rawValue
        
        let auth = AccessToken()
        if !auth.token.isEmpty {
            request.setValue("Bearer \(auth.token)", forHTTPHeaderField: "Authorization")
        }
        if let body = body {
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
            request.httpBody = body
        }
        
        URLSession.shared.dataTask(with: request) { data, response, error in
            if error != nil {
                completion(.failure(.responseError))
                semaphore?.signal()
                return
            }
            
            guard let response = response as? HTTPURLResponse,
                  let data = data else {
                completion(.failure(.responseError))
                semaphore?.signal()
                return
            }
            
            if (200...299).contains(response.statusCode) {
                completion(.success(data))
                semaphore?.signal()
                return
            } else if response.statusCode == 401 {
                var auth = AccessToken()
                auth.token = ""
            }
            completion(.failure(.responseError))
            semaphore?.signal()
        }.resume()

        semaphore?.wait()
    }
}
