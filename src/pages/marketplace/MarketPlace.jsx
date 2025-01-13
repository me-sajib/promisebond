import React, { useState } from "react";
import BondCard from "./BondCard";

const Marketplace = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filter, setFilter] = useState("");

	const bonds = [
		{
			id: 1,
			title: "Tech Review Video (100k+ Views)",
			bondValue: 300,
			highestBid: 350,
			bids: 10,
			expiryDate: "2025-12-31",
			image: "https://placehold.co/600x400",
		},
		{
			id: 2,
			title: "Gaming Stream (50k+ Viewers)",
			bondValue: 500,
			highestBid: 600,
			bids: 15,
			expiryDate: "2025-11-30",
			image: "https://placehold.co/600x400",
		},
		{
			id: 3,
			title: "Instagram Story Promotion",
			bondValue: 400,
			highestBid: 450,
			bids: 8,
			expiryDate: "2026-01-31",
			image: "https://placehold.co/600x400",
		},
	];

	const filteredBonds = bonds.filter((bond) =>
		bond.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="max-w-7xl mx-auto px-4">
				<h1 className="text-2xl font-bold text-gray-800 mb-6">Marketplace</h1>

				<div className="flex flex-wrap gap-4 mb-6">
					<input
						type="text"
						placeholder="Search bonds..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
					/>
					<select
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
					>
						<option value="">All</option>
						<option value="tech">Tech</option>
						<option value="gaming">Gaming</option>
					</select>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredBonds.map((bond) => (
						<BondCard key={bond.id} bond={bond} />
					))}
				</div>

				{filteredBonds.length === 0 && (
					<p className="text-gray-600 mt-8 text-center">No bonds found</p>
				)}
			</div>
		</div>
	);
};

export default Marketplace;
