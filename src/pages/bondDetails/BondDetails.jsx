import React, { useState } from 'react';
import { Heart, Star, Clock, User, Share2, Flag, ChevronDown, ShieldCheck, AlertCircle } from 'lucide-react';

const BondDetails = () => {
	const [selectedTab, setSelectedTab] = useState('basic');
	const [selectedPayment, setSelectedPayment] = useState('stripe');

	const bondDetails = {
		id: 1,
		image: '/placeholder.svg?height=400&width=600',
		title: 'I will create a custom tech review video',
		creator: 'TechGuru',
		subscribers: 10000,
		rating: 4.9,
		reviews: 120,
		deliveryTime: '3 days',
		startingPrice: 50,
		description: 'I will create a professional, in-depth tech review video for your product. This includes detailed analysis, high-quality production, and engaging content tailored to your target audience.',
		aboutCreator: 'Tech enthusiast with 5+ years of experience in creating engaging tech review content. Known for honest, detailed reviews and high production quality.',
	};

	const packages = [
		{
			id: 'basic',
			name: 'Basic',
			price: 50,
			delivery: '3 days',
			features: [
				'5-minute video review',
				'Basic editing',
				'1 revision round',
				'Script review',
			]
		},
		{
			id: 'standard',
			name: 'Standard',
			price: 100,
			delivery: '5 days',
			features: [
				'10-minute video review',
				'Advanced editing',
				'2 revision rounds',
				'Script review',
				'Custom thumbnails',
				'Raw footage included'
			]
		},
		{
			id: 'premium',
			name: 'Premium',
			price: 200,
			delivery: '7 days',
			features: [
				'15-minute video review',
				'Premium editing',
				'Unlimited revisions',
				'Script review',
				'Custom thumbnails',
				'Raw footage included',
				'Social media clips',
				'Priority support'
			]
		}
	];

	return (
		<div className="min-h-screen bg-gray-50">

			<div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-8">
				{/* Main Content */}
				<div className="col-span-12 lg:col-span-8">
					{/* Image and Basic Info */}
					<div className="bg-white rounded-lg shadow-sm mb-8">
						<div className="relative">
							<img
								src="https://placehold.co/600x400"
								alt={bondDetails.title}
								className="w-full rounded-t-lg aspect-video object-cover"
							/>
							<button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
								<Heart className="w-5 h-5 text-gray-600" />
							</button>
						</div>

						<div className="p-6">
							<h1 className="text-2xl font-bold text-gray-900 mb-4">
								{bondDetails.title}
							</h1>

							<div className="flex items-center gap-4 mb-6">
								<img
									src="https://placehold.co/50x50"
									alt={bondDetails.creator}
									className="w-12 h-12 rounded-full"
								/>
								<div>
									<h3 className="font-medium text-gray-900">{bondDetails.creator}</h3>
									<p className="text-sm text-gray-600">
										{bondDetails.subscribers.toLocaleString()} Subscribers
									</p>
								</div>
							</div>

							<div className="flex items-center gap-6 text-sm">
								<div className="flex items-center gap-1">
									<Star className="w-4 h-4 text-yellow-400 fill-current" />
									<span className="font-medium">{bondDetails.rating}</span>
									<span className="text-gray-600">({bondDetails.reviews})</span>
								</div>
								<div className="flex items-center gap-1 text-gray-600">
									<Clock className="w-4 h-4" />
									<span>{bondDetails.deliveryTime} delivery</span>
								</div>
							</div>
						</div>
					</div>

					{/* Package Selection */}
					<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
						<h2 className="text-xl font-bold text-gray-900 mb-6">Select Package</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{packages.map((pkg) => (
								<button
									key={pkg.id}
									onClick={() => setSelectedTab(pkg.id)}
									className={`p-6 rounded-lg border-2 text-left transition-all ${selectedTab === pkg.id
										? 'border-blue-600 bg-blue-50'
										: 'border-gray-200 hover:border-gray-300'
										}`}
								>
									<h3 className="font-bold text-gray-900 mb-2">{pkg.name}</h3>
									<p className="text-2xl font-bold text-gray-900 mb-4">
										${pkg.price}
									</p>
									<p className="text-sm text-gray-600 mb-4">
										{pkg.delivery} delivery
									</p>
									<ul className="space-y-2">
										{pkg.features.map((feature, index) => (
											<li key={index} className="text-sm text-gray-600 flex items-center gap-2">
												<span className="w-1 h-1 bg-gray-600 rounded-full" />
												{feature}
											</li>
										))}
									</ul>
								</button>
							))}
						</div>
					</div>

					{/* Description */}
					<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
						<h2 className="text-xl font-bold text-gray-900 mb-4">About This Bond</h2>
						<p className="text-gray-600 leading-relaxed">
							{bondDetails.description}
						</p>
					</div>

					{/* About Creator */}
					<div className="bg-white rounded-lg shadow-sm p-6">
						<h2 className="text-xl font-bold text-gray-900 mb-4">About The Creator</h2>
						<p className="text-gray-600 leading-relaxed">
							{bondDetails.aboutCreator}
						</p>
					</div>
				</div>

				{/* Payment Sidebar */}
				<div className="col-span-12 lg:col-span-4">
					<div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
						<h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>

						{/* Payment Method Selection */}
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
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6iiXu6icn9rEYWxaOIquf2WGNZn5lTigdQ&s"
										alt="Stripe"
										className="w-6 h-6"
									/>
									<span className="font-medium">Pay with Card</span>
								</button>

								<button
									onClick={() => setSelectedPayment('paypal')}
									className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${selectedPayment === 'paypal'
										? 'border-blue-600 bg-blue-50'
										: 'border-gray-200'
										}`}
								>
									<img
										src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
										alt="PayPal"
										className="w-6 h-6"
									/>
									<span className="font-medium">PayPal</span>
								</button>
							</div>
						</div>

						{/* Payment Summary */}
						<div className="border-t border-gray-200 py-4 mb-6">
							<div className="flex justify-between mb-2">
								<span className="text-gray-600">Package Price</span>
								<span className="font-medium">
									${packages.find(p => p.id === selectedTab)?.price}
								</span>
							</div>
							<div className="flex justify-between mb-2">
								<span className="text-gray-600">Service Fee</span>
								<span className="font-medium">$5</span>
							</div>
							<div className="flex justify-between font-bold text-lg">
								<span>Total</span>
								<span>${(packages.find(p => p.id === selectedTab)?.price || 0) + 5}</span>
							</div>
						</div>

						{/* Purchase Button */}
						<button className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4">
							Continue to Payment
						</button>

						{/* Security Notice */}
						<div className="flex items-center gap-2 text-sm text-gray-600">
							<ShieldCheck className="w-4 h-4" />
							<span>Secure payment powered by Stripe</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BondDetails;