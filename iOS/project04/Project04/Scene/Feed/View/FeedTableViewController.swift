//
//  FeedTableViewController.swift
//  project04
//
//  Created by jaejeon on 2020/12/15.
//

import UIKit

class FeedTableViewController: UITableViewController {
    private var viewModel: FeedViewModelProtocol
    
    init?(coder: NSCoder, viewModel: FeedViewModelProtocol) {
        self.viewModel = viewModel
        super.init(coder: coder)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        viewModel.completion = { [weak self] in
            DispatchQueue.main.async {
                self?.tableView.reloadData()
            }
        }
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        viewModel.fetch()
        checkTokenExpired()
    }

    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return viewModel.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "FeedCell", for: indexPath) as? FeedTableViewCell else {
            return UITableViewCell()
        }
        let feed = viewModel.item(forAt: indexPath)
        cell.configure(with: feed)

        return cell
    }

}
