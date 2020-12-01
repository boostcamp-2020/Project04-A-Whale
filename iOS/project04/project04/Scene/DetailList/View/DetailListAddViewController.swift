//
//  DetailListAddViewController.swift
//  project04
//
//  Created by 남기범 on 2020/11/30.
//

import UIKit

class DetailListAddViewController: UIViewController {
    @IBOutlet weak var textView: UITextView!
    @IBOutlet weak var heightConstraint: NSLayoutConstraint!
    @IBOutlet weak var roundView: RoundView!
    private var contentSize: CGFloat = 37
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(keyboardWillShow(_:)),
            name: UIResponder.keyboardWillShowNotification,
            object: nil
        )
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(keyboardWillHide(_:)),
            name: UIResponder.keyboardWillHideNotification,
            object: nil
        )
        
        roundView.layer.borderColor = UIColor.systemGray4.cgColor
        textView.inputAccessoryView = nil
        textView.delegate = self
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        textView.becomeFirstResponder()
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        UIView.animate(withDuration: 0.5, animations: { [weak self] in
            self?.view.endEditing(true)
        }, completion: { [weak self] success in
            self?.dismiss(animated: false, completion: nil)
        })
    }

    @objc func keyboardWillShow(_ notification:NSNotification) {
        if let keyboardFrame: NSValue = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue {
            let keyboardRectangle = keyboardFrame.cgRectValue
            let keyboardHeight = keyboardRectangle.height
            
            self.view.frame.origin.y = -keyboardHeight
        }
    }
    
    @objc func keyboardWillHide(_ notification:NSNotification) {
        self.view.frame.origin.y = 0
    }
}

extension DetailListAddViewController: UITextViewDelegate {
    func textViewDidChange(_ textView: UITextView) {
        if contentSize < textView.contentSize.height {
            contentSize = textView.contentSize.height
            textViewContentSizeChange(value: 20)
        } else if contentSize > 37,
                  contentSize > textView.contentSize.height {
            contentSize = textView.contentSize.height
            textViewContentSizeChange(value: -20)
        }
    }
    
    func textViewContentSizeChange(value: CGFloat) {
        heightConstraint.constant = heightConstraint.constant + value
    }
}
