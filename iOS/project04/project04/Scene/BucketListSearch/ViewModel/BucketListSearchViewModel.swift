//
//  BucketListSearchViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/12/04.
//

import Foundation

protocol BucketListSearchViewModelProtocol {
    var buckets: [SearchBucket] { get }
    var filteredBuckets: [SearchBucket] { get }
    var handler: (() -> Void)? { get set }
    var count: Int { get }
    var filteredCount: Int { get }
    func fetch() -> Void
    func search(with keyword: String) -> Void
}


class BucketListSearchViewModel: BucketListSearchViewModelProtocol {
    var count: Int {
        self.buckets.count
    }
    
    var filteredCount: Int {
        self.filteredBuckets.count
    }
    
    let usecase: SearchUseCase

    var buckets: [SearchBucket] = []
    
    var filteredBuckets: [SearchBucket] = []
    
    var handler: (() -> Void)?

    
    init(usecase: SearchUseCase) {
        self.usecase = usecase
    }
    
    func fetch() {
        usecase.fetch { [weak self] (buckets) in
            self?.buckets = buckets
        }
    }
    
    func search(with keyword: String) {
        usecase.serach(with: keyword) { [weak self] (buckets) in
            self?.filteredBuckets = buckets
        }
    }
    
    
}
