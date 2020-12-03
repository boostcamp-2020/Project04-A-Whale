//
//  DetailSectionHeaderView.swift
//  project04
//
//  Created by 남기범 on 2020/12/02.
//

import UIKit

class DetailSectionHeaderView: UICollectionReusableView {
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var successButton: UIButton!
    
    var successHandler: (() -> ())?
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
    
    @IBAction func successAction(_ sender: Any) {
        successHandler?()
    }
}
