//
//  DetailMemoryAgent.swift
//  project04
//
//  Created by jaejeon on 2020/12/08.
//

import Foundation

class DetailMemoryAgent: LocalService {
    typealias Item = RealmDetail
    
    var list = [RealmDetail]()
    func load() -> [RealmDetail] {
        return list
    }
    
    func append(_ element: RealmDetail) {
        list.append(element)
    }
    
    func remove(at index: Int) {
        list.remove(at: index)
    }
    
    func revise(at index: Int, element: RealmDetail) {
        list[index] = element
    }
    
    func reviseStatus(element: RealmDetail) {
        element.status = "A"
    }
}
