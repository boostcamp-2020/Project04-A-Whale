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
    @IBOutlet weak var loginButton: RoundButton!
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
        idTextField.delegate = self
        pwTextField.delegate = self
        navigationController?.navigationBar.isHidden = true
    }
    
    @IBAction func loginAction(_ sender: UIButton) {
        guard let id = idTextField.text,
              id != "" else {
            let alert = defaultAlertController(title: "아이디", message: "아이디 입력해주세요!")
            present(alert, animated: true, completion: nil)
            return
        }
        guard let pw = pwTextField.text,
              pw != "" else {
            let alert = defaultAlertController(title: "비밀번호", message: "비밀번호를 입력해주세요!")
            present(alert, animated: true, completion: nil)
            return
        }
        
        let data = try? JSONEncoder().encode(["id": id, "password": pw])
        NetworkService.shared.request(from: Endpoint.login.urlString,
                                      method: .POST,
                                      body: data,
                                      completion: { [weak self] result in
            
            switch result {
            case .success(let data):
                let dic = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: String]
                let accessToken = dic?["accessToken"]
                var auth = AccessToken()
                auth.token = accessToken ?? ""
                DispatchQueue.main.async {
                    self?.coordinator.presentTabBarController()
                }
            case .failure(_):
                let alert = defaultAlertController(title: "로그인", message: "아이디나 비밀번호가 일치하지 않습니다.")
                DispatchQueue.main.async {
                    self?.present(alert, animated: true, completion: nil)
                }
            }
        })
    }
    
    @IBAction func joinAction(_ sender: UIButton) {
        dismiss(animated: true, completion: { [weak self] in
            self?.coordinator.presentJoin()
        })
    }
}

extension LoginViewController: UITextFieldDelegate {
    func textFieldDidBeginEditing(_ textField: UITextField) {
        view.frame.origin.y = -150
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
        view.frame.origin.y = 0
    }
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        if textField.accessibilityIdentifier == "ID" {
            pwTextField.becomeFirstResponder()
        } else {
            loginAction(loginButton)
        }
        
        return true
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
         view.endEditing(true)
    }
}
