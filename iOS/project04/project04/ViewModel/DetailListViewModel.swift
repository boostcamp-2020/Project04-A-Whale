//
//  DetailListViewModel.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import Foundation

protocol DetailListViewModelProtocol {
    var list: [DetailList]? { get }
    var listDidChange: ((DetailListViewModelProtocol) -> ())? { get set }
    func listDeleteAction(at index: Int)
    func listAddAction(_ newElement: DetailList)
    func listReviseAction(_ newElement: DetailList, at index: Int)
    init(list: [DetailList])
}

class DetailListViewModel: DetailListViewModelProtocol {
    var list: [DetailList]? {
        didSet {
            self.listDidChange?(self)
        }
    }
    
    var listDidChange: ((DetailListViewModelProtocol) -> ())?
    
    required init(list: [DetailList]) {
        self.list = list
    }
    
    func listDeleteAction(at index: Int) {
        list?.remove(at: index)
    }
    
    func listAddAction(_ newElement: DetailList) {
        list?.append(newElement)
    }
    
    func listReviseAction(_ newElement: DetailList, at index: Int) {
        list?[index] = newElement
    }
}
