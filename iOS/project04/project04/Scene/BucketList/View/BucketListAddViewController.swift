//
//  BucketListAddViewController.swift
//  project04
//
//  Created by jaejeon on 2020/12/01.
//

import UIKit

class BucketListAddViewController: UIViewController {

    @IBOutlet weak var scrollView: UIScrollView!
    @IBOutlet weak var collectionView: UICollectionView!
    
    typealias DataSource = UICollectionViewDiffableDataSource<Detail.Section, Detail>
    typealias Snapshot = NSDiffableDataSourceSnapshot<Detail.Section, Detail>
    
    var dataSource: DataSource?
    var bucketListAddViewModel: BucketListAddViewModelProtocol {
        didSet {
            bucketListAddViewModel.handler = { [weak self] data in
                var snapshot = Snapshot()
                snapshot.appendSections([.todo])
                snapshot.appendItems(data[.todo] ?? [], toSection: .todo)

                self?.dataSource?.apply(snapshot)
            }
        }
    }
    
    init?(coder: NSCoder, viewModel: BucketListAddViewModelProtocol) {
        self.bucketListAddViewModel = viewModel
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        registerForKeyboardNotifications()
        configureCollectionView()
        bucketListAddViewModel.handler = { [weak self] data in
            var snapshot = Snapshot()
            snapshot.appendSections([.todo])
            snapshot.appendItems(data[.todo] ?? [], toSection: .todo)

            self?.dataSource?.apply(snapshot)
        }

        bucketListAddViewModel.fetch(with: "")
    }
    
    func registerForKeyboardNotifications() {
        NotificationCenter.default.addObserver(self, selector: #selector(keyboardWillShow(_:)), name: UIResponder.keyboardWillShowNotification, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(keyboardWillHide(_:)), name: UIResponder.keyboardWillHideNotification, object: nil)
    }
    
    @objc func keyboardWillShow(_ notification: Notification) {
        guard let keyboardFrame = (notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue)?.cgRectValue else { return }

        let contentInsets = UIEdgeInsets(top: 0.0, left: 0.0, bottom: keyboardFrame.height, right: 0.0)
        scrollView.contentInset = contentInsets
        scrollView.scrollIndicatorInsets = contentInsets
    }
    
    @objc func keyboardWillHide(_ notification: Notification) {
        let contentInsets = UIEdgeInsets.zero
        scrollView.contentInset = contentInsets
        scrollView.scrollIndicatorInsets = contentInsets
    }
}

extension BucketListAddViewController: UICollectionViewDelegate {
    private func createLayout(using configuration: UICollectionLayoutListConfiguration) -> UICollectionViewLayout {
        return UICollectionViewCompositionalLayout.list(using: configuration)
    }

    private func configureDataSource(collectionView: UICollectionView,
                             cellProvider: @escaping (UICollectionView, IndexPath, Detail) -> UICollectionViewListCell?) {
        dataSource = DataSource(collectionView: collectionView, cellProvider: cellProvider)
    }
    
    private func configureCollectionView() {
        configureDataSource(collectionView: collectionView,
                            cellProvider: cellProvider(collectionView:indexPath:detail:))
        let configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        collectionView.collectionViewLayout = createLayout(using: configuration)
        collectionView.delegate = self
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
