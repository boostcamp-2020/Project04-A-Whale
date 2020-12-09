//
//  ImpressionViewController.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import UIKit

class ImpressionViewController: UIViewController {
    @IBOutlet weak var impressionTextView: UITextView!
    var delegate: ImpressionDelegate
    var isEdited: Bool = false
    var bucketNo: Int
    
    init?(coder: NSCoder, viewModel: ImpressionDelegate, bucketNo: Int) {
        self.delegate = viewModel
        self.bucketNo = bucketNo
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        print(bucketNo)
        impressionTextView.text = delegate.impressionViewModel.impressionText
        isEdited = (impressionTextView.text != "")
        impressionTextView.delegate = self
        impressionTextView.becomeFirstResponder()
    }
    
    @IBAction func impressionSaveAction(_ sender: UIButton) {
        if impressionTextView.text == "" {
            let alert = defaultAlertViewController(title: "소감 입력", message: "소감을 입력하지 않았습니다.")
            present(alert, animated: true, completion: nil)
            return
        }
        
        if isEdited {
            delegate.impressionViewModel.impressionEdit(text: impressionTextView.text)
        } else {
            print(bucketNo)
            delegate.impressionViewModel.impressionSave(bucketNo: bucketNo, text: impressionTextView.text)
        }
        
        dismiss(animated: true, completion: nil)
    }
}
extension ImpressionViewController: UITextViewDelegate {
    func configureTextViewPlaceholder() {
        impressionTextView.text = "소감을 입력해주세요."
        impressionTextView.textColor = .secondaryLabel
    }
    
    func textViewDidBeginEditing(_ textView: UITextView) {
        if textView.textColor == .secondaryLabel {
            textView.textColor = .label
            textView.text = nil
        }
    }
    func textViewDidEndEditing(_ textView: UITextView) {
        if textView.text.isEmpty {
            configureTextViewPlaceholder()
        }
    }
}
