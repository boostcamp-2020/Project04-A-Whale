//
//  DetailSectionImpressionHeaderView.swift
//  project04
//
//  Created by 남기범 on 2020/12/02.
//

import UIKit

class DetailSectionImpressionHeaderView: UICollectionReusableView {
    @IBOutlet weak var impressionLabel: UILabel!
    var editHandler: (() -> ())?
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }
    
    @IBAction func impressionEditAction(_ sender: UIButton) {
        editHandler?()
    }
}
