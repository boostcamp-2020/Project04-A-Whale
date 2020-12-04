//
//  PieView.swift
//  project04
//
//  Created by 남기범 on 2020/12/03.
//

import Foundation
import UIKit

class PieView: UIView {
    private var colors: [UIColor] = []
    private var values: [CGFloat] = []
    private var startAngle: CGFloat = (-(.pi) / 2)
    private var endAngle: CGFloat = 0.0
    private var startIndex: Int = 0
    private var duration: Double = 0
    
    func animateChart(colors: [UIColor], values: [CGFloat], duration: Double) {
        self.colors = colors
        self.values = values
        self.duration = duration
        startAngle = (-(.pi) / 2)
        endAngle = 0.0
        startIndex = 0
        add(color: colors[startIndex], value: values[startIndex])
    }
    
    private func add(color: UIColor, value: CGFloat) {
        let center = CGPoint(x: frame.width/2, y: frame.height/2)
        let total = values.reduce(0, +)
        let animation = CABasicAnimation(keyPath: "strokeEnd")
        animation.fromValue = 0
        animation.toValue = 1
        animation.duration = duration * Double((value / total))
        animation.timingFunction = CAMediaTimingFunction(name: .easeInEaseOut)
        animation.delegate = self
        endAngle = (value / total) * (.pi * 2)
        let radius = frame.width * 1 / 3
        let path = UIBezierPath(arcCenter: center,
                                radius: radius,
                                startAngle: startAngle,
                                endAngle: startAngle + endAngle,
                                clockwise: true)
        
        let sliceLayer = CAShapeLayer()
        sliceLayer.path = path.cgPath
        sliceLayer.fillColor = nil
        sliceLayer.lineWidth = radius - 10
        sliceLayer.strokeColor = color.cgColor
        sliceLayer.add(animation, forKey: animation.keyPath)
        
        layer.addSublayer(sliceLayer)
    }
    
    func removeSublayers() {
        guard let sublayers = layer.sublayers else { return }
        sublayers.forEach {
            $0.removeFromSuperlayer()
        }
    }
}

extension PieView: CAAnimationDelegate {
    func animationDidStop(_ anim: CAAnimation, finished flag: Bool) {
        guard flag && startIndex < values.count - 1 else { return }
        startIndex += 1
        startAngle += endAngle
        add(color: colors[startIndex], value: values[startIndex])
    }
}
