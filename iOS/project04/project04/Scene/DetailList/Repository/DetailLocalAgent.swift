//
//  DetailLocalAgent.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation
import RealmSwift

class DetailLocalAgent: LocalService {
    
    var bucketNo: Int
    
    init(bucketNumber: Int) {
        self.bucketNo = bucketNumber
    }
    
    func load() -> [RealmDetail] {
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
                element.bucketNo = bucketNo
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
                let result = realm.objects(RealmDetail.self).filter("bucketNo == \(bucketNo)")
                realm.delete(result[index])
            }
        } catch {
            print(error)
        }
    }
    
    func revise(at index: Int, element: RealmDetail) {
        do {
            let realm = try Realm()
            try realm.write {
                let result = realm.objects(RealmDetail.self)
                    .filter("bucketNo == \(bucketNo) && #no == \(element.no)").first
                
                result?.title = element.title
                result?.status = element.status
                result?.dueDate = element.dueDate
                result?.updatedAt = element.updatedAt
                result?.deletedAt = element.deletedAt
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
}
