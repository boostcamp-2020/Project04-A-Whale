//
//  BucketListAddViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import Foundation

protocol BucketViewModelProtocol {
    var bucket: RealmBucket? { get set }
    var didChangeBucket: ((RealmBucket) -> Void)? { get set }
}

class BucketListAddViewModel: BucketViewModelProtocol, DetailListViewModelProtocol {
    
    var bucket: RealmBucket? {
        didSet {
            guard let bucket = self.bucket else { return }
            didChangeBucket?(bucket)
        }
    }
    var didChangeBucket: ((RealmBucket) -> Void)?
    
    var list: [RealmDetail.Section : [RealmDetail]] = [:] {
        didSet {
            listDidChange?(self)
        }
    }
    
    var usecase: DetailListUseCaseProtocol
    
    var listDidChange: ((DetailListViewModelProtocol) -> ())?
    
    
    required init(usecase: DetailListUseCaseProtocol) {
        self.usecase = usecase
    }
    
    func listDeleteAction(at index: Int) {
        list[.todo]?.remove(at: index)
    }
    
    func listAddAction(_ newElement: RealmDetail) {
        let item = newElement
        list[.todo]?.append(item)
    }
    
    func listReviseAction(_ element: RealmDetail, title: String, dueDate: String) {
        usecase.revise(element: element, title: title, dueDate: dueDate)
        listDidChange?(self)
    }
    
    func listStatusReviseAction(at index: Int) {
        
    }
    
    func listFetchAction(with index: Int?) {
        usecase.fetch(with: index, completion: { [weak self] list in
            self?.list[.todo] = list
        })
    }

}
