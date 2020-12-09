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
    func save(text: String)
    func edit(element: RealmImpression, text: String)
}

class ImpressionLocalAgent {
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
    
    func save(bucketNo: Int, text: String) {
        do {
            let realm = try Realm()
            
            try realm.write {
                let object = realm.objects(RealmImpression.self).filter("#bucketNo == \(bucketNo)")
                realm.delete(object)
                let impression = RealmImpression(value: [text, bucketNo])
                realm.add(impression)
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
}
