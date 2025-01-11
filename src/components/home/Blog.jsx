import React from "react";

export default function Blog() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-bold mb-8">Latest Updates</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{[1, 2, 3, 4].map((post) => (
						<div
							key={post}
							className="bg-white rounded-xl shadow-sm overflow-hidden"
						>
							<div className="h-48 bg-gray-200"></div>
							<div className="p-6">
								<h3 className="font-semibold mb-2">
									How Promise Bonds are Changing Creator Economics
								</h3>
								<p className="text-sm text-gray-600 mb-4">
									Learn how creators are using promise bonds to fund their
									growth...
								</p>
								<button className="text-indigo-600 hover:text-indigo-800 text-sm">
									Read More →
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
