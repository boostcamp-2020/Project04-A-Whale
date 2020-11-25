//
//  DetailListViewController.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import UIKit
import RealmSwift

class DetailListViewController: UIViewController {
    private var dataSource: UICollectionViewDiffableDataSource<Int, DetailList>! = nil
    private var collectionView: UICollectionView! = nil
    private var sampleIndex = 0
    private var collectionViewModel: DetailListViewModelProtocol? {
        didSet {
            self.collectionViewModel?.listDidChange = { [weak self] _ in
                self?.updateList()
            }
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureHierarchy()
        configureDataSource()
        
        let networkAgent = DetailAPIAgent()
        let localAgent = DetailLocalAgent()
        let repository = DetailRepository(network: networkAgent, local: localAgent)
        let usecase = DetailListUseCase(repository: repository)
        collectionViewModel = DetailListViewModel(usecase: usecase)
        collectionViewModel?.listFetchAction()
    }
    
    @IBAction func detailAppendAction(_ sender: UIBarButtonItem) {
        collectionViewModel?.listAddAction(DetailList(title: "\(sampleIndex)", dueDate: "123"))
        sampleIndex += 1
    }
}

extension DetailListViewController: UICollectionViewDelegate {
    func createLayout() -> UICollectionViewLayout {
        var config = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        config.trailingSwipeActionsConfigurationProvider = { (indexPath) -> UISwipeActionsConfiguration in
            return UISwipeActionsConfiguration(actions: [UIContextualAction(
                                                    style: .destructive,
                                                    title: "Delete",
                                                    handler: { [weak self] _, _, completion in
                                                        self?.collectionViewModel?.listDeleteAction(at: indexPath.item)
                                                        completion(true)
                                                    })])
        }
        
        return UICollectionViewCompositionalLayout.list(using: config)
    }
    
    func configureHierarchy() {
        collectionView = UICollectionView(frame: view.bounds, collectionViewLayout: createLayout())
        collectionView.delegate = self
        collectionView.allowsMultipleSelection = true
        view.addSubview(collectionView)
        
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor),
            collectionView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor),
            collectionView.leadingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.leadingAnchor),
            collectionView.trailingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.trailingAnchor)
        ])
    }
    
    func configureDataSource() {
        let cellRegistration = UICollectionView.CellRegistration<UICollectionViewListCell, DetailList> {
            (cell, indexPath, item) in
            var content = cell.defaultContentConfiguration()
            content.text = "due Date: \(item.dueDate)\ntitle: \(item.title)"
            cell.contentConfiguration = content
            cell.accessories = [.disclosureIndicator()]
            cell.backgroundConfiguration?.backgroundColor = .systemBackground
        }
        
        dataSource = UICollectionViewDiffableDataSource<Int, DetailList>(collectionView: collectionView) {
            (collectionView, indexPath, item) -> UICollectionViewCell? in
            return collectionView.dequeueConfiguredReusableCell(using: cellRegistration, for: indexPath, item: item)
        }
    }
    
    private func updateList() {
        var snapshot = NSDiffableDataSourceSnapshot<Int, DetailList>()
        let sections = [0]
        snapshot.appendSections(sections)
        snapshot.appendItems(collectionViewModel?.list ?? [])
        dataSource.apply(snapshot, animatingDifferences: false)
    }
}
