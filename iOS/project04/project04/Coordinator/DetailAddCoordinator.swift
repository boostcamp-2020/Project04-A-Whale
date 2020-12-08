//
//  DetailListAddCoordinator.swift
//  project04
//
//  Created by 남기범 on 2020/11/30.
//

import Foundation
import UIKit

protocol DetailAddPushCoordinator {
    func presentDetailListAdd(_ navigationController: UINavigationController?, viewModel: DetailListViewModelProtocol?, detail: RealmDetail?, index: Int?)

}

class DetailAddCoordinator: NavigationCoordinator {
    var navigationController: UINavigationController
    
    required init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
}

extension DetailAddCoordinator: DetailAddPushCoordinator {
    func presentDetailListAdd(_ navigationController: UINavigationController?, viewModel: DetailListViewModelProtocol?, detail: RealmDetail? = nil, index: Int? = nil) {
        let viewController = UIStoryboard(name: "DetailListAdd", bundle: nil).instantiateViewController(identifier: "DetailListAddViewController", creator: { coder in
            return DetailListAddViewController(coder: coder,
                                               viewModel: viewModel,
                                               detail: detail,
                                               index: index)
        })
        navigationController?.present(viewController, animated: false)
    }
}
