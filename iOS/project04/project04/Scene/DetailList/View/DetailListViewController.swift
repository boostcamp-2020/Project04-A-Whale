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
    var bucket: RealmBucket?
    var coordinator: DetailAddCoordinator?
    var collectionViewModel: DetailListViewModelProtocol?

    init?(coder: NSCoder,
          bucket: RealmBucket?,
          viewModel: DetailListViewModelProtocol,
          coordinator: DetailAddCoordinator) {
        self.bucket = bucket
        self.collectionViewModel = viewModel
        self.coordinator = coordinator
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = bucket?.title
        configureHierarchy()
        configureDataSource()
        
        collectionViewModel?.listDidChange = { [weak self] _ in
            var snapshot = NSDiffableDataSourceSnapshot<Detail.Section, Detail>()
            let sections: [Detail.Section] = [.graph, .feel, .todo, .done]
            snapshot.appendSections(sections)
            snapshot.appendItems([], toSection: .graph)
            snapshot.appendItems([], toSection: .feel)
            snapshot.appendItems(self?.collectionViewModel?.list[.todo] ?? [], toSection: .todo)
            snapshot.appendItems(self?.collectionViewModel?.list[.done] ?? [], toSection: .done)
            self?.dataSource.apply(snapshot, animatingDifferences: false)
        }
        
        collectionView.register(UINib(nibName: "DetailSectionHeaderView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionHeaderView.description())
        collectionView.register(UINib(nibName: "DetailSectionImpressionHeaderView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionImpressionHeaderView.description())
        
        collectionViewModel?.listFetchAction()
    }
    
    @IBAction func detailAppendAction(_ sender: UIBarButtonItem) {
        coordinator?.presentDetailListAdd(navigationController, viewModel: collectionViewModel)
    }
}

extension DetailListViewController: UICollectionViewDelegate {
    private func createLayout() -> UICollectionViewLayout {
        var config = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        config.headerMode = .supplementary
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
    
    private func configureHierarchy() {
        collectionView.collectionViewLayout = createLayout()
    }
    
    private func configureDataSource() {
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
        
        dataSource.supplementaryViewProvider = { [weak self]
            (collectionView, kind, indexPath) -> UICollectionReusableView? in
            if kind == UICollectionView.elementKindSectionHeader {
                if indexPath.section > 1 || indexPath.section == 0 {
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionHeaderView.description(), for: indexPath) as? DetailSectionHeaderView else {
                        return nil
                    }
                    let sectionIdentifier = self?.dataSource?.snapshot().sectionIdentifiers[indexPath.section]
                    headerView.titleLabel.text = sectionIdentifier?.rawValue
                    return headerView
                } else {
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionImpressionHeaderView.description(), for: indexPath) as? DetailSectionImpressionHeaderView else {
                        return nil
                    }
                    return headerView
                }
            }
            return nil
        }
    }
}
