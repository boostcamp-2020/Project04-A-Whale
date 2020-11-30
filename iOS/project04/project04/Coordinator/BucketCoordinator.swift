//
//  BucketCoordinator.swift
//  project04
//
//  Created by 남기범 on 2020/11/30.
//

import Foundation
import UIKit

protocol DetailListPushCoordinator {
    func pushToDetailList(bucket: RealmBucket?)
}

final class BucketCoordinator: NavigationCoordinator {
    var navigationController: UINavigationController
    
    init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func pushViewController() {
        let viewController = UIStoryboard(name: "BucketList", bundle: nil).instantiateViewController(identifier: "BucketListViewController") as BucketListViewController
        viewController.coordinator = self
        navigationController.navigationBar.prefersLargeTitles = true
        navigationController.pushViewController(viewController, animated: false)
    }
}

extension BucketCoordinator: DetailListPushCoordinator {
    func pushToDetailList(bucket: RealmBucket?) {
        let viewController = UIStoryboard(name: "DetailList", bundle: nil).instantiateViewController(identifier: "DetailListViewController") as DetailListViewController
        viewController.bucket = bucket
        viewController.coordinator = DetailAddCoordinator(navigationController)
        configureDetailListViewModel(viewController)
        navigationController.pushViewController(viewController, animated: true)
    }
    
    func configureDetailListViewModel(_ viewController: DetailListViewController) {
        let networkAgent = DetailAPIAgent()
        let localAgent = DetailLocalAgent()
        localAgent.bucket = viewController.bucket
        let repository = DetailRepository(network: networkAgent, local: localAgent)
        let usecase = DetailListUseCase(repository: repository)
        viewController.collectionViewModel = DetailListViewModel(usecase: usecase)
    }
}
