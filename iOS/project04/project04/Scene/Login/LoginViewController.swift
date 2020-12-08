//
//  LoginViewController.swift
//  project04
//
//  Created by 남기범 on 2020/12/08.
//

import UIKit

class LoginViewController: UIViewController {
    @IBOutlet weak var topConstraint: NSLayoutConstraint!
    @IBOutlet weak var idTextField: UITextField!
    @IBOutlet weak var pwTextField: UITextField!
    @IBOutlet weak var backgroundImageView: UIImageView!
    private var coordinator: LoginCoordinator
    
    init?(coder: NSCoder, coordinator: LoginCoordinator) {
        self.coordinator = coordinator
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationController?.navigationBar.isHidden = true
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        UIView.animate(withDuration: 1, animations: { [weak self] in
            self?.backgroundImageView.alpha = 0.8
        })
    }
    
    @IBAction func loginAction(_ sender: UIButton) {
        let agent = LoginAPIAgent()
        let data = try! JSONEncoder().encode(["id": "whale04a", "password": "1234"])
        
        agent.request(from: LoginAPIAgent.RequestURL.Login,
                      method: .POST,
                      body: data,
                      completion: { [weak self] result in
                        switch result {
                        case .success(let data):
                            print(String(data: data, encoding: .utf8))
                        case .failure(let error):
                            print(error)
                        }
        })
        
//        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func joinAction(_ sender: UIButton) {
        coordinator.presentJoin()
    }
}
