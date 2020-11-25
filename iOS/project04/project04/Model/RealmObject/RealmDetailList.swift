//
//  RealmDetailList.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation
import RealmSwift

class RealmDetail: Object {
    @objc dynamic var title: String = ""
    @objc dynamic var dueDate: String = ""
}

class RealmDetailList: Object {
    var detailList = List<RealmDetail>()
}
