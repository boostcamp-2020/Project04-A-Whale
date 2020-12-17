//
//  RealmFeed.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import Foundation
import RealmSwift

class RealmFeed: Object, Codable {
    @objc dynamic var no: Int = 0
    @objc dynamic var content: String = ""
    @objc dynamic var userNo: Int = 0
    @objc dynamic var date: String = ""
    @objc dynamic var nickname: String = ""
}
