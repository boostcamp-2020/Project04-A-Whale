//
//  RealmImpression.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation
import RealmSwift

class RealmImpression: Object, Codable {
    @objc dynamic var text: String = ""
    @objc dynamic var bucketNo: Int = 0
    
    private enum CodingKeys: String, CodingKey {
        case text = "description"
    }
    
    required convenience init(from decoder: Decoder) throws {
        self.init()
        let values = try decoder.container(keyedBy: CodingKeys.self)
        text = try values.decode(String.self, forKey: .text)
    }
}
