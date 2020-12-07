//
//  BucketListAddViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import Foundation

protocol BucketListAddViewModelProtocol {
    var bucket: RealmBucket? { get set }
    var didChangeBucket: ((RealmBucket) -> Void)? { get set }
    var didChangeDetails: (([RealmDetail.Section: [RealmDetail]]) -> Void)? { get set }
    func fetch() -> Void
    func append(detail: RealmDetail) -> Void
}

class BucketListAddViewModel: BucketListAddViewModelProtocol {
    var bucket: RealmBucket? {
        didSet {
            guard let bucket = self.bucket else { return }
            didChangeBucket?(bucket)
        }
    }
    var details: [RealmDetail] = [] {
        didSet {
            didChangeDetails?([.todo: details])
        }
    }
    
    var didChangeBucket: ((RealmBucket) -> Void)?
    var didChangeDetails: (([RealmDetail.Section : [RealmDetail]]) -> Void)?
    
    let usecase: BucketListAddUseCase
    
    init(usecase: BucketListAddUseCase) {
        self.usecase = usecase
    }
    
    func fetch() {
        guard let bucket = self.bucket
        else {
            self.details = []
            return
        }
        usecase.fetch(with: bucket, completion: { [weak self] (details) in
            self?.details = details
        })
        
    }
    
    func append(detail: RealmDetail) {
        
    }
    
    
}
