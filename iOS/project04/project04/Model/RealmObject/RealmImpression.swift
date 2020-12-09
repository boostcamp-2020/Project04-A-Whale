//
//  RealmImpression.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation
import RealmSwift

struct Impression: Codable {
    let message: String
    let data: RealmImpression
}

class RealmImpression: Object, Codable {
    @objc dynamic var text: String = ""
    @objc dynamic var bucketNo: Int = 0
    
    private enum CodingKeys: String, CodingKey {
        case text = "description"
        case bucketNo
    }
}
