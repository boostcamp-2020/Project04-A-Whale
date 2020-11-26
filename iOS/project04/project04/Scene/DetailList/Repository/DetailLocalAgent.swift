//
//  DetailLocalAgent.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation
import RealmSwift

class DetailLocalAgent: LocalService {
    var bucket: RealmBucket?
    
    func load() -> [Detail] {
        do {
            guard let realmBucket = bucket else {
                return []
            }
            let result = try Realm().objects(RealmDetail.self)
                .filter("bucket.id == \(realmBucket.id)")

            var list = [Detail]()
            for element in result {
                list.append(
                    Detail(title: element.title,
                               dueDate: element.dueDate)
                )
            }
            return list
        } catch {
            print(error)
            return []
        }
    }
    
    func append(_ element: Detail) {
        do {
            let realm = try Realm()
            try Realm().write {
                guard let realmBucket = self.bucket else {
                    return
                }
                let realmDetail = RealmDetail(value: [realmBucket, element.title, element.dueDate])
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
                guard let realmBucket = bucket else {
                    return
                }
                let result = realm.objects(RealmDetail.self).filter("bucket.id == \(realmBucket.id)")
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
                guard let realmBucket = bucket else {
                    return
                }
                let result = realm.objects(RealmDetail.self).filter("bucket.id == \(realmBucket.id)")
                result[index].title = element.title
                result[index].dueDate = element.dueDate
            }
        } catch {
            print(error)
        }
    }
}
