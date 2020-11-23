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
    
    @IBOutlet weak var collectionView: UICollectionView!
    override func viewDidLoad() {
        super.viewDidLoad()
        configureCollectionView()
        displayBucketList(with: [.todo : (0...10).map({ Bucket(title: "Hello \($0)") })])
    }
    
    func displayBucketList(with data: [Bucket.Section: [Bucket]]) {
        var snapshot = Snapshot()
        snapshot.appendSections([.todo])
        snapshot.appendItems(data[.todo] ?? [], toSection: .todo)
        dataSource?.apply(snapshot)
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
        let configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
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
}

