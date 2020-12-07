//
//  RealmBucket.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation
import RealmSwift

class RealmBucket: Object {
    enum Section: String {
        case todo
        case done
    }
    
    @objc dynamic var id: Int = 0
    @objc dynamic var title: String = ""
    @objc dynamic var subTitle: String = ""
    @objc dynamic var status: String = "O"
}
