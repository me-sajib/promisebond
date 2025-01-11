import React from "react";

export default function Story() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-12 text-center">
					Success Stories
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-4xl mx-auto">
					<div className="bg-primary-500 p-6 rounded-lg ">
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
							<div className="ml-4">
								<h3 className="font-semibold text-white">Gaming Creator</h3>
								<p className="text-sm text-white">
									Raised $3,000 through promise bonds
								</p>
							</div>
						</div>
						<p className="text-white">
							Promise bonds helped me monetize my future growth. I used the
							funds to upgrade my setup and grow my channel faster.
						</p>
					</div>
					<div className="bg-primary-500 p-6 rounded-lg">
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
							<div className="ml-4">
								<h3 className="font-semibold text-white">Bond Investor</h3>
								<p className="text-sm text-white">200% return on investment</p>
							</div>
						</div>
						<p className="text-white">
							I bought bonds from rising creators and sold them when their
							channels grew. The platform made trading easy and secure.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
