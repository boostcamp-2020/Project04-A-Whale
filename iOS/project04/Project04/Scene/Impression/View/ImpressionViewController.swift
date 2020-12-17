//
//  ImpressionViewController.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import UIKit

class ImpressionViewController: UIViewController {
    @IBOutlet weak var impressionTextView: UITextView!
    private weak var delegate: ImpressionDelegate?
    private var isEdited: Bool = false
    private var bucketNo: Int
    
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
        impressionTextView.text = delegate?.impressionViewModel.impressionText
        isEdited = (impressionTextView.text != "")
        impressionTextView.delegate = self
        impressionTextView.becomeFirstResponder()
    }
    
    @IBAction func impressionSaveAction(_ sender: UIButton) {
        if impressionTextView.text == "" {
            let alert = defaultAlertController(title: "소감 입력", message: "소감을 입력하지 않았습니다.")
            present(alert, animated: true, completion: nil)
            return
        }
        
        if isEdited {
            delegate?.impressionViewModel.impressionEdit(text: impressionTextView.text)
        } else {
            let impression = RealmImpression(value: [0, impressionTextView.text ?? "", bucketNo])
            delegate?.impressionViewModel.impressionSave(impression)
        }
        
        dismiss(animated: true, completion: nil)
    }
}
extension ImpressionViewController: UITextViewDelegate {
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

private extension ImpressionViewController {
    func configureTextViewPlaceholder() {
        impressionTextView.text = "소감을 입력해주세요."
        impressionTextView.textColor = .secondaryLabel
    }
}
