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
    
    func presentBucketListSearch() {
        let viewController = UIStoryboard(name: "BucketListSearch", bundle: nil).instantiateViewController(identifier: "BucketListSearchViewController", creator: { coder in
            return BucketListSearchViewController(coder: coder)
        })
        navigationController.present(viewController, animated: true)
    }
}
