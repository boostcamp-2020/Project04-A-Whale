//
//  BucketListSearchViewController.swift
//  project04
//
//  Created by jaejeon on 2020/12/03.
//

import UIKit

class BucketListSearchViewController: UITableViewController {
    private var searchController = UISearchController(searchResultsController: nil)
    private var viewModel: BucketListSearchViewModelProtocol
    private var didSelectRowHandler: (SearchBucket) -> Void
    
    init?(coder: NSCoder, viewModel: BucketListSearchViewModelProtocol, didSelectRowHandler: @escaping (SearchBucket) -> Void) {
        self.viewModel = viewModel
        self.viewModel.fetch()
        self.didSelectRowHandler = didSelectRowHandler
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureSearchController()
        viewModel.handler = { [weak self] in
            self?.tableView.reloadData()
        }
        viewModel.fetch()
    }
    
    func isFiltering() -> Bool {
        return searchController.isActive && !(searchController.searchBar.text?.isEmpty ?? true)
    }
}

private extension BucketListSearchViewController {
    func configureSearchController() {
        navigationItem.hidesSearchBarWhenScrolling = false
        searchController.searchResultsUpdater = self
        searchController.obscuresBackgroundDuringPresentation = false
        searchController.searchBar.placeholder = "목표를 검색해주세요"
        navigationItem.searchController = searchController
        definesPresentationContext = true
    }
}

extension BucketListSearchViewController: UISearchResultsUpdating {
    func updateSearchResults(for searchController: UISearchController) {
        viewModel.search(with: searchController.searchBar.text!)
        tableView.reloadData()
    }
}

extension BucketListSearchViewController {
    override func numberOfSections(in tableView: UITableView) -> Int {
        1
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if isFiltering() {
            return viewModel.filteredCount
        }
        return viewModel.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        
        let item: SearchBucket
        if isFiltering() {
            item = viewModel.filteredBuckets[indexPath.row]
        } else {
            item = viewModel.buckets[indexPath.row]
        }
        
        let fontSize = UIFont.boldSystemFont(ofSize: 12)
        let text = "\(item.title)    @\(item.nickname)"
        let range = (text as NSString).range(of: "@\(item.nickname)")
        let attributedStr = NSMutableAttributedString(string: text)
        attributedStr.addAttribute(NSAttributedString.Key(rawValue: kCTFontAttributeName as String), value: fontSize, range: range)
        attributedStr.addAttribute(NSAttributedString.Key.foregroundColor, value: UIColor.secondaryLabel, range: range)
        cell.textLabel?.attributedText = attributedStr
        cell.detailTextLabel?.text = item.bucketDescription
        
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let item: SearchBucket
        if isFiltering() {
            item = viewModel.filteredBuckets[indexPath.row]
        } else {
            item = viewModel.buckets[indexPath.row]
        }
        didSelectRowHandler(item)
        navigationController?.popViewController(animated: true)
    }
}
