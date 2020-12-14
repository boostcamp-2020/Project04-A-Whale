//
//  ViewController.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import UIKit
import RealmSwift

protocol BucketListObserverDelegate: class {
    var bucketListViewModel: BucketListViewModelProtocol { get set }
}

class BucketListViewController: UIViewController, BucketListObserverDelegate {
    typealias DataSource = UICollectionViewDiffableDataSource<RealmBucket.Section, RealmBucket>
    typealias Snapshot = NSDiffableDataSourceSnapshot<RealmBucket.Section, RealmBucket>
    var dataSource: DataSource?
    var coordinator: DetailListPushCoordinator & BucketListAddPushCoordinator
    @IBOutlet weak var collectionView: UICollectionView!
    var bucketListViewModel: BucketListViewModelProtocol {
        didSet {
            bucketListViewModel.handler = { [weak self] (data) in
                var snapshot = Snapshot()
                snapshot.appendSections([.todo, .done])
                snapshot.appendItems(data?[.todo] ?? [], toSection: .todo)
                snapshot.appendItems(data?[.done] ?? [], toSection: .done)

                DispatchQueue.main.async {
                    self?.dataSource?.apply(snapshot, animatingDifferences: false)
                }
            }
        }
    }
    
    init?(coder: NSCoder, coordinator: DetailListPushCoordinator & BucketListAddPushCoordinator, viewModel: BucketListViewModelProtocol) {
        self.coordinator = coordinator
        self.bucketListViewModel = viewModel
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationController?.navigationBar.tintColor = .black
        configureCollectionView()
        bucketListViewModel.handler = { [weak self](data) in
            var snapshot = Snapshot()
            snapshot.appendSections([.todo, .done])
            snapshot.appendItems(data?[.todo] ?? [], toSection: .todo)
            snapshot.appendItems(data?[.done] ?? [], toSection: .done)
            
            DispatchQueue.main.async {
                self?.dataSource?.apply(snapshot, animatingDifferences: false)
            }
        }
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        bucketListViewModel.fetch()
    }
    
    @IBAction func didTouchPlusButton(_ sender: UIBarButtonItem) {
        coordinator.pushToBucketListAdd(from: self)
    }
}

extension BucketListViewController: UICollectionViewDelegate {
    private func createLayout(using configuration: UICollectionLayoutListConfiguration) -> UICollectionViewLayout {
        return UICollectionViewCompositionalLayout.list(using: configuration)
    }

    private func configureDataSource(collectionView: UICollectionView,
                                     cellProvider: @escaping (UICollectionView,
                                                              IndexPath,
                                                              RealmBucket) -> UICollectionViewListCell?) {
        dataSource = DataSource(collectionView: collectionView, cellProvider: cellProvider)
    }
    
    private func configureCollectionView() {
        configureDataSource(collectionView: collectionView,
                            cellProvider: cellProvider(collectionView:indexPath:bucket:))
        var configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        configuration.headerMode = .supplementary
        let headerRegistration = UICollectionView.SupplementaryRegistration
        <UICollectionViewListCell>(elementKind: UICollectionView.elementKindSectionHeader) { [weak self] (headerView, _, indexPath) in
            let headerItem = self?.dataSource?.snapshot().sectionIdentifiers[indexPath.section]
            var configuration = headerView.defaultContentConfiguration()
            configuration.text = headerItem?.rawValue
            headerView.contentConfiguration = configuration
        }
        dataSource?.supplementaryViewProvider = { [unowned self] (collectionView, elementKind, indexPath) -> UICollectionReusableView? in
            if elementKind == UICollectionView.elementKindSectionHeader {
                return self.collectionView.dequeueConfiguredReusableSupplementary(
                    using: headerRegistration, for: indexPath)
            }
            return nil
        }
        
        collectionView.collectionViewLayout = createLayout(using: configuration)
        collectionView.delegate = self
    }
    
    private func configureCell() -> UICollectionView.CellRegistration<UICollectionViewListCell, RealmBucket> {
        return UICollectionView.CellRegistration<UICollectionViewListCell, RealmBucket> { (cell, _, bucket) in
            var content = cell.defaultContentConfiguration()
            content.text = bucket.title
            content.secondaryText = bucket.subTitle
            content.image = UIImage(systemName: "note.text")
            cell.accessories = [.disclosureIndicator()]
            cell.contentConfiguration = content
            cell.tintColor = .black
            cell.backgroundConfiguration?.backgroundColor = .systemBackground
        }
    }
    
    private func cellProvider(collectionView: UICollectionView,
                              indexPath: IndexPath,
                              bucket: RealmBucket) -> UICollectionViewListCell? {
        let cell = collectionView.dequeueConfiguredReusableCell(using: configureCell(), for: indexPath, item: bucket)
        
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        var section: RealmBucket.Section?
        
        indexPath.section == 0 ? (section = .todo) : (section = .done)
        let bucket = bucketListViewModel.buckets?[section ?? .todo]?[indexPath.item]
        coordinator.pushToDetailList(bucket: bucket, index: indexPath.item, delegate: self)
    }
}
