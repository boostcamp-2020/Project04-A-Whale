//
//  NetworkPathMonitor.swift
//  project04
//
//  Created by 남기범 on 2020/12/09.
//

import Foundation
import Network

public enum ConnectionType {
    case wifi
    case ethernet
    case cellular
    case unknown
}

class NetworkStatus {
    static public let shared = NetworkStatus()
    private var monitor: NWPathMonitor
    private var queue = DispatchQueue.global()
    private var status: NWPath.Status?
    
    private init() {
        self.monitor = NWPathMonitor()
        self.queue = DispatchQueue.global(qos: .background)
        
        self.monitor.pathUpdateHandler = { path in

            if self.status == path.status {
                return
            } else {
                self.status = path.status
            }
            
            if path.status == .satisfied {
                DispatchQueue.main.async {
                    showToast(message: "네트워크가 연결되었습니다", font: .systemFont(ofSize: 14))
                }
                TransactionRecorder.shared.execute()
            } else {
                DispatchQueue.main.async {
                    showToast(message: "네트워크 연결이 불안정합니다.", font: .systemFont(ofSize: 14)) 
                }
            }
        }
        
        self.monitor.start(queue: queue)
    }

    func stop() {
        self.monitor.cancel()
    }
}
