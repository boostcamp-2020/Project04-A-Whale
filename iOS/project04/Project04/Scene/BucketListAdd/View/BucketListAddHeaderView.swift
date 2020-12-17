//
//  BucketListAddHeaderView.swift
//  project04
//
//  Created by jaejeon on 2020/12/02.
//

import UIKit

class BucketListAddHeaderView: UICollectionReusableView {
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var descriptionTextView: UITextView!
    @IBOutlet weak var searchButton: UIButton!
    
    override class func awakeFromNib() {
        super.awakeFromNib()
    }
}

extension BucketListAddHeaderView {
    func configure(with bucket: RealmBucket) {
        self.titleTextField.text = bucket.title
        self.descriptionTextView.text = bucket.subTitle
        self.descriptionTextView.textColor = .label
    }
    
    func configureTextViewPlaceholder() {
        if descriptionTextView.text.isEmpty {
            descriptionTextView.text = "목표 설명을 입력해주세요"
            descriptionTextView.textColor = .secondaryLabel
        }
    }
}

extension BucketListAddHeaderView: UITextViewDelegate {
    func textViewDidBeginEditing(_ textView: UITextView) {
        if textView.textColor == .secondaryLabel {
            textView.textColor = .label
            textView.text = nil
        }
    }
    
    func textViewDidEndEditing(_ textView: UITextView) {
        configureTextViewPlaceholder()
    }
}
