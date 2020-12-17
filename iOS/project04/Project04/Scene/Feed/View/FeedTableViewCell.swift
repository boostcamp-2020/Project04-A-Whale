//
//  FeedTableViewCell.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import UIKit

class FeedTableViewCell: UITableViewCell {
    @IBOutlet weak var nickNameButton: UIButton!
    @IBOutlet weak var contentLabel: UILabel!
    @IBOutlet weak var dateLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
    
    func configure(with feed: RealmFeed) {
        nickNameButton.setTitle(feed.nickname, for: .normal)
        contentLabel.text = "님이 \(feed.content)"
        dateLabel.text = feed.date
    }
}
