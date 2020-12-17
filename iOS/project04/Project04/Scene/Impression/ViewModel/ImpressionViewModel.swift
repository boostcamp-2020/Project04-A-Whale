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
    func impressionSave(_ element: RealmImpression)
    func impressionEdit(text: String)
}

class ImpressionViewModel: ImpressionViewModelProtocol {
    private var usecase: ImpressionUseCaseProtocol
    var realmImpression: RealmImpression?
    
    var impressionText: String = "" {
        didSet {
            self.textChange?(self)
        }
    }
    
    var textChange: ((ImpressionViewModelProtocol) -> ())?
    
    init(usecase: ImpressionUseCaseProtocol) {
        self.usecase = usecase
    }
    
    func impressionFetch(bucketNo: Int) {
        usecase.fetch(bucketNo: bucketNo, completion: { [weak self] impression in
            self?.realmImpression = impression
            self?.impressionText = impression?.text ?? ""
        })
    }
    
    func impressionSave(_ element: RealmImpression) {
        usecase.save(element)
        impressionText = element.text
    }
    
    func impressionEdit(text: String) {
        usecase.edit(element: self.realmImpression, text: text)
        impressionText = text
    }
}
