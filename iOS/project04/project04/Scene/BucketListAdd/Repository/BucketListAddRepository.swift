//
//  BucketListAddRepository.swift
//  project04
//
//  Created by jaejeon on 2020/12/07.
//

import Foundation

protocol BucketListAddRepositoryProtocol {
    func fetch(with no: Int?, completion: @escaping ([RealmDetail]) -> Void)
}

class BucketListAddRepository: BucketListAddRepositoryProtocol {
    var network: PresetAPIAgent
        
    init(network: PresetAPIAgent) {
        self.network = network
    }
    func fetch(with no: Int?, completion: @escaping ([RealmDetail]) -> Void) {
        guard let no = no
        else {
            completion([])
            return
        }
        network.request(from: PresetAPIAgent.RequestURL.fetch.rawValue + "\(no)", method: .GET, body: nil) { (result) in
            switch result {
            case .success(_):
                break
            case .failure(_):
                completion((1...5).map({ RealmDetail(value: [$0,
                                                            "\($0)",
                                                            "O",
                                                            "\($0)",
                                                            "\($0)",
                                                            "\($0)",
                                                            nil,
                                                            0]) }))
            }
        }
    }
    

}
