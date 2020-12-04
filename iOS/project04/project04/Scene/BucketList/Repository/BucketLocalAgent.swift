//
//  BucketLocalAgent.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation
import RealmSwift

class BucketLocalAgent: LocalService {
    typealias Item = Bucket

    func load() -> [Bucket] {
        do {
            let realm = try Realm()
            
            let buckets = realm.objects(RealmBucket.self)
            return buckets.map {
                Bucket(id: $0.id, title: $0.title, status: $0.status)
            }
        } catch {
            print(error)
            return []
        }
    }
    
    func append(_ element: Bucket) {
        do {
            let realm = try Realm()
            try Realm().write {
                let bucket = RealmBucket(value: [element.id ?? 0, element.title])
                realm.add(bucket)
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
    
    func revise(at index: Int, element: Bucket) {
        
    }

}
