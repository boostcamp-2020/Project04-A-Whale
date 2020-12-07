//
//  BucketListAddViewController.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import UIKit

class BucketListAddViewController: UIViewController {

    @IBOutlet weak var collectionView: UICollectionView!
    var sectionHeader: BucketListAddHeaderView?
    
    typealias DataSource = UICollectionViewDiffableDataSource<RealmDetail.Section, RealmDetail>
    typealias Snapshot = NSDiffableDataSourceSnapshot<RealmDetail.Section, RealmDetail>
    
    var dataSource: DataSource?
    var delegate: BucketListObserverDelegate
    var coordinator: BucketListSearchCoordinator
    var bucketListAddViewModel: BucketListAddViewModelProtocol {
        didSet {
            bucketListAddViewModel.didChangeDetails = { [weak self] data in
                var snapshot = Snapshot()
                snapshot.appendSections([.input, .todo])
                snapshot.appendItems(data[.todo] ?? [], toSection: .todo)

                self?.dataSource?.apply(snapshot,animatingDifferences: false)
            }
            bucketListAddViewModel.didChangeBucket = {[weak self] bucket in
                self?.sectionHeader?.configure(with: bucket)
            }
        }
    }
    
    init?(coder: NSCoder, viewModel: BucketListAddViewModelProtocol, delegate: BucketListObserverDelegate, coordinator: BucketListSearchCoordinator) {
        self.bucketListAddViewModel = viewModel
        self.delegate = delegate
        self.coordinator = coordinator
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @IBAction func didToucAddButton(_ sender: UIBarButtonItem) {
        guard let title = sectionHeader?.titleTextField.text,
              let description = sectionHeader?.descriptionTextView.text else { return }
        if !title.isEmpty {
            let bucket = RealmBucket(value: [-1, title, description, "O"])
            delegate.bucketListViewModel.append(bucket: bucket)
        }
        navigationController?.popViewController(animated: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureCollectionView()
        bucketListAddViewModel.didChangeDetails = { [weak self] data in
            var snapshot = Snapshot()
            snapshot.appendSections([.input,.todo])
            snapshot.appendItems(data[.todo] ?? [], toSection: .todo)

            self?.dataSource?.apply(snapshot)
        }
        bucketListAddViewModel.didChangeBucket = { [weak self] bucket in 
            self?.sectionHeader?.configure(with: bucket)
        }

        bucketListAddViewModel.fetch()
    }
    
    @objc func didTouchSearchButton(sender: UIButton) {
        coordinator.pushToBucketListSearch { [weak self] (bucket) in
            self?.bucketListAddViewModel.bucket = bucket
            self?.bucketListAddViewModel.fetch()
        }
    }
}

extension BucketListAddViewController: UICollectionViewDelegate {
    private func createLayout(using configuration: UICollectionLayoutListConfiguration) -> UICollectionViewLayout {
        return UICollectionViewCompositionalLayout.list(using: configuration)
    }

    private func configureDataSource(collectionView: UICollectionView,
                             cellProvider: @escaping (UICollectionView, IndexPath, RealmDetail) -> UICollectionViewListCell?) {
        dataSource = DataSource(collectionView: collectionView, cellProvider: cellProvider)
        dataSource?.supplementaryViewProvider = { collectionView, kind, indexPath in
            guard kind == UICollectionView.elementKindSectionHeader else {
                return nil
            }
            let sectionIdentifier = self.dataSource?.snapshot().sectionIdentifiers[indexPath.section]

            switch sectionIdentifier {
            case .input:
                let view = collectionView.dequeueReusableSupplementaryView(
                    ofKind: kind,
                    withReuseIdentifier: BucketListAddHeaderView.reuseIdentifier,
                    for: indexPath) as? BucketListAddHeaderView
                view?.configureTextViewPlaceholder()
                view?.descriptionTextView.delegate = view
                view?.searchButton.addTarget(self, action: #selector(self.didTouchSearchButton), for: .touchUpInside)
                self.sectionHeader = view
                return view
            case .todo:
                let view = collectionView.dequeueReusableSupplementaryView(
                    ofKind: kind,
                    withReuseIdentifier: DetailSectionHeaderView.description(),
                    for: indexPath) as? DetailSectionHeaderView
                view?.titleLabel.text = "TODO"
                view?.rightButton.setTitle("추가하기", for: .normal)
                view?.rightButton.imageView?.image = .add
                view?.rightButton.isHidden = false
                return view
            default:
                return nil
            }
        }
    }
    
    private func configureCollectionView() {
        configureDataSource(collectionView: collectionView,
                            cellProvider: cellProvider(collectionView:indexPath:detail:))
        var configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        configuration.headerMode = .supplementary
        collectionView.collectionViewLayout = createLayout(using: configuration)
        collectionView.delegate = self
        
        let inputHeaderNib = UINib(nibName: "BucketListAddHeaderView", bundle: nil)
        collectionView.register(inputHeaderNib, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: BucketListAddHeaderView.reuseIdentifier)
        let detailHeaderNib = UINib(nibName: "DetailSectionHeaderView", bundle: nil)
        collectionView.register(detailHeaderNib, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: DetailSectionHeaderView.description())
    }
    
    private func configureCell() -> UICollectionView.CellRegistration<UICollectionViewListCell, RealmDetail> {
        return UICollectionView.CellRegistration<UICollectionViewListCell, RealmDetail> { (cell, _, detail) in
            var content = cell.defaultContentConfiguration()
            content.text = detail.title
            cell.contentConfiguration = content
        }
    }
    
    private func cellProvider(collectionView: UICollectionView,
                              indexPath: IndexPath,
                              detail: RealmDetail) -> UICollectionViewListCell? {
        let cell = collectionView.dequeueConfiguredReusableCell(using: configureCell(), for: indexPath, item: detail)
        
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        
    }
}
