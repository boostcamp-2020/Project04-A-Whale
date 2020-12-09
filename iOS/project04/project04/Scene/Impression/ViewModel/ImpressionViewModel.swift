//
//  ImpressionViewModel.swift
//  project04
//
//  Created by 남기범 on 2020/12/07.
//

import Foundation

protocol ImpressionViewModelProtocol {
    var realmImpression: RealmImpression? { get set }
    var impressionText: String { get set }
    var textChange: ((ImpressionViewModelProtocol)->())? { get set }
    func impressionFetch(bucketNo: Int)
    func impressionSave(bucketNo: Int, text: String)
    func impressionEdit(text: String)
}

class ImpressionViewModel: ImpressionViewModelProtocol {
    var realmImpression: RealmImpression?
    
    var impressionText: String = "" {
        didSet {
            self.textChange?(self)
        }
    }
    
    var usecase: ImpressionUseCaseProtocol
    var textChange: ((ImpressionViewModelProtocol) -> ())?
    
    required init(usecase: ImpressionUseCaseProtocol) {
        self.usecase = usecase
    }
    
    func impressionFetch(bucketNo: Int) {
        usecase.fetch(bucketNo: bucketNo, completion: { [weak self] impression in
            self?.realmImpression = impression
            self?.impressionText = impression?.text ?? ""
        })
    }
    
    func impressionSave(bucketNo: Int, text: String) {
        usecase.save(bucketNo: bucketNo, text: text)
        impressionText = text
    }
    
    func impressionEdit(text: String) {
        usecase.edit(element: self.realmImpression, text: text)
        impressionText = text
    }
}
