import React, { useState } from "react";
import { useParams } from "react-router-dom";

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

const MarketplaceDetails = () => {
	const { id } = useParams();
	const bond = bondsData.find((bond) => bond.id === parseInt(id));
	const [paymentMethod, setPaymentMethod] = useState("");
	const [isPaymentComplete, setIsPaymentComplete] = useState(false);

	if (!bond) {
		return <div>Bond not found</div>;
	}

	const handlePayment = () => {
		if (!paymentMethod) {
			alert("Please select a payment method!");
			return;
		}

		// Mock payment process
		setTimeout(() => {
			alert("Payment Successful!");
			setIsPaymentComplete(true);
		}, 2000);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="max-w-7xl mx-auto px-4">
				<h1 className="text-2xl font-bold text-gray-800 mb-6">{bond.title}</h1>
				<img
					src={bond.image}
					alt={bond.title}
					className="w-full h-60 object-cover rounded-lg mb-6"
				/>
				<p className="text-gray-600 text-lg mb-4">{bond.description}</p>
				<div className="mb-6">
					<p>
						<strong>Bond Value:</strong> ${bond.bondValue}
					</p>
					<p>
						<strong>Highest Bid:</strong> ${bond.highestBid}
					</p>
					<p>
						<strong>Bids:</strong> {bond.bids}
					</p>
					<p>
						<strong>Expiry Date:</strong>{" "}
						{new Date(bond.expiryDate).toLocaleDateString()}
					</p>
				</div>

				{/* Payment Options */}
				{!isPaymentComplete ? (
					<>
						<h2 className="text-lg font-bold text-gray-800 mb-4">
							Select Payment Method
						</h2>
						<div className="flex gap-4 mb-6">
							<button
								className={`border px-4 py-2 rounded-lg flex-1 ${paymentMethod === "stripe"
									? "bg-blue-100 border-blue-500"
									: "border-gray-300"
									}`}
								onClick={() => setPaymentMethod("stripe")}
							>
								Pay with Stripe
							</button>
							<button
								className={`border px-4 py-2 rounded-lg flex-1 ${paymentMethod === "paypal"
									? "bg-yellow-100 border-yellow-500"
									: "border-gray-300"
									}`}
								onClick={() => setPaymentMethod("paypal")}
							>
								Pay with PayPal
							</button>
						</div>

						{/* Proceed to Payment */}
						<button
							onClick={handlePayment}
							className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600"
						>
							Confirm Purchase
						</button>
					</>
				) : (
					<div className="bg-green-100 border border-green-500 text-green-800 p-4 rounded-lg">
						Payment successful! You have purchased the bond.
					</div>
				)}
			</div>
		</div>
	);
};

export default MarketplaceDetails;
