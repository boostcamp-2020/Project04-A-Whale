//
//  ViewController.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import UIKit

class BucketListViewController: UIViewController {
    typealias DataSource = UICollectionViewDiffableDataSource<Bucket.Section, Bucket>
    typealias Snapshot = NSDiffableDataSourceSnapshot<Bucket.Section, Bucket>
    var dataSource: DataSource?
    var bucketListViewModel: BucketListViewModel?
    @IBOutlet weak var collectionView: UICollectionView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureCollectionView()
        bucketListViewModel = BucketListViewModel(with: [.todo : [], .done: []], handler: { [weak self](data) in
            var snapshot = Snapshot()
            snapshot.appendSections([.todo, .done])
            snapshot.appendItems(data?[.todo] ?? [], toSection: .todo)
            snapshot.appendItems(data?[.done] ?? [], toSection: .done)

            self?.dataSource?.apply(snapshot)
        })
    }
    
    @IBAction func didTouchPlusButton(_ sender: UIBarButtonItem) {
        self.bucketListViewModel?.append(bucket: Bucket(title: "New Bucket\(bucketListViewModel?.count ?? 0)"))
    }
    
}

extension BucketListViewController: UICollectionViewDelegate {
    private func createLayout(using configuration: UICollectionLayoutListConfiguration) -> UICollectionViewLayout {
        return UICollectionViewCompositionalLayout.list(using: configuration)
    }

    private func configureDataSource(collectionView: UICollectionView,
                             cellProvider: @escaping (UICollectionView, IndexPath, Bucket) -> UICollectionViewListCell?) {
        dataSource = DataSource(collectionView: collectionView, cellProvider: cellProvider)
    }
    
    private func configureCollectionView() {
        configureDataSource(collectionView: collectionView,
                            cellProvider: cellProvider(collectionView:indexPath:bucket:))
        var configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        configuration.headerMode = .supplementary
        let headerRegistration = UICollectionView.SupplementaryRegistration
        <UICollectionViewListCell>(elementKind: UICollectionView.elementKindSectionHeader) {
            [unowned self] (headerView, elementKind, indexPath) in
            let headerItem = self.dataSource?.snapshot().sectionIdentifiers[indexPath.section]
            var configuration = headerView.defaultContentConfiguration()
            configuration.text = headerItem?.rawValue
            headerView.contentConfiguration = configuration
        }
        dataSource?.supplementaryViewProvider = { [unowned self]
            (collectionView, elementKind, indexPath) -> UICollectionReusableView? in
            if elementKind == UICollectionView.elementKindSectionHeader {
                return self.collectionView.dequeueConfiguredReusableSupplementary(
                    using: headerRegistration, for: indexPath)
            }
            return nil
        }
        configuration.trailingSwipeActionsConfigurationProvider = { [weak self] (indexPath) in
            guard indexPath.section == 0 else { return nil }
            guard let item = self?.dataSource?.itemIdentifier(for: indexPath) else {
                return nil
            }

            let doneAction = UIContextualAction(style: .destructive, title: "Done") { (action, _, completion) in
                self?.bucketListViewModel?.remove(bucket: item)
                completion(true)
            }

            return UISwipeActionsConfiguration(actions: [doneAction])
        }
        collectionView.collectionViewLayout = createLayout(using: configuration)
        collectionView.delegate = self
    }
    
    private func configureCell() -> UICollectionView.CellRegistration<UICollectionViewListCell, Bucket> {
        return UICollectionView.CellRegistration<UICollectionViewListCell, Bucket> { (cell, _, bucket) in
            var content = cell.defaultContentConfiguration()
            content.text = bucket.title
            cell.contentConfiguration = content
        }
    }
    
    private func cellProvider(collectionView: UICollectionView,
                              indexPath: IndexPath,
                              bucket: Bucket) -> UICollectionViewListCell? {
        let cell = collectionView.dequeueConfiguredReusableCell(using: configureCell(), for: indexPath, item: bucket)
        
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let bucket = dataSource?.itemIdentifier(for: indexPath)
        performSegue(withIdentifier: "DetailListSegue", sender: bucket)
    }
}

