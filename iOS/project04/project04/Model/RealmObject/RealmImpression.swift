//
//  RealmImpression.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation
import RealmSwift

class RealmImpression: Object, Codable {
    @objc dynamic var no: Int = 0
    @objc dynamic var text: String = ""
    @objc dynamic var bucketNo: Int = 0
    
    private enum CodingKeys: String, CodingKey {
        case no
        case text = "description"
        case bucketNo
    }
}
