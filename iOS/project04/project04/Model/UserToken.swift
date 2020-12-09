//
//  AccessToken.swift
//  project04
//
//  Created by 남기범 on 2020/12/09.
//

import Foundation

@propertyWrapper
struct UserInfo {
    private let key: String
    var wrappedValue: String {
        get {
            UserDefaults.standard.string(forKey: key) ?? ""
        }
        set {
            UserDefaults.standard.set(newValue, forKey: key)
        }
    }
    
    init(key: String) {
        self.key = key
    }
}

struct AccessToken {
    @UserInfo(key: "token") var token: String
}
