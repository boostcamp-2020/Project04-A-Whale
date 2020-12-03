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
            self?.updateList()
        }
        
        collectionViewModel?.todoListCountCheck = { [weak self] viewModel in
            self?.detailSuccessChecker(viewModel: viewModel)
        }
        
        collectionViewModel?.listFetchAction()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        detailSuccessChecker(viewModel: collectionViewModel)
    }
    
    @IBAction func detailAppendAction(_ sender: UIBarButtonItem) {
        coordinator?.presentDetailListAdd(navigationController, viewModel: collectionViewModel)
    }
}

extension DetailListViewController {
    private func createLayout() -> UICollectionViewLayout {
        var config = UICollectionLayoutListConfiguration(appearance: .insetGrouped)
        config.headerMode = .supplementary
        config.trailingSwipeActionsConfigurationProvider = { [weak self] indexPath in
            let sectionIdentifier = self?.dataSource?.snapshot().sectionIdentifiers[indexPath.section].rawValue
            guard sectionIdentifier == "todo" else { return nil }
            
            let deleteAction = UIContextualAction(style: .destructive,
                                                  title: "Delete",
                                                  handler: { [weak self] _, _, _ in
                                                    self?.collectionViewModel?.listDeleteAction(at: indexPath.item)
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
    
    private func configureHierarchy() {
        collectionView.collectionViewLayout = createLayout()
        collectionView.delegate = self
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
        
        configureHeaderView()
    }
    
    private func configureHeaderView() {
        dataSource.supplementaryViewProvider = { [weak self]
            (collectionView, kind, indexPath) -> UICollectionReusableView? in
            let sectionIdentifier = self?.dataSource?.snapshot().sectionIdentifiers[indexPath.section].rawValue
            
            if kind == UICollectionView.elementKindSectionHeader {
                if sectionIdentifier == "done" {
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionHeaderView.description(), for: indexPath) as? DetailSectionHeaderView else {
                        return nil
                    }
                    headerView.titleLabel.text = sectionIdentifier
                    
                    headerView.successHandler = { [weak self] in
                        let alert = UIAlertController(title: "달성 여부",
                                                      message: "버킷을 달성처리 하시겠습니까? 달성 시, 달성 취소가 불가능 합니다.",
                                                      preferredStyle: .alert)
                        
                        let successAction = UIAlertAction(title: "예", style: .default, handler: { [weak self] _ in
                            // 소감 작성 페이지로
                            // todo 추가 불가능하게
                            // 소감 작성 완료 시 리로드 해줘야함 (소감 섹션, 그래프 섹션 추가)
                            // bucket으로 돌아갈 때, todo에서 done으로 바뀌어야함
                        })
                        let cancelAction = UIAlertAction(title: "아니오", style: .cancel)
                        alert.addAction(successAction)
                        alert.addAction(cancelAction)
                        
                        self?.present(alert, animated: false, completion: nil)
                    }
                    return headerView
                } else if  sectionIdentifier == "feel" {
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionImpressionHeaderView.description(), for: indexPath) as? DetailSectionImpressionHeaderView else {
                        return nil
                    }
                    return headerView
                } else {
                    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: DetailSectionHeaderTodoView.description(), for: indexPath) as? DetailSectionHeaderTodoView else {
                        return nil
                    }
                    headerView.titleLabel.text = sectionIdentifier
                    return headerView
                }
            }
            return nil
        }
        
        registerCollectionHeaderView()
    }
    
    private func registerCollectionHeaderView() {
        collectionView.register(UINib(nibName: "DetailSectionHeaderView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionHeaderView.description())
        collectionView.register(UINib(nibName: "DetailSectionImpressionHeaderView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionImpressionHeaderView.description())
        collectionView.register(UINib(nibName: "DetailSectionHeaderTodoView", bundle: nil),
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
                                withReuseIdentifier: DetailSectionHeaderTodoView.description())
    }
    
    private func updateList() {
        var snapshot = NSDiffableDataSourceSnapshot<Detail.Section, Detail>()
        var sections: [Detail.Section] = [.todo, .done]
        
        if bucket?.status == "A" {
            sections.insert(.feel, at: 0)
            sections.insert(.graph, at: 0)
            snapshot.appendSections(sections)
            snapshot.appendItems([], toSection: .graph)
            snapshot.appendItems([], toSection: .feel)
        } else {
            snapshot.appendSections(sections)
        }
        
        snapshot.appendItems(collectionViewModel?.list[.todo] ?? [], toSection: .todo)
        snapshot.appendItems(collectionViewModel?.list[.done] ?? [], toSection: .done)
        dataSource.apply(snapshot, animatingDifferences: false)
    }
    
    private func detailSuccessChecker(viewModel: DetailListViewModelProtocol?) {
        if viewModel?.list[.todo]?.count == 0,
           viewModel?.list[.done]?.count != 0 {
            isHiddenHeaderSuccessButton(status: false)
        } else {
            isHiddenHeaderSuccessButton(status: true)
        }
    }
    
    private func isHiddenHeaderSuccessButton(status: Bool) {
        let headerViews = collectionView.visibleSupplementaryViews(ofKind: UICollectionView.elementKindSectionHeader)
        let headerView = headerViews.filter { $0.isKind(of: DetailSectionHeaderView.self) }
            .map { $0 as? DetailSectionHeaderView }
            .filter { $0?.titleLabel.text == "done" }.first
        headerView??.successButton.isHidden = status
    }
}

extension DetailListViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let sectionIdentifier = self.dataSource?.snapshot().sectionIdentifiers[indexPath.section].rawValue
        if sectionIdentifier == "todo" && bucket?.status != "A" {
            coordinator?.presentDetailListAdd(navigationController,
                                              viewModel: collectionViewModel,
                                              detail: collectionViewModel?.list[.todo]?[indexPath.item],
                                              index: indexPath.item)
        }
    }
}
