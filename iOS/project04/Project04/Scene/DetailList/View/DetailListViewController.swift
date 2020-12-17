//
//  DetailListViewController.swift
//  project04
//
//  Created by 남기범 on 2020/11/23.
//

import UIKit
import RealmSwift

protocol ImpressionDelegate: class {
    var impressionViewModel: ImpressionViewModelProtocol { get set }
}

class DetailListViewController: UIViewController, ImpressionDelegate {
    @IBOutlet weak var collectionView: UICollectionView!
    private var dataSource: UICollectionViewDiffableDataSource<RealmDetail.Section, RealmDetail>! = nil
    private var bucket: RealmBucket?
    private var coordinator: DetailAddCoordinator?
    private var collectionViewModel: DetailListViewModelProtocol?
    private weak var delegate: BucketListObserverDelegate?
    private var index: Int
    var impressionViewModel: ImpressionViewModelProtocol

    init?(coder: NSCoder,
          bucket: RealmBucket?,
          viewModel: DetailListViewModelProtocol,
          coordinator: DetailAddCoordinator,
          index: Int,
          delegate: BucketListObserverDelegate,
          impressionViewModel: ImpressionViewModelProtocol) {
        self.bucket = bucket
        self.collectionViewModel = viewModel
        self.coordinator = coordinator
        self.index = index
        self.delegate = delegate
        self.impressionViewModel = impressionViewModel
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
        collectionViewModel?.listDidChange = { [weak self] viewModel in
            DispatchQueue.main.async {
                self?.updateList()
                self?.detailSuccessChecker(viewModel: viewModel)
                self?.animatePieView(viewModel: viewModel)
            }
        }
        impressionViewModel.textChange = { [weak self] viewModel in
            DispatchQueue.main.async {
                self?.updateList()
            }
        }
        
        if bucket?.status == "A" {
            navigationItem.rightBarButtonItem?.isEnabled = false
        }
        impressionViewModel.impressionFetch(bucketNo: bucket?.no ?? 0)
        collectionViewModel?.listFetchAction(with: bucket?.no)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        detailSuccessChecker(viewModel: collectionViewModel)
        checkTokenExpired()
    }
    
    @IBAction func detailAppendAction(_ sender: UIBarButtonItem) {
        coordinator?.presentDetailListAdd(navigationController, viewModel: collectionViewModel, index: bucket?.no)
    }
}

private extension DetailListViewController {
    func createLayout() -> UICollectionViewLayout {
        var config = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        config.headerMode = .supplementary
        config.trailingSwipeActionsConfigurationProvider = { [weak self] indexPath in
            let sectionIdentifier = self?.dataSource?.snapshot().sectionIdentifiers[indexPath.section].rawValue
            guard sectionIdentifier == "todo" else { return nil }
            
            let deleteAction = UIContextualAction(style: .destructive,
                                                  title: "Delete",
                                                  handler: { [weak self] _, _, _ in
                                                    let detail = self?.dataSource?.itemIdentifier(for: indexPath)
                                                    self?.collectionViewModel?.listDeleteAction(at: detail?.no ?? 0)
                                                  })
            
            let doneAction = UIContextualAction(style: .normal,
                                                title: "done",
                                                handler: { [weak self] _, _, _ in
                                                    self?.collectionViewModel?.listStatusReviseAction(at: indexPath.item)
                                                })
            
            return UISwipeActionsConfiguration(actions: [doneAction, deleteAction])
        }
        
        return UICollectionViewCompositionalLayout.list(using: config)
    }
    
    func configureHierarchy() {
        collectionView.collectionViewLayout = createLayout()
        collectionView.delegate = self
    }
    
    func configureDataSource() {
        let cellRegistration = UICollectionView.CellRegistration<UICollectionViewListCell, RealmDetail> { (cell, _, item) in
            var content = cell.defaultContentConfiguration()
            content.text = "목표: \(item.title)"
            content.secondaryText = "만료일: \(item.dueDate)"
            cell.contentConfiguration = content
            cell.backgroundConfiguration?.backgroundColor = .systemBackground
        }
        
        dataSource = UICollectionViewDiffableDataSource<RealmDetail.Section, RealmDetail>(collectionView: collectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
            return collectionView.dequeueConfiguredReusableCell(using: cellRegistration, for: indexPath, item: item)
        }
        
        configureHeaderView()
    }
    
