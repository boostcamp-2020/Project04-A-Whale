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
    }
    
    var title: String
    var dueDate: String
}
