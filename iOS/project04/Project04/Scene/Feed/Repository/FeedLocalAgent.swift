//
//  FeedLocalAgent.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import Foundation
import RealmSwift

protocol FeedLocalAgentProtocol {
    func load() -> [RealmFeed]
    func sync(feeds: [RealmFeed])
}

class FeedLocalAgent: FeedLocalAgentProtocol {
    func load() -> [RealmFeed] {
        do {
            let realm = try Realm()
            let feeds = realm.objects(RealmFeed.self)
            return feeds.map { $0 }
        } catch {
            print(error)
            return []
        }
    }
    
    func sync(feeds: [RealmFeed]) {
        do {
            let realm = try Realm()
            let result = realm.objects(RealmFeed.self)
            
            try realm.write {
                realm.delete(result)
                realm.add(feeds)
            }
        } catch {
            print(error)
        }
    }}
