//
//  Response.swift
//  project04
//
//  Created by jaejeon on 2020/12/08.
//

import Foundation

struct Response<T: Codable>: Codable {
    let message: String
    let data: T
}
