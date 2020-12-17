//
//  JoinViewController.swift
//  project04
//
//  Created by 남기범 on 2020/12/08.
//

import UIKit

class JoinViewController: UIViewController {
    @IBOutlet var textFields: [UITextField]!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        textFields.forEach({ [weak self] textField in
            textField.delegate = self
        })
    }

    @IBAction func joinAction(_ sender: UIButton) {
        if !(textFields.filter { $0.text == "" }).isEmpty {
            let alert = defaultAlertController(title: "회원가입", message: "필요한 정보를 모두 입력해주세요!")
            present(alert, animated: true, completion: nil)
            return
        }
        
        let data = try? JSONEncoder().encode([
            "id": textFields[0].text ?? "",
            "password": textFields[1].text ?? "",
            "nickname": textFields[2].text ?? "",
            "description": textFields[3].text ?? ""
        ])
        NetworkService.shared.request(from: Endpoint.join.urlString,
                                      method: .POST,
                                      body: data,
                                      completion: { [weak self] result in
            
            switch result {
            case .success(_):
                DispatchQueue.main.async {
                    showToast(message: "회원가입에 성공했습니다.", font: .systemFont(ofSize: 14))
                    self?.dismiss(animated: true, completion: nil)
                }
            case .failure(_):
                let alert = defaultAlertController(title: "회원가입", message: "이미 존재하는 아이디입니다.")
                DispatchQueue.main.async {
                    self?.present(alert, animated: true, completion: nil)
                }
            }
        })
    }
}
extension JoinViewController: UITextFieldDelegate {
    func textFieldDidBeginEditing(_ textField: UITextField) {
        view.frame.origin.y = -150
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
        view.frame.origin.y = 0
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        view.endEditing(true)
    }
}
