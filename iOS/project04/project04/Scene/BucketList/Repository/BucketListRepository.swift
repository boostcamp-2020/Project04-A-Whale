//
//  BucketListRepository.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation

class BucketListRepository {
    private let local: BucketLocalAgent
    
    init(local: BucketLocalAgent) {
        self.local = local
    }
    
    func fetchUserIfo(completion: @escaping (RealmUserData) -> Void) {
        NetworkService.shared.request(from: Endpoint.userInfo.urlString, method: .GET) { [weak self] (result) in
            switch result {
            case .success(let data):
                guard let response = try? JSONDecoder().decode(Response<RealmUserData>.self, from: data) else {
                    return
                }
                DispatchQueue.main.async {
                    self?.local.sync(userData: response.data)
                }
            case .failure(let error):
                print(error)
            }
            DispatchQueue.main.async {
                completion(self?.local.load() ?? RealmUserData())
            }
        }
    }
    
    func fetchBucketList(completion: @escaping ([RealmBucket]) -> Void) {
        NetworkService.shared.request(from: Endpoint.buckets.urlString, method: .GET) { [weak self] (result) in
            switch result {
            case .success(let data):
                let response = try? JSONDecoder().decode(Response<ResponseBucket>.self, from: data)
                let buckets = response?.data.allBuckets
                
                DispatchQueue.main.async {
                    self?.local.sync(buckets: buckets ?? [])
                }
            case .failure(let error):
                print(error)
            }
            
            DispatchQueue.main.async {
                completion(self?.local.load() ?? [])
            }
        }
    }
    
    func appendBucketList(_ element: RealmBucket) {
        local.append(element)
    }
    
    func removeBucketList(at index: Int) {
        local.remove(at: index)
    }
    
    func reviseBucketList(at index: Int, element: RealmBucket) {
        local.revise(at: index, element: element)
    }
    
    func reviseBucketListStatus(element: RealmBucket) {
        let data = try? JSONEncoder().encode(["status": "A"])
        let url = Endpoint.buckets.urlString + "/\(element.no)"
        
        NetworkService.shared.request(from: url, method: .PATCH, body: data) { (result) in
            switch result {
            case .success(_):
                break
            case .failure(_):
                TransactionRecorder.shared.record(url: url, method: .PATCH, data: data)
            }
        }
        
        local.reviseStatus(element: element)
    }
}
