//
//  SearchBucket.swift
//  project04
//
//  Created by jaejeon on 2020/12/09.
//

import Foundation

struct SearchBucket: Codable {
    let no: Int
    let title, bucketDescription: String
    let refCount: Int
    let nickname: String

    enum CodingKeys: String, CodingKey {
        case no, title
        case bucketDescription = "description"
        case refCount, nickname
    }
}
