import React from "react";
import { TrendingUp, Shield, Users, Search, Star, Clock } from "lucide-react";

export default function Categories() {
	return (
		<section className=" py-5">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
					{[
						{ icon: <Star />, label: "Gaming" },
						{ icon: <Users />, label: "Tech Reviews" },
						{ icon: <Shield />, label: "Lifestyle" },
						{ icon: <Clock />, label: "Education" },
						{ icon: <TrendingUp />, label: "Finance" },
						{ icon: <Search />, label: "Sports" },
						{ icon: <Star />, label: "Music" },
						{ icon: <Users />, label: "Art" },
					].map((category) => (
						<div
							key={category.label}
							className="p-4 bg-white rounded-xl shadow-md transition-shadow cursor-pointer hover:bg-gray-100"
						>
							<div className="w-10 h-10 mb-2 mx-auto lg:mx-0 flex justify-center lg:justify-start">
								{category.icon}
							</div>
							<p className="text-sm text-center lg:text-left font-bold">
								{category.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
