//
//  ImpressionLocalAgent.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation
import RealmSwift

protocol ImpressionLocalAgentProtocol {
    func fetch(bucketNo: Int) -> RealmImpression?
    func save(_ element: RealmImpression)
    func edit(element: RealmImpression?, text: String)
    func sync(impression: RealmImpression?)
}

class ImpressionLocalAgent: ImpressionLocalAgentProtocol {
    func fetch(bucketNo: Int) -> RealmImpression? {
        do {
            let realm = try Realm()
            let object = realm.objects(RealmImpression.self).filter("#bucketNo == \(bucketNo)").first
            return object
        } catch {
            print(error)
            return nil
        }
    }
    
    func save(_ element: RealmImpression) {
        do {
            let realm = try Realm()
            
            try realm.write {
                realm.add(element)
            }
        } catch {
            print(error)
        }
    }
    
    func edit(element: RealmImpression?, text: String) {
        do {
            try Realm().write {
                element?.text = text
            }
        } catch {
            print(error)
        }
    }
    
    func sync(impression: RealmImpression?) {
        guard let impression = impression else {
            return
        }
        do {
            let realm = try Realm()
            let result = realm.objects(RealmImpression.self).filter("#bucketNo == \(impression.bucketNo)").first
            try realm.write {
                if let object = result {
                    realm.delete(object)
                }
                realm.add(impression)
            }
        } catch {
            print(error)
        }
    }
}
