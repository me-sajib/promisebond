import React from "react";
import { ArrowRight, Shield, Wallet, Star, BarChart } from "lucide-react";

export default function HowItWorks() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="bg-[#1dbf73] text-white py-20">
				<div className="max-w-7xl mx-auto px-4">
					<h1 className="text-4xl font-bold mb-6">How Promise Bonds Work</h1>
					<p className="text-xl">
						A simple way to tokenize and trade future promises
					</p>
				</div>
			</div>

			{/* Steps Section */}
			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="grid md:grid-cols-2 gap-12">
					<div className="space-y-6">
						<div className="flex gap-4 items-start">
							<div className="bg-primary-100 p-3 rounded-lg">
								<Shield className="h-6 w-6 text-primary-500" />
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									1. Create Your Promise Bond
								</h3>
								<p className="text-gray-600">
									Define your promise, set its value, and specify the
									fulfillment date. Each bond represents a future commitment.
								</p>
							</div>
						</div>

						<div className="flex gap-4 items-start">
							<div className="bg-primary-100 p-3 rounded-lg">
								<Wallet className="h-6 w-6 text-primary-500" />
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									2. Issue Your Bonds
								</h3>
								<p className="text-gray-600">
									List your bonds on our marketplace. Buyers can purchase them
									based on their trust in your future delivery.
								</p>
							</div>
						</div>

						<div className="flex gap-4 items-start">
							<div className="bg-primary-100 p-3 rounded-lg">
								<BarChart className="h-6 w-6 text-primary-500" />
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									3. Trade and Track
								</h3>
								<p className="text-gray-600">
									Bonds can be traded on the secondary market. Track their value
									and manage your portfolio.
								</p>
							</div>
						</div>

						<div className="flex gap-4 items-start">
							<div className="bg-primary-100 p-3 rounded-lg">
								<Star className="h-6 w-6 text-primary-500" />
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									4. Fulfill and Build Trust
								</h3>
								<p className="text-gray-600">
									Deliver on your promises to build your reputation and unlock
									more opportunities.
								</p>
							</div>
						</div>
					</div>

					{/* Example Bond Card */}
					<div className="bg-white p-8 rounded-xl shadow-sm">
						<h3 className="text-xl font-semibold mb-4">Example Promise Bond</h3>
						<div className="space-y-4">
							<div className="border-b pb-4">
								<p className="text-sm text-gray-500">Issuer</p>
								<p className="font-medium">YouTuber Promotion Bond</p>
							</div>
							<div className="border-b pb-4">
								<p className="text-sm text-gray-500">Promise</p>
								<p className="font-medium">
									1-minute promotion in future video
								</p>
							</div>
							<div className="border-b pb-4">
								<p className="text-sm text-gray-500">Value</p>
								<p className="font-medium">$300</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Fulfillment Period</p>
								<p className="font-medium">Within 12 months</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
