//
//  ViewController.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import UIKit
import RealmSwift

protocol BucketListAddDelegate {
    var bucketListViewModel: BucketListViewModelProtocol { get set }
}

class BucketListViewController: UIViewController, BucketListAddDelegate {
    typealias DataSource = UICollectionViewDiffableDataSource<Bucket.Section, Bucket>
    typealias Snapshot = NSDiffableDataSourceSnapshot<Bucket.Section, Bucket>
    var dataSource: DataSource?
    var coordinator: DetailListPushCoordinator & BucketListAddCoordinator
    @IBOutlet weak var collectionView: UICollectionView!
    var bucketListViewModel: BucketListViewModelProtocol {
        didSet {
            bucketListViewModel.handler = { [weak self] (data) in
                var snapshot = Snapshot()
                snapshot.appendSections([.todo, .done])
                snapshot.appendItems(data?[.todo] ?? [], toSection: .todo)
                snapshot.appendItems(data?[.done] ?? [], toSection: .done)

                self?.dataSource?.apply(snapshot)
            }
        }
    }
    
    init?(coder: NSCoder, coordinator: DetailListPushCoordinator & BucketListAddCoordinator, viewModel: BucketListViewModelProtocol) {
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

            self?.dataSource?.apply(snapshot)
        }
        bucketListViewModel.fetch()
    }
    
    @IBAction func didTouchPlusButton(_ sender: UIBarButtonItem) {
        coordinator.pushToBucketListAdd(from: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let destination = segue.destination as? DetailListViewController {
            if let bucket = sender as? Bucket {
                do {
                    let realm = try Realm()
                    let realmBucket = realm.objects(RealmBucket.self).filter { $0.id == bucket.id }
                    destination.bucket = realmBucket.first
                } catch {
                    print(error)
                }
            }
        }
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

            let doneAction = UIContextualAction(style: .destructive, title: "Done") { (action, _, completion) in
                self?.bucketListViewModel.remove(at: indexPath.row)
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
            content.image = UIImage(systemName: "note.text")
            cell.accessories = [.disclosureIndicator()]
            cell.contentConfiguration = content
            cell.tintColor = .black
            cell.backgroundConfiguration?.backgroundColor = .systemBackground
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
        do {
            let realm = try Realm()
            let realmBucket = realm.objects(RealmBucket.self).filter { $0.id == bucket?.id }
            coordinator.pushToDetailList(bucket: realmBucket.first)
        } catch {
            print(error)
        }
    }
}
