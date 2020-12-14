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
    
    private init() { }
    
    func record(url: String, method: HTTPMethod, data: Data?) {
        let transaction = RealmTransaction(value: [url, method.rawValue, data as Any])
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
        var transactions: [RealmTransaction] = []
        var executedTransactions: [RealmTransaction] = []
        
        do {
            let results = try Realm().objects(RealmTransaction.self)
            transactions = results.map({ $0 })

        } catch {
            print(error)
        }
        
        transactions.forEach { (transaction) in
            guard let method = HTTPMethod(rawValue: transaction.method) else {
                return
            }
            
            NetworkService.shared.request(sync: true, from: transaction.url, method: method, body: transaction.data) { (result) in
                switch result {
                case .success(_):
                    executedTransactions.append(transaction)
                case .failure(let error):
                    print(error)
                }
            }
        }
        do {
            let realm = try Realm()
            try realm.write {
                realm.delete(executedTransactions)
            }
        } catch {
            print(error)
        }
        
    }
}
