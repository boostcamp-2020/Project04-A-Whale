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
    private let feed = FeedCoordinator(UINavigationController())
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupViewControllers()
    }
    
    private func setupViewControllers() {
        bucketList.pushViewController()
        let bucketIcon = UITabBarItem(title: "bucket", image: UIImage(named: "bucketList_icon"), selectedImage: nil)
        let feedIcon = UITabBarItem(title: "feed", image: UIImage(systemName: "bell"), selectedImage: UIImage(systemName: "bell.fill"))
        bucketList.navigationController.tabBarItem = bucketIcon
        feed.navigationController.tabBarItem = feedIcon
        tabBar.tintColor = .black
        viewControllers = [bucketList.navigationController, feed.navigationController]
    }
}
