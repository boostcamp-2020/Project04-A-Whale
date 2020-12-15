//
//  SettingViewController.swift
//  project04
//
//  Created by 남기범 on 2020/12/08.
//

import UIKit

class SettingViewController: UIViewController {
    private var coordinator: SettingCoordinator
    
    init?(coder: NSCoder, coordinator: SettingCoordinator) {
        self.coordinator = coordinator
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        checkTokenExpired()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func loginAction(_ sender: UIButton) {
        coordinator.presentLogin(navigationController!)
    }
}
