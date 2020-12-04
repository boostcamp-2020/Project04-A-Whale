//
//  BucketListSearchCoordinator.swift
//  project04
//
//  Created by jaejeon on 2020/12/03.
//

import Foundation
import UIKit

class BucketListSearchCoordinator: NavigationCoordinator {
    var navigationController: UINavigationController
    
    required init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func pushToBucketListSearch(_ completion: @escaping (Bucket) -> Void) {
        let viewController = UIStoryboard(name: "BucketListSearch", bundle: nil).instantiateViewController(identifier: "BucketListSearchViewController", creator: { coder in
            let repository = BucketListSearchRepository()
            let usecase = BucketListSearchUseCase(repository: repository)
            let viewModel = BucketListSearchViewModel(usecase: usecase)
            return BucketListSearchViewController(coder: coder, viewModel: viewModel, didSelectRowHandler: completion)
        })
        navigationController.pushViewController(viewController, animated: true)
    }
}
