//
//  DetailLocalAgent.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation
import RealmSwift

protocol DetailLocalAgentProtocol {
    func load(bucketNo: Int) -> [RealmDetail]
    func append(_ element: RealmDetail)
    func remove(at index: Int)
    func revise(element: RealmDetail, title: String, dueDate: String)
    func reviseStatus(element: RealmDetail)
    func sync(details: [RealmDetail])
}

class DetailLocalAgent: DetailLocalAgentProtocol {
    func load(bucketNo: Int) -> [RealmDetail] {
        do {
            let result = try Realm().objects(RealmDetail.self)
                .filter("bucketNo == \(bucketNo)")

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
                let result = realm.objects(RealmDetail.self).filter("#no == \(index)")
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
