//
//  BucketListSearchViewController.swift
//  project04
//
//  Created by jaejeon on 2020/12/03.
//

import UIKit

class BucketListSearchViewController: UITableViewController {
    var searchController = UISearchController(searchResultsController: nil)
    
    var viewModel: BucketListSearchViewModelProtocol {
        didSet {
            viewModel.handler = {
                self.tableView.reloadData()
            }
        }
    }
    
    init?(coder: NSCoder, viewModel: BucketListSearchViewModelProtocol) {
        self.viewModel = viewModel
        viewModel.fetch()
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureSearchController()
    }
    
    func isFiltering() -> Bool {
        return searchController.isActive && !(searchController.searchBar.text?.isEmpty ?? true)
    }
}

extension BucketListSearchViewController: UISearchResultsUpdating {
    func updateSearchResults(for searchController: UISearchController) {
        viewModel.search(with: searchController.searchBar.text!)
        tableView.reloadData()
    }
    
    func configureSearchController() {
        navigationItem.hidesSearchBarWhenScrolling = false
        searchController.searchResultsUpdater = self
        searchController.obscuresBackgroundDuringPresentation = false
        searchController.searchBar.placeholder = "목표를 검색해주세요"
        navigationItem.searchController = searchController
        definesPresentationContext = true
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
        
        let item: Bucket
        if isFiltering() {
            item = viewModel.filteredBuckets[indexPath.row]
        } else {
            item = viewModel.buckets[indexPath.row]
        }
        cell.textLabel?.text = item.title
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
    }
}
