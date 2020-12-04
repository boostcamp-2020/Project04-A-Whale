//
//  DetailListAddCoordinator.swift
//  project04
//
//  Created by 남기범 on 2020/11/30.
//

import Foundation
import UIKit

class DetailAddCoordinator: NavigationCoordinator {
    var navigationController: UINavigationController
    
    required init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func presentDetailListAdd(_ navigationController: UINavigationController?, viewModel: DetailListViewModelProtocol?, detail: Detail? = nil, index: Int? = nil) {
        let viewController = UIStoryboard(name: "DetailListAdd", bundle: nil).instantiateViewController(identifier: "DetailListAddViewController", creator: { coder in
            return DetailListAddViewController(coder: coder,
                                               viewModel: viewModel,
                                               detail: detail,
                                               index: index)
        })
        navigationController?.present(viewController, animated: false)
    }
}
