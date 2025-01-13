import { useState, useEffect } from 'react'


export default function PurchasedBonds() {
	const [purchasedBonds, setPurchasedBonds] = useState([])

	useEffect(() => {
		// Simulating fetching purchased bonds from an API or local storage
		const mockPurchasedBonds = [
			{ id: 1, name: 'Tech Review Video', issuer: 'TechGuru', purchaseDate: '2023-05-01', value: 100, status: 'active' },
			{ id: 2, name: 'Fitness Challenge', issuer: 'FitnessPro', purchaseDate: '2023-04-15', value: 50, status: 'completed' },
			{ id: 3, name: 'Cooking Tutorial', issuer: 'ChefMaster', purchaseDate: '2023-06-01', value: 75, status: 'active' },
		]
		setPurchasedBonds(mockPurchasedBonds)
	}, [])

	return (
		<div className="bg-white sm:rounded-lg">
			<div className="px-4 py-5 sm:p-6">
				<h2 className="text-lg font-medium leading-6 text-gray-900">Purchased Promise Bonds</h2>
				<div className="mt-5">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issuer</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Date</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{purchasedBonds.map((bond) => (
								<tr key={bond.id}>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bond.name}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.issuer}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bond.purchaseDate}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bond.value}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bond.status === 'active' ? 'bg-green-100 text-green-800' :
											bond.status === 'completed' ? 'bg-blue-100 text-blue-800' :
												'bg-red-100 text-red-800'
											}`}>
											{bond.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

