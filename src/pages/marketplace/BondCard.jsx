import React from "react";
import { useNavigate } from "react-router-dom";

const BondCard = ({ bond }) => {
	const navigate = useNavigate();

	return (
		<div className="bg-white rounded-lg  overflow-hidden">
			<img
				src={bond.image}
				alt={bond.title}
				className="w-full h-40 object-cover"
			/>
			<div className="p-4">
				<h2 className="text-lg font-bold text-gray-800">{bond.title}</h2>
				<p className="text-sm text-gray-600 mb-2">
					<strong>Bond Value:</strong> ${bond.bondValue}
				</p>
				<p className="text-sm text-gray-600 mb-2">
					<strong>Highest Bid:</strong> ${bond.highestBid}
				</p>
				<p className="text-sm text-gray-600 mb-2">
					<strong>Expiry Date:</strong>{" "}
					{new Date(bond.expiryDate).toLocaleDateString()}
				</p>
				<button
					onClick={() => navigate(`/marketplace/${bond.id}`)}
					className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
				>
					View Details
				</button>
			</div>
		</div>
	);
};

export default BondCard;
