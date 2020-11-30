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
    var contentSize: CGFloat = 37
    
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
        
        textView.delegate = self
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        textView.becomeFirstResponder()
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        view.endEditing(true)
    }

    @objc func keyboardWillShow(_ notification:NSNotification) {
        if let keyboardFrame: NSValue = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue {
            let keyboardRectangle = keyboardFrame.cgRectValue
            let keyboardHeight = keyboardRectangle.height
            
            self.view.frame.origin.y = -keyboardHeight
        }
    }
    
    @objc func keyboardWillHide(_ notification:NSNotification) {
        dismiss(animated: false, completion: nil)
    }
}

extension DetailListAddViewController: UITextViewDelegate {
    func textViewDidChange(_ textView: UITextView) {
        print(textView.contentSize.height)
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
