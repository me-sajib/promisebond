import React from "react";

export default function LatestBond() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-bold mb-8">Latest Promise Bonds</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{[
						{
							creator: "Gaming Channel",
							subscribers: "50K",
							price: "$300",
							promise: "1-minute promotion in future video",
							maturity: "12 months",
							rating: "4.8",
							reviews: "124",
							bonds: "30",
						},
						{
							creator: "Tech Reviewer",
							subscribers: "75K",
							price: "$500",
							promise: "Product showcase in review",
							maturity: "6 months",
							rating: "4.5",
							reviews: "87",
							bonds: "20",
						},
						{
							creator: "Lifestyle Vlogger",
							subscribers: "100K",
							price: "$750",
							promise: "Instagram story feature",
							maturity: "9 months",
							rating: "4.7",
							reviews: "76",
							bonds: "15",
						},
						{
							creator: "Education Guru",
							subscribers: "80K",
							price: "$1000",
							promise: "Free ebook on future course",
							maturity: "24 months",
							rating: "4.7",
							reviews: "76",
							bonds: "15",
						},
						{
							creator: "Finance Analyst",
							subscribers: "60K",
							price: "$1500",
							promise: "1-minute interview in future video",
							maturity: "18 months",
							rating: "4.6",
							reviews: "64",
							bonds: "10",
						},
						{
							creator: "Sports Coach",
							subscribers: "90K",
							price: "$2000",
							promise: "1-hour training session",
							maturity: "3 months",
							rating: "4.9",
							reviews: "98",
							bonds: "5",
						},
					].map((item) => (
						<div
							key={item.creator}
							className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
						>
							{/* Card Header with Image */}
							<div className="relative h-48 bg-gray-100">
								<img
									src="/api/placeholder/400/320"
									alt="Creator thumbnail"
									className="w-full h-full object-cover"
								/>
								<div className="absolute top-3 right-3">
									<div className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
										Featured
									</div>
								</div>
							</div>

							{/* Creator Info */}
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
										<img
											src="/api/placeholder/40/40"
											alt="Creator"
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">
											{item.creator}
										</h3>
										<p className="text-sm text-gray-500">
											{item.subscribers} Subscribers
										</p>
									</div>
								</div>

								{/* Bond Info */}
								<h2 className="text-lg font-bold text-gray-900 mb-2">
									{item.maturity} Bond
								</h2>
								<p className="text-sm text-gray-600 mb-4 line-clamp-2">
									{item.promise}
								</p>

								{/* Stats Row */}
								<div className="flex items-center justify-between pb-4 border-b border-gray-100">
									<div className="flex items-center gap-1">
										<div className="text-yellow-400">★</div>
										<span className="font-medium">{item.rating}</span>
										<span className="text-gray-400">({item.reviews})</span>
									</div>
									<div className="text-sm text-gray-500">
										{item.bonds} bonds available
									</div>
								</div>

								{/* Price Footer */}
								<div className="flex items-center justify-between pt-3">
									<div className="flex items-center gap-1">
										<span className="text-sm text-gray-500">Starting at</span>
										<span className="text-lg font-bold text-gray-900">
											{item.price}
										</span>
									</div>
									<button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
										View Bond
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
