//
//  DetailMemoryAgent.swift
//  project04
//
//  Created by jaejeon on 2020/12/08.
//

import Foundation

protocol DetailMemoryAgentProtocol {
    func load() -> [RealmDetail]
    func append(_ element: RealmDetail)
    func remove(at index: Int)
    func revise(at index: Int, element: RealmDetail)
}

class DetailMemoryAgent: DetailMemoryAgentProtocol {
    private var list = [RealmDetail]()
    
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
}
