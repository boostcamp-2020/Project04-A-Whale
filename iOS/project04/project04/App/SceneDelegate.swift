//
//  SceneDelegate.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?


    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = (scene as? UIWindowScene) else { return }
        window = UIWindow(windowScene: windowScene)
        let navigationController = UINavigationController()
        let controller = UIStoryboard(name: "Login", bundle: nil).instantiateViewController(identifier: "LoginViewController", creator: { coder in
            let coordinator = LoginCoordinator(navigationController)
            return LoginViewController(coder: coder, coordinator: coordinator)
        })
        navigationController.pushViewController(controller, animated: false)
        window?.rootViewController = navigationController
        window?.makeKeyAndVisible()
    }

    func sceneDidDisconnect(_ scene: UIScene) {
    }

    func sceneDidBecomeActive(_ scene: UIScene) {
        let monitor = NetworkStatus.shared
    }

    func sceneWillResignActive(_ scene: UIScene) {
    }

    func sceneWillEnterForeground(_ scene: UIScene) {
    }

    func sceneDidEnterBackground(_ scene: UIScene) {
    }


}

