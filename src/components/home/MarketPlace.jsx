import React, { useState } from "react";
import { Link } from "react-router-dom";

// Demo data for promise bonds
const bondsData = [
	{
		id: 1,
		title: "1-Minute Product Feature in Tech Review (100k+ Views)",
		description: "Feature your product in my weekly tech review with 100k+ views.",
		bondValue: 300,
		highestBid: 350,
		bids: 10,
		image: "https://placehold.co/600x400",
		expiryDate: "2025-12-31",
	},
	{
		id: 2,
		title: "Gaming Stream Integration (50k Live Viewers)",
		description: "Product showcase during peak gaming hours with active engagement.",
		bondValue: 500,
		highestBid: 600,
		bids: 15,
		image: "https://placehold.co/600x400",
		expiryDate: "2025-11-30",
	},
	{
		id: 3,
		title: "Instagram Story Promotion (300k+ Followers)",
		description: "Promote your product through my Instagram stories.",
		bondValue: 400,
		highestBid: 450,
		bids: 8,
		image: "https://placehold.co/600x400",
		expiryDate: "2026-01-31",
	},
];

const Marketplace = () => {
	const [bonds, setBonds] = useState(bondsData);
	const [searchTerm, setSearchTerm] = useState("");

	// Filter bonds by search term
	const filteredBonds = bonds.filter((bond) =>
		bond.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="max-w-7xl mx-auto px-4">
				<h1 className="text-2xl font-bold text-gray-800 mb-6">Marketplace</h1>

				{/* Search Bar */}
				<div className="mb-8">
					<input
						type="text"
						placeholder="Search bonds..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
					/>
				</div>

				{/* Bond Listings */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{filteredBonds.map((bond) => (
						<Link
							to={"/marketplace/" + bond.id}
							key={bond.id}
							className="bg-white rounded-lg shadow-md overflow-hidden"
						>
							{/* Image */}
							<img
								src={bond.image}
								alt={bond.title}
								className="w-full h-40 object-cover"
							/>

							{/* Bond Details */}
							<div className="p-4">
								<h2 className="text-lg font-bold text-gray-800 mb-2">
									{bond.title}
								</h2>
								<p className="text-gray-600 text-sm mb-4">{bond.description}</p>

								<div className="flex justify-between items-center text-sm mb-4">
									<div>
										<p>
											<strong>Bond Value:</strong> ${bond.bondValue}
										</p>
										<p>
											<strong>Highest Bid:</strong> ${bond.highestBid}
										</p>
										<p>
											<strong>Bids:</strong> {bond.bids}
										</p>
									</div>
									<div>
										<p>
											<strong>Expiry:</strong>{" "}
											{new Date(bond.expiryDate).toLocaleDateString()}
										</p>
									</div>
								</div>

								{/* Buy Now Button */}
								<button className="w-full bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition">
									View Details
								</button>
							</div>
						</Link>
					))}
				</div>

				{/* No Bonds Found */}
				{filteredBonds.length === 0 && (
					<div className="text-center text-gray-600 mt-8">
						No bonds found matching your search.
					</div>
				)}
			</div>
		</div>
	);
};

export default Marketplace;
