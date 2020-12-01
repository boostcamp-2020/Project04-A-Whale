//
//  MainTabBarController.swift
//  project04
//
//  Created by 남기범 on 2020/11/30.
//

import Foundation
import UIKit

final class MainTabBarController: UITabBarController {
    private let bucketList = BucketCoordinator(UINavigationController())
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupViewControllers()
    }
    
    private func setupViewControllers() {
        bucketList.pushViewController()
        viewControllers = [bucketList.navigationController]
    }
}
