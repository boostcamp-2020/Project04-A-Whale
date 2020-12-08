//
//  SettingCoordinator.swift
//  project04
//
//  Created by 남기범 on 2020/12/08.
//

import Foundation
import UIKit

final class SettingCoordinator: NavigationCoordinator {
    var navigationController: UINavigationController
    
    init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
        pushViewController()
    }
    
    func pushViewController() {
        let viewController = UIStoryboard(name: "Setting", bundle: nil).instantiateViewController(identifier: "SettingViewController", creator: { coder in
            return SettingViewController(coder: coder, coordinator: self)
        })
        navigationController.pushViewController(viewController, animated: false)
    }
    
    func presentLogin(_ navigationController: UINavigationController) {
        let viewController = UIStoryboard(name: "Login", bundle: nil).instantiateViewController(identifier: "LoginViewController", creator: { coder in
            let coordinator = LoginCoordinator(navigationController)
            return LoginViewController(coder: coder, coordinator: coordinator)
        })
        
        navigationController.present(viewController, animated: true, completion: nil)
    }
}
