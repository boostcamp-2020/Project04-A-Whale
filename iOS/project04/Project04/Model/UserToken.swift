//
//  AccessToken.swift
//  project04
//
//  Created by 남기범 on 2020/12/09.
//

import Foundation

extension UserDefaults {
    static var shared: UserDefaults {
        let appGroupId = "group.namkibeom.project04"
        return UserDefaults(suiteName: appGroupId)!
    }
}

@propertyWrapper
struct UserInfo {
    private let key: String
    var wrappedValue: String {
        get {
            UserDefaults.shared.string(forKey: key) ?? ""
        }
        set {
            UserDefaults.shared.set(newValue, forKey: key)
        }
    }
    
    init(key: String) {
        self.key = key
    }
}

struct AccessToken {
    @UserInfo(key: "token") var token: String
}
