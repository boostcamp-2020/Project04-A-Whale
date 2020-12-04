//
//  BucketListAddViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import Foundation

protocol BucketListAddViewModelProtocol {
    var bucket: Bucket? { get set }
    var handler: (([Detail.Section: [Detail]]) -> Void)? { get set }
    func fetch(with: String) -> Void
    func append(detail: Detail) -> Void
}

class BucketListAddViewModel: BucketListAddViewModelProtocol {
    var bucket: Bucket?
    var details: [Detail] = [] {
        didSet {
            handler?([.todo: details])
        }
    }
    var handler: (([Detail.Section : [Detail]]) -> Void)?
    
    let usecase: BucketListAddUseCase
    
    init(usecase: BucketListAddUseCase) {
        self.usecase = usecase
    }
    
    func fetch(with: String) {
        self.details = []
    }
    
    func append(detail: Detail) {
        
    }
    
    
}
