import React, { useState } from 'react';
import { Heart, Star, Clock, Calendar, Share2, ShieldCheck, AlertCircle } from 'lucide-react';

const BondDetails = () => {
	const [selectedPayment, setSelectedPayment] = useState('stripe');

	const bondDetails = {
		id: 1,
		title: 'Promise to deliver a 10-minute tech review video with 100k+ views',
		description: 'I promise to create and publish a detailed 10-minute tech review video on my channel which currently has 50,000 subscribers growing by 1,000 per week. The video will be published when my channel reaches 100,000 subscribers, estimated in 12 months. This bond represents a guaranteed spot in that future video.',
		features: [
			'Expected to grow to over 300K followers within a year.',
			'Current market rate for a single promotional post by a 300K fitness influencer is $500.',
		],
		maturityDate: '2027-01-15',
		price: 500,
		image: 'https://placehold.co/600x400',
		socialMedia: {
			platform: 'Instagram',
			channelName: "Tommy's Health Training Course",
			country: 'USA',
		},
		liabilityAgreement: true,
		quantity: 3,
		issuer: {
			name: 'Thomas Lee',
			profileImage: 'https://placehold.co/50x50',
			currentSubscribers: 50000,
			weeklyGrowth: 1000,
			avgViews: 75000,
			completedPromises: 15,
			reviews: 120,
			rating: 4.9,
		},
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-8">
				<div className="col-span-12 lg:col-span-8">
					<div className="bg-white rounded-lg shadow-sm mb-8">
						<div className="relative">
							<img
								src={bondDetails.image}
								alt={bondDetails.title}
								className="w-full rounded-t-lg aspect-video object-cover"
							/>
							<button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
								<Heart className="w-5 h-5 text-gray-600" />
							</button>
						</div>
						<div className="p-6">
							<h1 className="text-2xl font-bold text-gray-900 mb-4">{bondDetails.title}</h1>
							<p className="text-gray-600 mb-6">{bondDetails.description}</p>
							<div className="flex items-center gap-4 mb-6">
								<img
									src={bondDetails.issuer.profileImage}
									alt={bondDetails.issuer.name}
									className="w-12 h-12 rounded-full"
								/>
								<div>
									<h3 className="font-medium text-gray-900">{bondDetails.issuer.name}</h3>
									<p className="text-sm text-gray-600">
										{bondDetails.issuer.currentSubscribers.toLocaleString()} Subscribers
									</p>
								</div>
							</div>
							<div className="flex items-center gap-6 text-sm">
								<div className="flex items-center gap-1">
									<Star className="w-4 h-4 text-yellow-400 fill-current" />
									<span className="font-medium">{bondDetails.issuer.rating}</span>
									<span className="text-gray-600">({bondDetails.issuer.completedPromises} promises kept)</span>
								</div>
								<div className="flex items-center gap-1 text-gray-600">
									<Clock className="w-4 h-4" />
									<span>Maturity Date: {new Date(bondDetails.maturityDate).toLocaleDateString()}</span>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
						<h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
						<ul className="list-disc pl-6 space-y-2">
							{bondDetails.features.map((feature, index) => (
								<li key={index} className="text-sm text-gray-600">
									{feature}
								</li>
							))}
						</ul>
					</div>

					<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
						<h2 className="text-xl font-bold text-gray-900 mb-4">Social Media Details</h2>
						<ul className="space-y-2">
							<li className="text-sm text-gray-600">
								<strong>Platform:</strong> {bondDetails.socialMedia.platform}
							</li>
							<li className="text-sm text-gray-600">
								<strong>Channel Name:</strong> {bondDetails.socialMedia.channelName}
							</li>
							<li className="text-sm text-gray-600">
								<strong>Country:</strong> {bondDetails.socialMedia.country}
							</li>
						</ul>
					</div>

					<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
						<h2 className="text-xl font-bold text-gray-900 mb-4">Bond Metrics</h2>
						<ul className="space-y-2">
							<li className="text-sm text-gray-600">
								<strong>Maturity Date:</strong> {new Date(bondDetails.maturityDate).toLocaleDateString()}
							</li>
							<li className="text-sm text-gray-600">
								<strong>Price:</strong> ${bondDetails.price}
							</li>
							<li className="text-sm text-gray-600">
								<strong>Quantity Issued:</strong> {bondDetails.quantity}
							</li>
							<li className="text-sm text-gray-600">
								<strong>Liability Agreement:</strong> {bondDetails.liabilityAgreement ? 'Checked' : 'Not Checked'}
							</li>
						</ul>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
						<h2 className="text-xl font-bold text-gray-900 mb-6">Invest in This Promise</h2>
						<div className="mb-6">
							<p className="text-sm font-medium text-gray-700 mb-3">Select Payment Method</p>
							<div className="space-y-3">
								<button
									onClick={() => setSelectedPayment('stripe')}
									className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${selectedPayment === 'stripe'
										? 'border-blue-600 bg-blue-50'
										: 'border-gray-200'
										}`}
								>
									<img
										src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png"
										alt="Stripe"
										className="w-6 h-6"
									/>
									<span className="font-medium">Pay with Card</span>
								</button>
								<button
									onClick={() => setSelectedPayment('paypal')}
									className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${selectedPayment === 'paypal'
										? 'border-primary-500 bg-blue-50'
										: 'border-gray-200'
										}`}
								>
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1f7ohLwTdmYAmVn4dKE3sDswwgOtyCmyXw&s"
										alt="PayPal"
										className="w-6 h-6"
									/>
									<span className="font-medium">PayPal</span>
								</button>
							</div>
						</div>
						<div className="border-t border-gray-200 py-4 mb-2">
							<div className="flex justify-between mb-3">
								<span className="text-gray-600">Total Price</span>
								<span className="font-medium">${bondDetails.price}</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600 text-[13px]">10% of Promise Bond Price</span>
							</div>
						</div>
						<button className="w-full bg-primary-500 text-white py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors mb-4">
							Purchase Bond
						</button>
						<div className="flex items-center gap-2 text-sm text-gray-600">
							<ShieldCheck className="w-4 h-4" />
							<span>Secure investment powered by Stripe</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BondDetails;
