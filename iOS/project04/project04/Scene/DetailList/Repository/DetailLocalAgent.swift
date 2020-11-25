//
//  DetailLocalAgent.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation
import RealmSwift

class DetailLocalAgent: LocalService {
    func load() -> [DetailList] {
        do {
            let result = try Realm().objects(RealmDetailList.self)
            guard let realmList = result.first else {
                return []
            }
            
            var list = [DetailList]()
            for element in realmList.detailList {
                list.append(
                    DetailList(title: element.title,
                               dueDate: element.dueDate)
                )
            }
            return list
        } catch {
            print(error)
            return []
        }
    }
    
    func append(_ element: DetailList) {
        do {
            let realm = try Realm()
            try Realm().write {
                let result = realm.objects(RealmDetailList.self)
                if !result.isEmpty {
                    result.first?.detailList.append(
                        RealmDetail(value: [element.title,
                                            element.dueDate])
                    )
                } else {
                    realm.add(RealmDetailList(value: ["detailList": [
                                                        RealmDetail(value: [element.title,
                                                                            element.dueDate])]
                    ]))
                }
            }
        } catch {
            print(error)
        }
    }
    
    func remove(at index: Int) {
        do {
            let realm = try Realm()
            try realm.write {
                let result = realm.objects(RealmDetailList.self)
                result.first?.detailList.remove(at: index)
            }
        } catch {
            print(error)
        }
    }
    
    func revise(at index: Int, element: DetailList) {
        do {
            let realm = try Realm()
            try realm.write {
                let result = realm.objects(RealmDetailList.self)
                result.first?.detailList[index] = RealmDetail(value: [element.title,
                                                                      element.dueDate])
            }
        } catch {
            print(error)
        }
    }
}
