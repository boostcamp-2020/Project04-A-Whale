//
//  RealmUserData.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import Foundation
import RealmSwift

class RealmUserData: Object, Codable {
    @objc dynamic var no: Int = 0
    @objc dynamic var nickname: String = ""
    @objc dynamic var userDescription: String = ""
    @objc dynamic var rank: String?
    @objc dynamic var achieveRate: Int = 0
    @objc dynamic var followerCount: Int = 0
    @objc dynamic var followingCount: Int = 0
    
    enum CodingKeys: String, CodingKey {
        case no, nickname, rank, achieveRate, followerCount, followingCount
        case userDescription = "description"
    }
}
