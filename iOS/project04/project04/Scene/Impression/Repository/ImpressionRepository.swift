//
//  ImpressionRepository.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation


//protocol ImpressionUseCaseProtocol {
//    func fetch(bucketNo: Int)
//    func save(text: String)
//    func edit(text: String)
//}
protocol ImpressionRepositoryProtocol {
    func fetchImpression(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void)
    func saveImpression(text: String)
    func editImpression(element: RealmImpression?, text: String)
}

class ImpressionRepository: ImpressionRepositoryProtocol {
    private var local: ImpressionLocalAgent
    
    init(local: ImpressionLocalAgent) {
        self.local = local
    }
    
    func fetchImpression(bucketNo: Int, completion: @escaping (RealmImpression?) -> Void) {
        // /2 부분 -> /\(bucketNo)
        NetworkService.shared.request(from: Endpoint.achieves.urlString + "/\(bucketNo)",
                                      method: .GET, completion: { [weak self] result in
                                        switch result {
                                        case .success(let data):
                                            let impression = try? JSONDecoder().decode(Impression.self, from: data)
                                            completion(impression?.data)
                                            break
                                        case .failure(let error):
                                            print(error)
                                            completion(self?.local.fetch(bucketNo: bucketNo))
                                        }
                                      })
    }
    
    func saveImpression(text: String) {
        let data = try? JSONEncoder().encode(["description": text, "bucketNo": "6"])
        // 타임아웃 걸림
        // bucketNo 파라미터로 받아야함
        NetworkService.shared.request(from: Endpoint.achieves.urlString,
                                      method: .POST,
                                      body: data,
                                      completion: { result in
                                        
                                        switch result {
                                        case .success(let data):
                                            let element = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: String]
                                            print(element?["message"])
                                            break
                                        case .failure(let error):
                                            print(error)
                                        }
                                      })
        local.save(text: text)
    }
    
    func editImpression(element: RealmImpression?, text: String) {
        let data = try? JSONEncoder().encode(["description": text])
        // /2 -> /\(element.bucketNo)
        // 성공 했다고 하는데, 반영이 안되어서 나옴
        NetworkService.shared.request(from: Endpoint.achieves.urlString + "/2",
                                      method: .PUT,
                                      body: data,
                                      completion: { result in
                                        
                                        switch result {
                                        case .success(let data):
                                            let element = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: String]
                                            print(element?["message"])
                                            break
                                        case .failure(let error):
                                            print(error)
                                        }
                                      })
        
        local.edit(element: element, text: text)
    }
}
