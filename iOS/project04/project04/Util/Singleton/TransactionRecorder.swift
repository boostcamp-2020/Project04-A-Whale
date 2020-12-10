//
//  TransactionRecorder.swift
//  project04
//
//  Created by jaejeon on 2020/12/10.
//

import Foundation
import RealmSwift

class TransactionRecorder {
    static let shared = TransactionRecorder()
    
    private init(){}
    
    func record(url: String, method: HTTPMethod, data: Data) {
        let transaction = RealmTransaction(value: [url, method.rawValue, data])
        do {
            let realm = try Realm()
            try realm.write {
                realm.add(transaction)
            }
        } catch {
            print(error)
        }
    }
    
    func execute() {
        var transactions: [RealmTransaction]
        do {
            let results = try Realm().objects(RealmTransaction.self)
            transactions = results.map({ $0 })

        } catch {
            print(error)
        }
        
    }
}
