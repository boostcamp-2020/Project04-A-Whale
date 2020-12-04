//
//  NavigationCoordinator.swift
//  project04
//
//  Created by 남기범 on 2020/11/30.
//

import Foundation
import UIKit

protocol NavigationCoordinator {
    var navigationController: UINavigationController { get set }
    init(_ navigationController: UINavigationController)
}
