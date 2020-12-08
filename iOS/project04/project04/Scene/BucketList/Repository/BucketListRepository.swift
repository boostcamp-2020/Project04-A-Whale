//
//  BucketListRepository.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation

class BucketListRepository {
    var local: BucketLocalAgent
    
    init(local: BucketLocalAgent) {
        self.local = local
    }
    
    func fetchBucketList(completion: @escaping ([RealmBucket]) -> Void) {
        NetworkService.shared.request(from: Endpoint.buckets.urlString, method: .GET) { [weak self] (result) in
            switch result {
            case .success(let data):
                let response = try? JSONDecoder().decode(Response<ResponseBucket>.self, from: data)
                let buckets = response?.data.allBuckets
                completion(buckets ?? [])
            case .failure(_):
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
        local.reviseStatus(element: element)
    }
}
