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

    private init() {
        self.monitor = NWPathMonitor()
        self.queue = DispatchQueue.global(qos: .background)
        
        self.monitor.pathUpdateHandler = { path in
            if path.status == .satisfied {
                print("good")
            } else {
                print("not good")
            }
        }
        
        self.monitor.start(queue: queue)
    }

    func stop() {
        self.monitor.cancel()
    }
}
