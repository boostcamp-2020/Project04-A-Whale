//
//  DetailListUseCase.swift
//  project04
//
//  Created by 남기범 on 2020/11/24.
//

import Foundation

protocol DetailListUseCase {
    func fetch() -> [DetailList]
    func append(_ element: DetailList)
    func remove(at index: Int)
    func revise(at index: Int, element: DetailList)
}
