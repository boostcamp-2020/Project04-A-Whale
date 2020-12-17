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
    private var local: DetailLocalAgentProtocol
    
    required init(local: DetailLocalAgentProtocol) {
        self.local = local
    }
    
    func fetchDetailList(bucketNo: Int, completion: @escaping ([RealmDetail]) -> Void) {
        NetworkService.shared.request(from: Endpoint.details.urlString + "/\(bucketNo)",
                                      method: .GET,
                                      completion: { [weak self] result in
                                        switch result {
                                        case .success(let data):
                                            let detailFetch = try? JSONDecoder().decode(Response<Bucket>.self, from: data)
                                            DispatchQueue.main.async {
                                                self?.local.sync(details: detailFetch?.data.details.allDetails ?? [])
                                            }
                                        case .failure(let error):
                                            print(error)
                                            
                                        }
                                        DispatchQueue.main.async {
                                            completion(self?.local.load(bucketNo: bucketNo) ?? [])
                                        }
                                      })
        
    }
    
    func appendDetailList(_ element: RealmDetail) {
        let data = try? JSONSerialization.data(withJSONObject: ["bucketNo": element.bucketNo, "title": element.title, "dueDate": element.dueDate], options: [])
        
        NetworkService.shared.request(from: Endpoint.details.urlString,
                                      method: .POST,
                                      body: data,
                                      completion: { [weak self] result in
                                        switch result {
                                        case .success(let data):
                                            let response = try? JSONDecoder().decode(Response<[String: RealmDetail]>.self, from: data)
                                            let detail = response?.data["detail"]
                                            element.no = detail?.no ?? 0
                                        case .failure(let error):
                                            print(error)
                                            
                                            TransactionRecorder.shared.record(url: Endpoint.details.urlString, method: .POST, data: data)
                                        }
                                        DispatchQueue.main.async {
                                            self?.local.append(element)
                                        }
                                      })
    }
    
    func removeDetailList(at index: Int) {
        let url = Endpoint.details.urlString + "/\(index)"
        NetworkService.shared.request(from: url,
                                      method: .DELETE,
                                      completion: {  result in
                                        switch result {
                                        case .success(_):
                                            break
                                        case .failure(_):
                                            TransactionRecorder.shared.record(url: url, method: .DELETE, data: nil)
                                        }
            
        })
        local.remove(at: index)
    }
    
    func reviseDetailList(element: RealmDetail, title: String, dueDate: String) {
        let data = try? JSONEncoder().encode(["title": title, "dueDate": dueDate])
        let url = Endpoint.details.urlString + "/\(element.no)"
        NetworkService.shared.request(from: url,
                                      method: .PATCH,
                                      body: data,
                                      completion: { result in
                                        switch result {
                                        case .success(_):
                                            break
                                        case .failure(_):
                                            TransactionRecorder.shared.record(url: url, method: .PATCH, data: data)
                                        }
                                      })
        local.revise(element: element, title: title, dueDate: dueDate)
    }
    
    func reviseDetailListStatus(element: RealmDetail) {
        let data = try? JSONEncoder().encode(["status": "A"])
        let url = Endpoint.details.urlString + "/\(element.no)"
        NetworkService.shared.request(from: url,
                                      method: .PATCH,
                                      body: data,
                                      completion: { result in
                                        switch result {
                                        case .success(_):
                                            break
                                        case .failure(_):
                                            TransactionRecorder.shared.record(url: url, method: .PATCH, data: data)
                                        }
                                      })
        
        local.reviseStatus(element: element)
    }
}
