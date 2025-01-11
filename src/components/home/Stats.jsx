import React from "react";

export default function Stats() {
	return (
		<section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="text-center">
						<div className="text-4xl font-bold mb-2">4.9/5</div>
						<p>Average Creator Rating</p>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold mb-2">98%</div>
						<p>Promise Fulfillment Rate</p>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold mb-2">10K+</div>
						<p>Active Creators</p>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold mb-2">$2M+</div>
						<p>Trading Volume</p>
					</div>
				</div>
			</div>
		</section>
	);
}
