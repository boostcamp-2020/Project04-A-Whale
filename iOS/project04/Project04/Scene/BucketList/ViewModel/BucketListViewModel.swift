//
//  BucketListViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/11/23.
//

import Foundation
import RealmSwift

protocol BucketListViewModelProtocol {
    var userInfo: RealmUserData { get }
    var buckets: [RealmBucket.Section: [RealmBucket]] { get }
    var count: Int { get }
    var handler: (([RealmBucket.Section: [RealmBucket]]) -> Void)? { get set }
    func fetch() -> Void
    func reviseStatus(index: Int)
    func autoIncreaseIdValue() -> Int
}

class BucketListViewModel: BucketListViewModelProtocol {
    private let useCase: BucketListUseCase
    var userInfo: RealmUserData = RealmUserData() {
        didSet {
            handler?(buckets)
        }
    }
    
    var handler: (([RealmBucket.Section: [RealmBucket]]) -> Void)?
    var buckets: [RealmBucket.Section: [RealmBucket]] = [:] {
        didSet {
            handler?(buckets)
        }
    }
    
    var count: Int {
        (buckets[.todo]?.count ?? 0) + (buckets[.done]?.count ?? 0)
    }
    
    init(useCase: BucketListUseCase) {
        self.useCase = useCase
    }
    
    func fetch() {
        useCase.fetch { [weak self] (userData: RealmUserData) in
            self?.userInfo = userData
        }
        
        useCase.fetch { [weak self] (list: [RealmBucket]) in
            let buckets: [RealmBucket.Section: [RealmBucket]] = [.todo: list.filter({ $0.status == "O" }),
                                                                 .done: list.filter({ $0.status == "A" })]
            self?.buckets = buckets
        }
    }

    func reviseStatus(index: Int) {
        guard let bucket = buckets[.todo]?.remove(at: index) else {
            return
        }
        buckets[.done]?.append(bucket)
        useCase.reviseStatus(element: bucket)
    }
    
    func autoIncreaseIdValue() -> Int {
        do {
            let realm = try Realm()
            guard let maxIdValue: Int = realm.objects(RealmBucket.self).max(ofProperty: "no") else {
                return 0
            }
            return maxIdValue + 1
        } catch {
            print(error)
        }
        return 0
    }
}
