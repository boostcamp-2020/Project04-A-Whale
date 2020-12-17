//
//  LoginCoordinator.swift
//  project04
//
//  Created by 남기범 on 2020/12/08.
//

import Foundation
import UIKit

class LoginCoordinator: NavigationCoordinator {
    var navigationController: UINavigationController
    
    required init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func presentJoin() {
        let viewController = UIStoryboard(name: "Join", bundle: nil).instantiateViewController(identifier: "JoinViewController", creator: { coder in
            return JoinViewController(coder: coder)
        })
        
        navigationController.present(viewController, animated: true, completion: nil)
    }
    
    func presentTabBarController() {
        let viewController = MainTabBarController()
        navigationController.viewControllers.removeAll()
        navigationController.pushViewController(viewController, animated: true)
    }
}
