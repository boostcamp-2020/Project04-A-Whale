//
//  RealmDetailList.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation
import RealmSwift

class RealmDetail: Object {
    @objc dynamic var no: Int = 0
    @objc dynamic var title: String = ""
    @objc dynamic var status: String = ""
    @objc dynamic var dueDate: String = ""
    @objc dynamic var createdAt: String = ""
    @objc dynamic var updatedAt: String = ""
    @objc dynamic var deletedAt: String?
    @objc dynamic var bucketNo: Int = 0
}

class RealmDetailList: Object {
    var detailList = List<RealmDetail>()
}
