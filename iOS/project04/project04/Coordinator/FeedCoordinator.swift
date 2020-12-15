//
//  FeedCoordinator.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import Foundation
import UIKit

final class FeedCoordinator: NavigationCoordinator {
    var navigationController: UINavigationController
    
    init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
        self.navigationController.navigationBar.prefersLargeTitles = true
        pushViewController()
    }
    
    func pushViewController() {
        let viewController = UIStoryboard(name: "Feed", bundle: nil).instantiateViewController(identifier: "FeedTableViewController", creator: { coder in
            return FeedTableViewController(coder: coder)
        })
        navigationController.pushViewController(viewController, animated: false)
    }
    
}
