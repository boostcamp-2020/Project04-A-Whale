//
//  RealmBucket.swift
//  project04
//
//  Created by jaejeon on 2020/11/26.
//

import Foundation
import RealmSwift

class RealmBucket: Object, Codable {
    enum Section: String {
        case info
        case todo
        case done
    }
    
    @objc dynamic var no: Int = 0
    @objc dynamic var title: String = ""
    @objc dynamic var subTitle: String = ""
    @objc dynamic var status: String = "O"
    @objc dynamic var refCount: Int = 0
    @objc dynamic var createdAt: String = ""
    @objc dynamic var updatedAt: String = ""
    @objc dynamic var userNo: Int = 0
    
    enum CodingKeys: String, CodingKey {
        case no, title, status
        case subTitle = "description"
        case refCount, createdAt, updatedAt, userNo
    }
}
