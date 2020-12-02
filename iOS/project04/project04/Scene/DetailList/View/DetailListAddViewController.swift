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
    @IBOutlet weak var datePicker: UIDatePicker!
    private var contentSize: CGFloat = 37
    private var viewModel: DetailListViewModelProtocol?
    private var detail: Detail?
    
    init?(coder: NSCoder, viewModel: DetailListViewModelProtocol?, detail: Detail? = nil) {
        self.viewModel = viewModel
        self.detail = detail
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
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
    
    @IBAction func submitButton(_ sender: RoundButton) {
        if textView.text == "" {
            let alert = defaultAlertViewController(title: "추가 불가", message: "제목이 입력되지 않았습니다.")
            present(alert, animated: true, completion: nil)
            return
        }
        
        let title = textView.text
        let dueDate = datePicker.toString()
        let currentTime = Date().toStringKST(dateFormat: "yyyy-MM-dd HH:mm:ss")
        viewModel?.listAddAction(Detail(no: detail?.bucketNo ?? 0,
                                        title: title ?? "",
                                        status: "O",
                                        dueDate: dueDate ?? "",
                                        createdAt: currentTime,
                                        updatedAt: currentTime,
                                        deletedAt: nil,
                                        bucketNo: 0))
        dismiss(animated: false, completion: nil)
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
}

extension DetailListAddViewController {
    @objc private func keyboardWillShow(_ notification:NSNotification) {
        if let keyboardFrame: NSValue = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue {
            let keyboardRectangle = keyboardFrame.cgRectValue
            let keyboardHeight = keyboardRectangle.height
            
            self.view.frame.origin.y = -keyboardHeight
        }
    }
    
    @objc private func keyboardWillHide(_ notification:NSNotification) {
        self.view.frame.origin.y = 0
    }
    
    private func textViewContentSizeChange(value: CGFloat) {
        heightConstraint.constant = heightConstraint.constant + value
    }
}
