//
//  BucketListViewModel.swift
//  project04
//
//  Created by jaejeon on 2020/11/23.
//

import Foundation

class BucketListViewModel {
    var buckets: [Bucket.Section: [Bucket]]? {
        didSet {
            handler(buckets)
        }
    }
    
    var count: Int {
        (self.buckets?[.todo]?.count ?? 0) + (self.buckets?[.done]?.count ?? 0)
    }
    
    private var handler: ([Bucket.Section: [Bucket]]?) -> Void
    
    init(with buckets: [Bucket.Section: [Bucket]], handler: @escaping ([Bucket.Section: [Bucket]]?) -> Void) {
        self.buckets = buckets
        self.handler = handler
        handler(buckets)
    }
    
    func append(bucket: Bucket) {
        self.buckets?[.todo]?.append(bucket)
    }
    
    func remove(bucket: Bucket) {
        self.buckets?[.todo]?.removeAll(where: { $0.title == bucket.title })
        self.buckets?[.done]?.append(bucket)
    }
}
