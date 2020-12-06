//
//  ListUseCase.swift
//  project04
//
//  Created by 남기범 on 2020/11/25.
//

import Foundation

protocol ListUseCase {
    associatedtype Item: Any
    
    func fetch(completion: @escaping ([Item]) -> Void)
    func append(_ element: Item)
    func remove(at index: Int)
    func revise(at index: Int, element: Item)
    func reviseStatus(element: Item)
}
