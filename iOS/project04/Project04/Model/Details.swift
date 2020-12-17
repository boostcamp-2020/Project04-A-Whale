//
//  Details.swift
//  Project04
//
//  Created by 남기범 on 2020/12/17.
//

import Foundation

struct Details: Codable {
    let achieveDetails, openDetails: [RealmDetail]
    
    var allDetails: [RealmDetail] {
        return achieveDetails + openDetails
    }
}
