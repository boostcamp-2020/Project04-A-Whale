//
//  RealmTransaction.swift
//  project04
//
//  Created by jaejeon on 2020/12/10.
//

import Foundation
import RealmSwift

class RealmTransaction: Object {
    @objc dynamic var url: String = ""
    @objc dynamic var method: String = ""
    @objc dynamic var data: Data?
}
