//
//  DetailListViewController.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import UIKit
import RealmSwift

class DetailListViewController: UIViewController {
    @IBOutlet weak var collectionView: UICollectionView!
    private var dataSource: UICollectionViewDiffableDataSource<Detail.Section, Detail>! = nil
    private var sampleIndex = 0
    private var collectionViewModel: DetailListViewModelProtocol? {
        didSet {
            self.collectionViewModel?.listDidChange = { [weak self] _ in
                var snapshot = NSDiffableDataSourceSnapshot<Detail.Section, Detail>()
                let sections: [Detail.Section] = [.done]
                snapshot.appendSections(sections)
                snapshot.appendItems(self?.collectionViewModel?.list ?? [])
                self?.dataSource.apply(snapshot, animatingDifferences: false)
            }
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureHierarchy()
        configureDataSource()
        configureViewModel()
    }
    
    func configureViewModel() {
        let networkAgent = DetailAPIAgent()
        let localAgent = DetailLocalAgent()
        let repository = DetailRepository(network: networkAgent, local: localAgent)
        let usecase = DetailListUseCase(repository: repository)
        collectionViewModel = DetailListViewModel(usecase: usecase)
        collectionViewModel?.listFetchAction()
    }
    
    @IBAction func detailAppendAction(_ sender: UIBarButtonItem) {
        collectionViewModel?.listAddAction(Detail(title: "\(sampleIndex)", dueDate: "123"))
        sampleIndex += 1
    }
}

extension DetailListViewController: UICollectionViewDelegate {
    func createLayout() -> UICollectionViewLayout {
        var config = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        
        
        config.trailingSwipeActionsConfigurationProvider = { (indexPath) -> UISwipeActionsConfiguration in
            let deleteAction = UIContextualAction(style: .destructive,
                                                  title: "Delete",
                                                  handler: { [weak self] _, _, completion in
                                                    self?.collectionViewModel?.listDeleteAction(at: indexPath.item)
                                                    completion(true)
                                                  })
            return UISwipeActionsConfiguration(actions: [deleteAction])
        }
        
        return UICollectionViewCompositionalLayout.list(using: config)
    }
    
    func configureHierarchy() {
        collectionView.collectionViewLayout = createLayout()
    }
    
    func configureDataSource() {
        let cellRegistration = UICollectionView.CellRegistration<UICollectionViewListCell, Detail> {
            (cell, indexPath, item) in
            var content = cell.defaultContentConfiguration()
            content.text = "due Date: \(item.dueDate)\ntitle: \(item.title)"
            cell.contentConfiguration = content
            cell.accessories = [.disclosureIndicator()]
            cell.backgroundConfiguration?.backgroundColor = .systemBackground
        }
        
        dataSource = UICollectionViewDiffableDataSource<Detail.Section, Detail>(collectionView: collectionView) {
            (collectionView, indexPath, item) -> UICollectionViewCell? in
            return collectionView.dequeueConfiguredReusableCell(using: cellRegistration, for: indexPath, item: item)
        }
    }
}
