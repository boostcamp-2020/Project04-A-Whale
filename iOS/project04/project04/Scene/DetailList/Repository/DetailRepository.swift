//
//  DetailRepository.swift
//  project04
//
//  Created by 남기범 on 2020/11/25.
//

import Foundation

protocol DetailRepositoryProtocol {
    func fetchDetailList(bucketNo: Int, completion: @escaping ([RealmDetail]) -> Void)
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
    
    func fetchDetailList(bucketNo: Int, completion: @escaping ([RealmDetail]) -> Void) {
        
        // RealmBucket 인자가 다름
        NetworkService.shared.request(from: Endpoint.details.urlString + "/\(bucketNo)",
                                      method: .GET,
                                      completion: { [weak self] result in
                                        switch result {
                                        case .success(let data):
                                            let detailFetch = try? JSONDecoder().decode(Response<Info>.self, from: data)
                                            completion(detailFetch?.data.details.allDetails ?? [])
                                        case .failure(let error):
                                            print(error)
                                            completion(self?.local.load() ?? [])
                                        }
                                      })
    }
    
    func appendDetailList(_ element: RealmDetail) {
        let data = try? JSONEncoder().encode(["bucketNo": "\(element.bucketNo)", "title": element.title, "dueDate": element.dueDate])
        NetworkService.shared.request(from: Endpoint.details.urlString,
                                      method: .POST,
                                      body: data,
                                      completion: { [weak self] result in
                                        switch result {
                                        case .success(_):
                                            break
                                        case .failure(let error):
                                            print(error)
                                            self?.local.append(element)
                                        }
                                      })
    }
    
    func removeDetailList(at index: Int) {
        NetworkService.shared.request(from: Endpoint.details.urlString + "/\(index)",
                                      method: .DELETE,
                                      completion: {  result in
                                        switch result {
                                        case .success(_):
                                            break
                                        case .failure(_):
                                            break
                                        }
            
        })
//        local.remove(at: index)
    }
    
    func reviseDetailList(element: RealmDetail, title: String, dueDate: String) {
        let data = try? JSONEncoder().encode(["title": title, "dueDate": dueDate])
        NetworkService.shared.request(from: Endpoint.details.urlString + "/\(element.no)",
                                      method: .PATCH,
                                      body: data,
                                      completion: { result in
                                        switch result {
                                        case .success(_):
                                            break
                                        case .failure(_):
                                            break
                                        }
                                      })
        local.revise(element: element, title: title, dueDate: dueDate)
    }
    
    func reviseDetailListStatus(element: RealmDetail) {
        let data = try? JSONEncoder().encode(["status": "A"])
        NetworkService.shared.request(from: Endpoint.details.urlString + "/\(element.bucketNo)",
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
