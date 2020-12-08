//
//  Endpoint.swift
//  project04
//
//  Created by jaejeon on 2020/12/08.
//

import Foundation

enum Endpoint: String {
    static let baseURL = "http://101.101.210.76:8000"
    case buckets
    
    var urlString: String {
        return Endpoint.baseURL + "/\(self)"
    }
}
