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
    
    typealias DataSource = UICollectionViewDiffableDataSource<Detail.Section, Detail>
    typealias Snapshot = NSDiffableDataSourceSnapshot<Detail.Section, Detail>
    
    var dataSource: DataSource?
    var delegate: BucketListAddDelegate
    var coordinator: BucketListSearchCoordinator
    var bucketListAddViewModel: BucketListAddViewModelProtocol {
        didSet {
            bucketListAddViewModel.didChangeDetails = { [weak self] data in
                var snapshot = Snapshot()
                snapshot.appendSections([.todo])
                snapshot.appendItems(data[.todo] ?? [], toSection: .todo)

                self?.dataSource?.apply(snapshot,animatingDifferences: false)
            }
            bucketListAddViewModel.didChangeBucket = {[weak self] bucket in
                self?.sectionHeader?.titleTextField.text = bucket.title
                self?.sectionHeader?.descriptionTextView.text = bucket.description
            }
        }
    }
    
    init?(coder: NSCoder, viewModel: BucketListAddViewModelProtocol, delegate: BucketListAddDelegate, coordinator: BucketListSearchCoordinator) {
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
            let bucket = Bucket(id: nil, title: title, description: description, status: "O")
            delegate.bucketListViewModel.append(bucket: bucket)
        }
        navigationController?.popViewController(animated: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureCollectionView()
        bucketListAddViewModel.didChangeDetails = { [weak self] data in
            var snapshot = Snapshot()
            snapshot.appendSections([.todo])
            snapshot.appendItems(data[.todo] ?? [], toSection: .todo)

            self?.dataSource?.apply(snapshot)
        }
        bucketListAddViewModel.didChangeBucket = { [weak self] bucket in 
            self?.sectionHeader?.titleTextField.text = bucket.title
        }

        bucketListAddViewModel.fetch(with: "")
    }
    
    @objc func didTouchSearchButton(sender: UIButton) {
        coordinator.pushToBucketListSearch { (bucket) in
            self.bucketListAddViewModel.bucket = bucket
        }
    }
}

extension BucketListAddViewController: UICollectionViewDelegate {
    private func createLayout(using configuration: UICollectionLayoutListConfiguration) -> UICollectionViewLayout {
        return UICollectionViewCompositionalLayout.list(using: configuration)
    }

    private func configureDataSource(collectionView: UICollectionView,
                             cellProvider: @escaping (UICollectionView, IndexPath, Detail) -> UICollectionViewListCell?) {
        dataSource = DataSource(collectionView: collectionView, cellProvider: cellProvider)
        dataSource?.supplementaryViewProvider = { collectionView, kind, indexPath in
            guard kind == UICollectionView.elementKindSectionHeader else {
                return nil
            }
            let view = collectionView.dequeueReusableSupplementaryView(
                ofKind: kind,
                withReuseIdentifier: BucketListAddHeaderView.reuseIdentifier,
                for: indexPath) as? BucketListAddHeaderView
            view?.configureTextViewPlaceholder()
            view?.descriptionTextView.delegate = view
            view?.searchButton.addTarget(self, action: #selector(self.didTouchSearchButton), for: .touchUpInside)
            self.sectionHeader = view
            return view
        }
    }
    
    private func configureCollectionView() {
        configureDataSource(collectionView: collectionView,
                            cellProvider: cellProvider(collectionView:indexPath:detail:))
        var configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        configuration.headerMode = .supplementary
        collectionView.collectionViewLayout = createLayout(using: configuration)
        collectionView.delegate = self
        
        let nib = UINib(nibName: "BucketListAddHeaderView", bundle: nil)
        collectionView.register(nib, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: BucketListAddHeaderView.reuseIdentifier)
    }
    
    private func configureCell() -> UICollectionView.CellRegistration<UICollectionViewListCell, Detail> {
        return UICollectionView.CellRegistration<UICollectionViewListCell, Detail> { (cell, _, detail) in
            var content = cell.defaultContentConfiguration()
            content.text = detail.title
            cell.contentConfiguration = content
        }
    }
    
    private func cellProvider(collectionView: UICollectionView,
                              indexPath: IndexPath,
                              detail: Detail) -> UICollectionViewListCell? {
        let cell = collectionView.dequeueConfiguredReusableCell(using: configureCell(), for: indexPath, item: detail)
        
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        
    }
}
