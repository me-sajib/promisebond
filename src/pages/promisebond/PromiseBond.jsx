// pages/bonds/index.js
import { useState } from 'react';

const PromiseBondsList = () => {
	// Sample data for promise bonds
	const bonds = [
		{ id: 1, issuer: 'John Doe', description: '1-minute promo video', price: 300, popularity: 5 },
		{ id: 2, issuer: 'Jane Smith', description: 'Product placement', price: 450, popularity: 4 },
		{ id: 3, issuer: 'Emily Clark', description: 'Brand mention', price: 200, popularity: 3 },
		{ id: 4, issuer: 'Chris Adams', description: 'Custom endorsement', price: 500, popularity: 5 },
	];

	const [searchQuery, setSearchQuery] = useState('');

	// Filter bonds based on the search query
	const filteredBonds = bonds.filter((bond) =>
		bond.issuer.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-3xl font-bold text-center mb-6">Promise Bonds List</h1>

			{/* Search Bar */}
			<div className="max-w-3xl mx-auto mb-6">
				<input
					type="text"
					className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
					placeholder="Search for an issuer..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>

			{/* Bonds List */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredBonds.map((bond) => (
					<div
						key={bond.id}
						className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
					>
						<h2 className="text-xl font-semibold mb-2">Issuer: {bond.issuer}</h2>
						<p className="text-gray-700 mb-2">{bond.description}</p>
						<p className="text-gray-800 font-bold mb-2">Price: ${bond.price}</p>
						<p className="text-yellow-500 font-medium">Popularity: {bond.popularity}⭐</p>
						<button
							className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
						>
							View Details
						</button>
					</div>
				))}

				{filteredBonds.length === 0 && (
					<p className="col-span-full text-center text-gray-500">No issuers found.</p>
				)}
			</div>
		</div>
	);
};

export default PromiseBondsList;
