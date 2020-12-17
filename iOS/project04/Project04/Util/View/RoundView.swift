//
//  RoundView.swift
//  project04
//
//  Created by 남기범 on 2020/12/01.
//

import Foundation
import UIKit

@IBDesignable
class RoundView: UIView {
    @IBInspectable var cornerRadius: CGFloat {
        get { return layer.cornerRadius }
        set { layer.cornerRadius = newValue }
    }
    
    @IBInspectable var borderWidth: CGFloat {
        get { return layer.borderWidth }
        set { layer.borderWidth = newValue }
    }
}