    func configureHeaderView() {
        dataSource.supplementaryViewProvider = { [weak self] (collectionView, kind, indexPath) -> UICollectionReusableView? in
            let sectionIdentifier = self?.dataSource?.snapshot().sectionIdentifiers[indexPath.section].rawValue
            
            if kind == UICollectionView.elementKindSectionHeader {
                switch sectionIdentifier {
                case RealmDetail.Section.done.rawValue:
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionHeaderView.description(), for: indexPath) as? DetailSectionHeaderView else {
                        return nil
                    }
                    headerView.titleLabel.text = sectionIdentifier
                    headerView.rightButtonHandler = { [weak self] in
                        self?.configureSuccessHandler()
                    }
                    return headerView
                case RealmDetail.Section.feel.rawValue:
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionImpressionHeaderView.description(), for: indexPath) as? DetailSectionImpressionHeaderView else {
                        return nil
                    }
                    headerView.editHandler = { [weak self] in
                        self?.coordinator?.presentImpression(self?.navigationController, viewModel: self!, bucketNo: self?.bucket?.no ?? 0)
                    }
                    headerView.impressionLabel.text = self?.impressionViewModel.impressionText
                    if headerView.impressionLabel.text == "" {
                        headerView.impressionLabel.text = "소감을 입력하지 않았습니다."
                    }
                    return headerView
                case RealmDetail.Section.todo.rawValue:
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionHeaderTodoView.description(), for: indexPath) as? DetailSectionHeaderTodoView else {
                        return nil
                    }
                    headerView.titleLabel.text = sectionIdentifier
                    return headerView
                case RealmDetail.Section.graph.rawValue:
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionGraphView.description(), for: indexPath) as? DetailSectionGraphView else {
                        return nil
                    }
                    return headerView
                default:
                    return nil
                }
            }
            return nil
        }
        
        registerCollectionHeaderView()
    }
    
    func registerCollectionHeaderView() {
        collectionView.register(UINib(nibName: "DetailSectionHeaderView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionHeaderView.description())
        collectionView.register(UINib(nibName: "DetailSectionImpressionHeaderView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionImpressionHeaderView.description())
        collectionView.register(UINib(nibName: "DetailSectionHeaderTodoView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionHeaderTodoView.description())
        collectionView.register(UINib(nibName: "DetailSectionGraphView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionGraphView.description())
    }
    
    func updateList() {
        var snapshot = NSDiffableDataSourceSnapshot<RealmDetail.Section, RealmDetail>()
        var sections: [RealmDetail.Section] = [.todo, .done]
        
        if bucket?.status == "A" {
            sections.insert(.feel, at: 0)
            sections.insert(.graph, at: 0)
            snapshot.appendSections(sections)
            snapshot.appendItems([], toSection: .graph)
            snapshot.appendItems([], toSection: .feel)
        } else {
            sections.insert(.graph, at: 0)
            snapshot.appendSections(sections)
            snapshot.appendItems([], toSection: .graph)
        }
        
        snapshot.appendItems(collectionViewModel?.list[.todo] ?? [], toSection: .todo)
        snapshot.appendItems(collectionViewModel?.list[.done] ?? [], toSection: .done)
        
        dataSource.apply(snapshot, animatingDifferences: false)
        
    }
    
    func configureSuccessHandler() {
        let alert = UIAlertController(title: "달성 여부",
                                      message: "버킷을 달성처리 하시겠습니까? 달성 시, 달성 취소가 불가능 합니다.",
                                      preferredStyle: .alert)
        
        let successAction = UIAlertAction(title: "예", style: .default, handler: { [weak self] _ in
            self?.delegate?.bucketListViewModel.reviseStatus(index: self?.index ?? 0)
            self?.coordinator?.presentImpression(self?.navigationController, viewModel: self!, bucketNo: self?.bucket?.no ?? 0)
        })
        let cancelAction = UIAlertAction(title: "아니오", style: .cancel)
        alert.addAction(successAction)
        alert.addAction(cancelAction)
        
        present(alert, animated: false, completion: nil)
    }
    
    func animatePieView(viewModel: DetailListViewModelProtocol?) {
        let headerViews = collectionView.visibleSupplementaryViews(ofKind: UICollectionView.elementKindSectionHeader)
        let headerView = headerViews.filter { $0.isKind(of: DetailSectionGraphView.self) }
            .map { $0 as? DetailSectionGraphView }.first
        
        var values: [CGFloat] = []
        values.append(CGFloat(viewModel?.list[.done]?.count ?? 0))
        values.append(CGFloat(viewModel?.list[.todo]?.count ?? 0))
        
        if values.filter({ $0 == 0 }).count == 2 {
            values[1] = 1
        }
        
        headerView??.graphView.removeSublayers()
        guard let color = UIColor.init(named: "GraphColor") else {
            return
        }
        headerView??.graphView.animateChart(colors: [color, .darkGray],
                                            values: values,
                                            duration: 1)
    }
    
    func detailSuccessChecker(viewModel: DetailListViewModelProtocol?) {
        if viewModel?.list[.todo]?.count == 0,
           viewModel?.list[.done]?.count != 0,
           bucket?.status == "O" {
            isHiddenHeaderSuccessButton(status: false)
        } else {
            isHiddenHeaderSuccessButton(status: true)
        }
    }
    
    func isHiddenHeaderSuccessButton(status: Bool) {
        let headerViews = collectionView.visibleSupplementaryViews(ofKind: UICollectionView.elementKindSectionHeader)
        let headerView = headerViews.filter { $0.isKind(of: DetailSectionHeaderView.self) }
            .map { $0 as? DetailSectionHeaderView }
            .filter { $0?.titleLabel.text == "done" }.first
        headerView??.rightButton.isHidden = status
    }
}

extension DetailListViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let sectionIdentifier = dataSource?.snapshot().sectionIdentifiers[indexPath.section].rawValue
        if sectionIdentifier == "todo" && bucket?.status != "A" {
            coordinator?.presentDetailListAdd(navigationController,
                                              viewModel: collectionViewModel,
                                              detail: collectionViewModel?.list[.todo]?[indexPath.item],
                                              index: indexPath.item)
        }
    }
}
