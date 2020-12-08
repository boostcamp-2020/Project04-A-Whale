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
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        UIView.animate(withDuration: 1, animations: { [weak self] in
            self?.backgroundImageView.alpha = 0.8
        })
    }
    
    @IBAction func loginAction(_ sender: UIButton) {
    }
    
    @IBAction func joinAction(_ sender: UIButton) {
    }
}
