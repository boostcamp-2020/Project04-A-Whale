//
//  FeedViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import Foundation

protocol FeedViewModelProtocol {
    var count: Int { get }
    var completion: (() -> Void)? { get set }
    func fetch()
    func item(forAt index: IndexPath) -> RealmFeed
}

class FeedViewModel: FeedViewModelProtocol {
    private var feeds = [RealmFeed]() {
        didSet {
            completion?()
        }
    }
    
    private var repository: FeedRepositoryProtocol
    var count: Int {
        return feeds.count
    }
    
    var completion: (() -> Void)?
    
    init(repository: FeedRepositoryProtocol) {
        self.repository = repository
    }
    
    func fetch() {
        repository.fetch { [weak self] (feeds) in
            self?.feeds = feeds
        }
    }
    
    func item(forAt index: IndexPath) -> RealmFeed {
        return feeds[index.row]
    }

}
