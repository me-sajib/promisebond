import { TrendingUp } from "lucide-react";
import React from "react";

export default function PopularBond() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl font-bold">Popular Promises</h2>
					<button className="text-indigo-600 hover:text-indigo-800">
						View all
					</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[
						{
							title: "Video Promotions",
							price: "From $300",
							duration: "3-12 months",
						},
						{
							title: "Live Stream Features",
							price: "From $500",
							duration: "1-6 months",
						},
						{
							title: "Social Media Posts",
							price: "From $200",
							duration: "1-3 months",
						},
						{
							title: "Collaboration Videos",
							price: "From $1000",
							duration: "6-12 months",
						},
					].map((item) => (
						<div
							key={item.title}
							className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
						>
							<div className="w-12 h-12 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
								<TrendingUp className="w-6 h-6 text-indigo-600" />
							</div>
							<h3 className="font-semibold mb-2">{item.title}</h3>
							<p className="text-sm text-gray-600 mb-1">{item.price}</p>
							<p className="text-sm text-gray-600">{item.duration}</p>
							<button className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm">
								Learn more →
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
