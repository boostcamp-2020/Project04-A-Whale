//
//  BucketListAddViewController.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import UIKit

class BucketListAddViewController: UIViewController {
    typealias DataSource = UICollectionViewDiffableDataSource<RealmDetail.Section, RealmDetail>
    typealias Snapshot = NSDiffableDataSourceSnapshot<RealmDetail.Section, RealmDetail>
    
    @IBOutlet weak var collectionView: UICollectionView!
    private weak var delegate: BucketListObserverDelegate?
    private var sectionHeader: BucketListAddHeaderView?
    private var dataSource: DataSource?
    private var coordinator: BucketListAddCoordinator
    private var bucketListAddViewModel: BucketViewModelProtocol & DetailListViewModelProtocol
    
    init?(coder: NSCoder, viewModel: BucketViewModelProtocol & DetailListViewModelProtocol, delegate: BucketListObserverDelegate, coordinator: BucketListAddCoordinator) {
        self.bucketListAddViewModel = viewModel
        self.delegate = delegate
        self.coordinator = coordinator
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureCollectionView()
        bucketListAddViewModel.didChangeBucket = { [weak self] bucket in
            self?.sectionHeader?.configure(with: bucket)
        }
        bucketListAddViewModel.listDidChange = { [weak self] viewModel in
            DispatchQueue.main.async {
                var snapshot = Snapshot()
                snapshot.appendSections([.input, .todo])
                snapshot.appendItems(viewModel.list[.todo] ?? [], toSection: .todo)
                self?.dataSource?.apply(snapshot, animatingDifferences: false)
            }
        }
        bucketListAddViewModel.listFetchAction(with: nil)
    }
    
    @IBAction func didToucAddButton(_ sender: UIBarButtonItem) {
        guard let title = sectionHeader?.titleTextField.text,
              let description = sectionHeader?.descriptionTextView.text,
              !title.isEmpty else {
            let alert = defaultAlertController(title: "추가 불가", message: "목표는 필수로 입력해야합니다.")
            present(alert, animated: true, completion: nil)
            return
        }
        
        let bucket = RealmBucket(value: [-1, title, description, "O"])
        bucketListAddViewModel.bucket = bucket
        bucketListAddViewModel.saveAction(completion: { [weak self] _ in
            self?.delegate?.bucketListViewModel.fetch()
        })
        navigationController?.popViewController(animated: true)
    }

    @objc func didTouchSearchButton(sender: UIButton) {
        coordinator.pushToBucketListSearch { [weak self] (bucket) in
            self?.bucketListAddViewModel.bucket = RealmBucket(value: [bucket.no, bucket.title, bucket.bucketDescription])
            self?.bucketListAddViewModel.listFetchAction(with: bucket.no)
        }
    }
}

private extension BucketListAddViewController {
    func createLayout(using configuration: UICollectionLayoutListConfiguration) -> UICollectionViewLayout {
        return UICollectionViewCompositionalLayout.list(using: configuration)
    }

    func configureDataSource(collectionView: UICollectionView,
                             cellProvider: @escaping (UICollectionView,
                                                      IndexPath,
                                                      RealmDetail) -> UICollectionViewListCell?) {
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
                    withReuseIdentifier: BucketListAddHeaderView.description(),
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
                view?.rightButtonHandler = { [weak self] in
                    self?.view.endEditing(true)
                    self?.coordinator.presentDetailListAdd(self?.navigationController, viewModel: self?.bucketListAddViewModel)
                }
                return view
            default:
                return nil
            }
        }
    }
    
    func configureCollectionView() {
        configureDataSource(collectionView: collectionView,
                            cellProvider: cellProvider(collectionView:indexPath:detail:))
        var configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        configuration.headerMode = .supplementary
        configuration.trailingSwipeActionsConfigurationProvider = { [weak self] indexPath in
            let sectionIdentifier = self?.dataSource?.snapshot().sectionIdentifiers[indexPath.section].rawValue
            guard sectionIdentifier == "todo" else { return nil }
            
            let deleteAction = UIContextualAction(style: .destructive,
                                                  title: "Delete",
                                                  handler: { [weak self] _, _, _ in
                                                    let detail = self?.dataSource?.itemIdentifier(for: indexPath)
                                                    self?.bucketListAddViewModel.listDeleteAction(at: detail?.no ?? 0)
                                                  })
            
            return UISwipeActionsConfiguration(actions: [deleteAction])
        }
        collectionView.collectionViewLayout = createLayout(using: configuration)
        collectionView.delegate = self
        
        let inputHeaderNib = UINib(nibName: "BucketListAddHeaderView", bundle: nil)
        collectionView.register(inputHeaderNib, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: BucketListAddHeaderView.description())
        let detailHeaderNib = UINib(nibName: "DetailSectionHeaderView", bundle: nil)
        collectionView.register(detailHeaderNib, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: DetailSectionHeaderView.description())
    }
    
    func configureCell() -> UICollectionView.CellRegistration<UICollectionViewListCell, RealmDetail> {
        return UICollectionView.CellRegistration<UICollectionViewListCell, RealmDetail> { (cell, _, detail) in
            var content = cell.defaultContentConfiguration()
            content.text = "목표: \(detail.title)"
            content.secondaryText = "만료일: \(detail.dueDate)"
            cell.contentConfiguration = content
            cell.backgroundConfiguration?.backgroundColor = .systemBackground
        }
    }
    
    func cellProvider(collectionView: UICollectionView,
                      indexPath: IndexPath,
                      detail: RealmDetail) -> UICollectionViewListCell? {
        let cell = collectionView.dequeueConfiguredReusableCell(using: configureCell(), for: indexPath, item: detail)
        
        return cell
    }
}

extension BucketListAddViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        coordinator.presentDetailListAdd(navigationController,
                                          viewModel: bucketListAddViewModel,
                                          detail: bucketListAddViewModel.list[.todo]?[indexPath.item],
                                          index: indexPath.item)
    }
}
