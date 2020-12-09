//
//  DetailRepository.swift
//  project04
//
//  Created by 남기범 on 2020/11/25.
//

import Foundation

protocol DetailRepositoryProtocol {
    func fetchDetailList(completion: @escaping ([RealmDetail]) -> Void)
    func appendDetailList(_ element: RealmDetail)
    func removeDetailList(at index: Int)
    func reviseDetailList(element: RealmDetail, title: String, dueDate: String)
    func reviseDetailListStatus(element: RealmDetail)
}

class DetailRepository: DetailRepositoryProtocol {
    private var local: DetailLocalAgent
    
    required init(local: DetailLocalAgent) {
        self.local = local
    }
    
    func fetchDetailList(completion: @escaping ([RealmDetail]) -> Void) {
        
        // RealmBucket 인자가 다름
        NetworkService.shared.request(from: Endpoint.details.urlString + "/2",
                                      method: .GET,
                                      completion: { [weak self] result in
                                        switch result {
                                        case .success(let data):
                                            print(String(data: data, encoding: .utf8))
                                            let detailFetch = try? JSONDecoder().decode(DetailFetch.self, from: data)
                                            print(detailFetch)
                                            break
                                        case .failure(let error):
                                            print(error)
                                            completion(self?.local.load() ?? [])
                                        }
                                      })
        completion(local.load())
    }
    
    func appendDetailList(_ element: RealmDetail) {
        let data = try? JSONEncoder().encode(["bucketNo": "\(element.bucketNo)", "title": element.title, "dueDate": element.dueDate])
        NetworkService.shared.request(from: Endpoint.details.urlString,
                                      method: .POST,
                                      body: data,
                                      completion: { result in
                                        switch result {
                                        case .success(let data):
                                            print(String(data: data, encoding: .utf8))
                                            break
                                        case .failure(let error):
                                            print(error)
                                        }
                                      })
        local.append(element)
    }
    
    func removeDetailList(at index: Int) {
        NetworkService.shared.request(from: Endpoint.details.urlString + "/\(index)",
                                      method: .DELETE,
                                      completion: { [weak self] result in
                                        switch result {
                                        case .success(let data):
                                            print(String(data: data, encoding: .utf8))
                                        case .failure(let error):
                                            print(error)
                                        }
            
        })
        local.remove(at: index)
    }
    
    func reviseDetailList(element: RealmDetail, title: String, dueDate: String) {
        let data = try? JSONEncoder().encode(["title": title, "dueDate": dueDate])
        NetworkService.shared.request(from: Endpoint.details.urlString + "\(element.no)",
                                      method: .PATCH,
                                      body: data,
                                      completion: { result in
                                        switch result {
                                        case .success(let data):
                                            print(String(data: data, encoding: .utf8))
                                        case .failure(let error):
                                            print(error)
                                        }
                                      })
        local.revise(element: element, title: title, dueDate: dueDate)
    }
    
    func reviseDetailListStatus(element: RealmDetail) {
        let data = try? JSONEncoder().encode(["status": "A"])
        NetworkService.shared.request(from: Endpoint.details.urlString,
                                      method: .PATCH,
                                      body: data,
                                      completion: { result in
                                        switch result {
                                        case .success(let data):
                                            print(String(data: data, encoding: .utf8))
                                        case .failure(let error):
                                            print(error)
                                        }
                                      })
        local.reviseStatus(element: element)
    }
}
