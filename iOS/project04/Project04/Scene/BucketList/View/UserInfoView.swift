//
//  UserInfoView.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import UIKit

class UserInfoView: UICollectionReusableView {
    @IBOutlet weak var nicknameLabel: UILabel!
    @IBOutlet weak var followingLabel: UILabel!
    @IBOutlet weak var followLabel: UILabel!
    @IBOutlet weak var progressView: UIProgressView!
    @IBOutlet weak var descriptionLabel: UILabel!
    
    var logoutHandler: (() -> Void)?
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
    
    @IBAction func didTouchLogoutButton(_ sender: Any) {
        var auth = AccessToken()
        auth.token = ""
        logoutHandler?()
    }
    
    func configure(with user: RealmUserData) {
        nicknameLabel.text = user.nickname
        followLabel.text = "팔로워 \(user.followerCount)명"
        followingLabel.text = "팔로잉 \(user.followingCount)명"
        progressView.progress = Float(user.achieveRate) / 100
        descriptionLabel.text = user.userDescription
    }
}
