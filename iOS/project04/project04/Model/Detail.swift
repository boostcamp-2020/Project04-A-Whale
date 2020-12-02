//
//  Detail.swift
//  project04
//
//  Created by NamKiBeom on 2020/11/23.
//

import Foundation

struct Detail: Hashable {
    enum Section: String {
        case todo
        case graph
        case feel
        case done
    }
    
    var no: Int
    var title: String
    var status: String
    var dueDate: String
    var createdAt: String
    var updatedAt: String
    var deletedAt: String?
    var bucketNo: Int
}
