//
//  DetailLocalAgent.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation
import RealmSwift

class DetailLocalAgent: LocalService {
    var bucketNo: Int?
    
    init(bucketNumber: Int?) {
        self.bucketNo = bucketNumber
    }
    
    func load() -> [RealmDetail] {
        do {
            let result = try Realm().objects(RealmDetail.self)
                .filter("bucketNo == \(bucketNo ?? -1)")

            return result.map { $0 }
        } catch {
            print(error)
            return []
        }
    }
    
    func append(_ element: RealmDetail) {
        do {
            let realm = try Realm()
            try Realm().write {
                element.bucketNo = bucketNo ?? -1
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
                let result = realm.objects(RealmDetail.self).filter("bucketNo == \(bucketNo ?? -1) && #no == \(index)")
                realm.delete(result)
            }
        } catch {
            print(error)
        }
    }
    
    func revise(element: RealmDetail, title: String, dueDate: String) {
        do {
            try Realm().write {
                element.title = title
                element.dueDate = dueDate
                element.updatedAt = Date().toStringKST(dateFormat: "yyyy-MM-dd HH:mm:ss")
            }
        } catch {
            print(error)
        }
    }
    
    func reviseStatus(element: RealmDetail) {
        do {
            try Realm().write {
                element.status = "A"
            }
        } catch {
            print(error)
        }
    }
    
    func revise(at index: Int, element: RealmDetail) {
         
    }
    
    func sync(details: [RealmDetail]) {
        do {
            let realm = try Realm()
            let result = realm.objects(RealmDetail.self)
            
            try realm.write {
                realm.delete(result)
                realm.add(details)
            }
        } catch {
            print(error)
        }
    }
}
