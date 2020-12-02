//
//  BucketListAddHeaderView.swift
//  project04
//
//  Created by jaejeon on 2020/12/02.
//

import UIKit

class BucketListAddHeaderView: UICollectionReusableView {
    static var reuseIdentifier: String {
        return String(describing: BucketListAddHeaderView.self)
    }
    @IBOutlet weak var titleTextField: UITextField!
    
    @IBOutlet weak var descriptionTextView: UITextView!
        
    override class func awakeFromNib() {
        super.awakeFromNib()
    }
  
}

extension BucketListAddHeaderView: UITextViewDelegate {
    func configureTextViewPlaceholder() {
        descriptionTextView.text = "목표 설명을 입력해주세요"
        descriptionTextView.textColor = .secondaryLabel
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
