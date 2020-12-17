//
//  ResponseBucket.swift
//  project04
//
//  Created by jaejeon on 2020/12/08.
//

import Foundation

struct Buckets: Codable {
    let openBuckets, achieveBuckets, giveUpBuckets: [RealmBucket]
    
    var allBuckets: [RealmBucket] {
        return openBuckets + achieveBuckets + giveUpBuckets
    }
}
