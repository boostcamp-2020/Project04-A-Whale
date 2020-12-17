//
//  BucketLocalAgent.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation
import RealmSwift

protocol BucketLocalAgentProtocol {
    func load() -> RealmUserData?
    func load() -> [RealmBucket]
    func reviseStatus(element: RealmBucket)
    func sync(buckets: [RealmBucket])
    func sync(userData: RealmUserData)
}

class BucketLocalAgent: BucketLocalAgentProtocol {
    func load() -> RealmUserData? {
        do {
            let realm = try Realm()
            let userData = realm.objects(RealmUserData.self).first
            return userData
        } catch {
            print(error)
            return nil
        }
    }
    
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

    func reviseStatus(element: RealmBucket) {
        do {
            let realm = try Realm()
            try realm.write {
                element.status = "A"
            }
        } catch {
            print(error)
        }
    }
    
    func sync(buckets: [RealmBucket]) {
        do {
            let realm = try Realm()
            let result = realm.objects(RealmBucket.self)
            if buckets.count == result.count {
                return
            }
            try realm.write {
                realm.delete(result)
                realm.add(buckets)
            }
        } catch {
            print(error)
        }
    }
    
    func sync(userData: RealmUserData) {
        do {
            let realm = try Realm()
            let result = realm.objects(RealmUserData.self)
            try realm.write {
                realm.delete(result)
                realm.add(userData)
            }
        } catch {
            print(error)
        }
    }
}
