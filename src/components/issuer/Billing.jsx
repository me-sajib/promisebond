import { useState, useEffect } from 'react'

export default function Billing() {
	const [transactions, setTransactions] = useState([])

	useEffect(() => {
		// Simulating fetching transactions from an API
		const mockTransactions = [
			{ id: 1, date: '2023-05-01', amount: 100, description: 'Bond issuance fee' },
			{ id: 2, date: '2023-05-15', amount: 50, description: 'Platform subscription' },
			{ id: 3, date: '2023-06-01', amount: 200, description: 'Bond issuance fee' },
		]
		setTransactions(mockTransactions)
	}, [])

	return (
		<div className="bg-white sm:rounded-lg">
			<div className="px-4 py-5 sm:p-6">
				<h2 className="text-lg font-medium leading-6 text-gray-900">Billing & Payments</h2>
				<div className="mt-5">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{transactions.map((transaction) => (
								<tr key={transaction.id}>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${transaction.amount}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.description}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

