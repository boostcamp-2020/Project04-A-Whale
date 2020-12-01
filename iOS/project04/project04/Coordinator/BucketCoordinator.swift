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
        let network = BucketAPIAgent()
        let local = BucketLocalAgent()
        let repository = BucketListRepository(network: network, local: local)
        let useCase = BucketListUseCase(repository: repository)
        let bucketListViewModel = BucketListViewModel(useCase: useCase)
        
        let viewController = UIStoryboard(name: "BucketList", bundle: nil).instantiateViewController(identifier: "BucketListViewController") { (coder) -> BucketListViewController? in
            return BucketListViewController(coder: coder, coordinator: self, viewModel: bucketListViewModel)
        }
        
        navigationController.navigationBar.prefersLargeTitles = true
        navigationController.pushViewController(viewController, animated: false)
    }
}

extension BucketCoordinator: DetailListPushCoordinator {
    func pushToDetailList(bucket: RealmBucket?) {
        let viewModel = configureDetailListViewModel(bucket: bucket)
        let coordinator = DetailAddCoordinator(navigationController)
        let viewController = UIStoryboard(name: "DetailList", bundle: nil).instantiateViewController(identifier: "DetailListViewController", creator: { coder in
            return DetailListViewController(coder: coder,
                                            bucket: bucket,
                                            viewModel: viewModel,
                                            coordinator: coordinator)
        })
        navigationController.pushViewController(viewController, animated: true)
    }
    
    private func configureDetailListViewModel(bucket: RealmBucket?) -> DetailListViewModel {
        let networkAgent = DetailAPIAgent()
        let localAgent = DetailLocalAgent(bucketNumber: bucket?.id ?? 0)
        let repository = DetailRepository(network: networkAgent, local: localAgent)
        let usecase = DetailListUseCase(repository: repository)
        return DetailListViewModel(usecase: usecase)
    }
}
