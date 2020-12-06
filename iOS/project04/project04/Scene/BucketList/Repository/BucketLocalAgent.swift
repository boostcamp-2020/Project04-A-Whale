//
//  BucketLocalAgent.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation
import RealmSwift

class BucketLocalAgent: LocalService {
    typealias Item = RealmBucket

    func load() -> [RealmBucket] {
        do {
            let realm = try Realm()
            
            let buckets = realm.objects(RealmBucket.self)
            return buckets.map { $0 }
        } catch {
            print(error)
            return []
        }
    }
    
    func append(_ element: RealmBucket) {
        do {
            let realm = try Realm()
            try Realm().write {
                realm.add(element)
            }
        } catch {
            print(error)
        }
    }
    
    func remove(at index: Int) {
        do {
            let realm = try Realm()
            try realm.write {
                let result = realm.objects(RealmBucket.self)
                result[index].status = "A"
            }
        } catch {
            print(error)
        }
    }
    
    func revise(at index: Int, element: RealmBucket) {
        
    }

    func reviseStatus(element: RealmBucket) {
        do {
            try Realm().write {
                element.status = "A"
            }
        } catch {
            print(error)
        }
    }
}
