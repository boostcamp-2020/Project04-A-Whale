//
//  BucketCoordinator.swift
//  project04
//
//  Created by 남기범 on 2020/11/30.
//

import Foundation
import UIKit

protocol DetailListPushCoordinator {
    func pushToDetailList(bucket: RealmBucket?, index: Int, delegate: BucketListObserverDelegate)
}

protocol BucketListAddPushCoordinator {
    func pushToBucketListAdd(from deletage: BucketListObserverDelegate)
}

final class BucketCoordinator: NavigationCoordinator {
    var navigationController: UINavigationController
    
    init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func pushViewController() {
        let local = BucketLocalAgent()
        let repository = BucketListRepository(local: local)
        let useCase = BucketListUseCase(repository: repository)
        let bucketListViewModel = BucketListViewModel(useCase: useCase)
        
        let viewController = UIStoryboard(name: "BucketList", bundle: nil).instantiateViewController(identifier: "BucketListViewController") { (coder) -> BucketListViewController? in
            return BucketListViewController(coder: coder, coordinator: self, viewModel: bucketListViewModel)
        }
        
        navigationController.navigationBar.prefersLargeTitles = true
        navigationController.pushViewController(viewController, animated: false)
    }
    
    func presentLogin(_ navigationController: UINavigationController) {
        
        let controller = UIStoryboard(name: "Login", bundle: nil).instantiateViewController(identifier: "LoginViewController", creator: { coder in
            let coordinator = LoginCoordinator(navigationController)
            return LoginViewController(coder: coder, coordinator: coordinator)
        })
        guard (UIApplication.shared.windows.first?.rootViewController) != nil else {
            return
        }
        
        navigationController.pushViewController(controller, animated: false)
    }
}

extension BucketCoordinator: DetailListPushCoordinator {
    func pushToDetailList(bucket: RealmBucket?, index: Int, delegate: BucketListObserverDelegate) {
        let viewModel = configureDetailListViewModel(bucket: bucket)
        let impressionViewModel = configureImpressionViewModel()
        let coordinator = DetailAddCoordinator(navigationController)
        let viewController = UIStoryboard(name: "DetailList", bundle: nil).instantiateViewController(identifier: "DetailListViewController", creator: { coder in
            return DetailListViewController(coder: coder,
                                            bucket: bucket,
                                            viewModel: viewModel,
                                            coordinator: coordinator,
                                            index: index,
                                            delegate: delegate,
                                            impressionViewModel: impressionViewModel)
        })
        navigationController.pushViewController(viewController, animated: true)
    }
    
    private func configureDetailListViewModel(bucket: RealmBucket?) -> DetailListViewModel {
        let localAgent = DetailLocalAgent()
        let repository = DetailRepository(local: localAgent)
        let usecase = DetailListUseCase(repository: repository)
        return DetailListViewModel(usecase: usecase)
    }
    
    private func configureImpressionViewModel() -> ImpressionViewModel {
        let localAgent = ImpressionLocalAgent()
        let repository = ImpressionRepository(local: localAgent)
        let usecase = ImpressionUseCase(repository: repository)
        return ImpressionViewModel(usecase: usecase)
    }
}

extension BucketCoordinator: BucketListAddPushCoordinator {
    func pushToBucketListAdd(from delegate: BucketListObserverDelegate) {
        let viewController = UIStoryboard(name: "BucketListAdd", bundle: nil).instantiateViewController(identifier: "BucketListAddViewController", creator: { (coder) -> BucketListAddViewController? in
            let detailMemory = DetailMemoryAgent()
            let repository = BucketListAddRepository(memory: detailMemory)
            let usecase = BucketListAddUseCase(repository: repository)
            let viewModel = BucketListAddViewModel(usecase: usecase)
            let coordinator = BucketListAddCoordinator(self.navigationController)
            return BucketListAddViewController(coder: coder, viewModel: viewModel, delegate: delegate, coordinator: coordinator)
        })
        navigationController.pushViewController(viewController, animated: true)
    }
}
