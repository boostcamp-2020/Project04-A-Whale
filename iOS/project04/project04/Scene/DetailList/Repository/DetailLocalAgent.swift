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
    
    func load() -> [Detail] {
        do {
            let result = try Realm().objects(RealmDetail.self)
                .filter("bucketNo == \(bucketNo)")

            return result.map { Detail(no: $0.no,
                                       title: $0.title,
                                       status: $0.status,
                                       dueDate: $0.dueDate,
                                       createdAt: $0.createdAt,
                                       updatedAt: $0.updatedAt,
                                       deletedAt: $0.deletedAt,
                                       bucketNo: $0.bucketNo) }
        } catch {
            print(error)
            return []
        }
    }
    
    func append(_ element: Detail) {
        do {
            let realm = try Realm()
            try Realm().write {
                let realmDetail = RealmDetail(value: [
                    element.no,
                    element.title,
                    element.status,
                    element.dueDate,
                    element.createdAt,
                    element.updatedAt,
                    element.deletedAt as Any,
                    bucketNo
                ])
                realm.add(realmDetail)
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
    
    func revise(at index: Int, element: Detail) {
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
}
