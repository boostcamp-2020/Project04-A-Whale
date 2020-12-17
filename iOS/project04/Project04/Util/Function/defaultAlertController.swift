//
//  DefaultAlertViewController.swift
//  project04
//
//  Created by 남기범 on 2020/12/01.
//

import Foundation
import UIKit

func defaultAlertController(title: String, message: String) -> UIAlertController {
    let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
    let defaultAction = UIAlertAction(title: "OK", style: .destructive)
    alert.addAction(defaultAction)
    return alert
}
