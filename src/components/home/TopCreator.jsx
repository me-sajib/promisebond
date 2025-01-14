import { Star } from "lucide-react";
import React from "react";

export default function TopCreator() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-bold mb-8 text-center">Recommended Issuers</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{[1, 2, 3, 4].map((creator) => (
						<div
							key={creator}
							className="bg-white cursor-pointer group hover:bg-primary-500 hover:text-white rounded-xl shadow-sm p-6 text-center border border-primary-500"
						>
							<div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
							<h3 className="font-semibold mb-2">Creator Name</h3>
							<p className="text-sm text-gray-600 mb-4">
								Gaming & Entertainment
							</p>
							<div className="flex justify-center gap-1 mb-4">
								{[1, 2, 3, 4, 5].map((star) => (
									<Star
										key={star}
										className="w-4 h-4 text-yellow-400 fill-current"
									/>
								))}
							</div>
							<button className="w-full group-hover:bg-white px-4 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50">
								View Profile
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
