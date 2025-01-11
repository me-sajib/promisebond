import React from "react";

export default function ReadyToStart() {
	return (
		<section className="py-16 bg-purple-600 text-white">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
				<p className="text-xl mb-8 max-w-2xl mx-auto">
					Join the future of content creator financing. Issue or invest in
					promise bonds today.
				</p>
				<div className="flex justify-center gap-4">
					<button className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100">
						Create Account
					</button>
					<button className="px-6 py-3 border border-white rounded-lg hover:bg-purple-700">
						Learn More
					</button>
				</div>
			</div>
		</section>
	);
}
