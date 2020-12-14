//
//  Toast.swift
//  project04
//
//  Created by jaejeon on 2020/12/11.
//

import Foundation
import UIKit

func showToast(message: String, font: UIFont) {
    guard let vc = UIApplication.shared.windows.first?.rootViewController else {
        return
    }
    let toastLabel = UILabel(frame: CGRect(x: vc.view.frame.size.width/2 - 100, y: vc.view.frame.size.height-100, width: 200, height: 35))
    toastLabel.backgroundColor = UIColor.black.withAlphaComponent(0.6)
    toastLabel.textColor = UIColor.white
    toastLabel.font = font
    toastLabel.textAlignment = .center
    toastLabel.text = message
    toastLabel.alpha = 1.0
    toastLabel.layer.cornerRadius = 10
    toastLabel.clipsToBounds = true
    vc.view.addSubview(toastLabel)
    UIView.animate(withDuration: 1.0,
                   delay: 0.1,
                   options: .curveEaseIn,
                   animations: {
                    toastLabel.alpha = 0.0
                   }, completion: { _ in
                     toastLabel.removeFromSuperview()
                   })
    
}
