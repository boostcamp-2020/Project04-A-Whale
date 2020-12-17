//
//  ImpressionRepository.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation

protocol ImpressionRepositoryProtocol {
    func fetchImpression(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void)
    func saveImpression(_ element: RealmImpression)
    func editImpression(element: RealmImpression?, text: String)
}

class ImpressionRepository: ImpressionRepositoryProtocol {
    private var local: ImpressionLocalAgentProtocol
    
    init(local: ImpressionLocalAgentProtocol) {
        self.local = local
    }
    
    func fetchImpression(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void) {
        NetworkService.shared.request(from: Endpoint.achieves.urlString + "/\(bucketNo)",
                                      method: .GET, completion: { [weak self] result in
                                        switch result {
                                        case .success(let data):
                                            let response = try? JSONDecoder().decode(Response<RealmImpression>.self, from: data)
                                            self?.local.sync(impression: response?.data)
                                        case .failure(_):
                                            break
                                        }
                                        DispatchQueue.main.async {
                                            completion(self?.local.fetch(bucketNo: bucketNo))
                                        }
                                      })
    }
    
    func saveImpression(_ element: RealmImpression) {
        let data = try? JSONEncoder().encode(["description": element.text, "bucketNo": "\(element.bucketNo)"])

        NetworkService.shared.request(from: Endpoint.achieves.urlString,
                                      method: .POST,
                                      body: data,
                                      completion: { result in
                                        
                                        switch result {
                                        case .success(let responseData):
                                            let response = try? JSONSerialization.jsonObject(with: responseData, options: []) as? [String: Any]
                                            
                                            let no = response?["achieveNo"] as? Int
                                            element.no = no ?? 0
                                        case .failure(_):
                                            TransactionRecorder.shared.record(url: Endpoint.achieves.urlString, method: .POST, data: data)
                                            
                                        }
                                        DispatchQueue.main.async { [weak self] in
                                            self?.local.save(element)
                                        }
                                      })
    }
    
    func editImpression(element: RealmImpression?, text: String) {
        let data = try? JSONEncoder().encode(["description": text])
        let url = Endpoint.achieves.urlString + "/\(element?.no ?? 0)"
        NetworkService.shared.request(from: url,
                                      method: .PUT,
                                      body: data,
                                      completion: { result in
                                        
                                        switch result {
                                        case .success(_):
                                            break
                                        case .failure(let error):
                                            print(error)
                                            TransactionRecorder.shared.record(url: url, method: .PUT, data: data)
                                        }
                                        DispatchQueue.main.async { [weak self] in
                                            self?.local.edit(element: element, text: text)
                                        }
                                      })
        
    }
}
