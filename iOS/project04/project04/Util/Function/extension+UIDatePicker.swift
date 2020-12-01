//
//  extension+UIDatePicker.swift
//  project04
//
//  Created by 남기범 on 2020/12/01.
//

import Foundation
import UIKit

extension UIDatePicker {
    func toString() -> String? {
        let components = Calendar.current.dateComponents([.year, .month, .day], from: date)
        guard let year = components.year,
              let month = components.month,
              let day = components.day else { return nil }
        
        return "\(year)-\(month)-\(day)"
    }
}
