//
//  checkTokenExpired.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import Foundation
import UIKit

func checkTokenExpired() {
    let auth = AccessToken()
    
    guard auth.token == "",
          let vc = UIApplication.shared.windows.first?.rootViewController,
          let sceneDelegate = vc.view.window?.windowScene?.delegate as? SceneDelegate else {
        return
    }
    sceneDelegate.switchRootViewController()
    showToast(message: "로그인 유지 시간 만료", font: .systemFont(ofSize: 14))
}
