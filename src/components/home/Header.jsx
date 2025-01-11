import React from "react";

export default function Header() {
	return (
		<header className="relative w-full h-[600px]">
			<img
				src="/bond-hero.svg"
				alt="Promise Bond Platform"
				className="w-full h-full object-cover"
			/>
			{/* <div className="container mx-auto px-4 absolute inset-0 flex items-center justify-center">
				<div className="max-w-3xl">
					<h1 className="text-5xl font-bold mb-6 text-white">
						Trade creator promises with confidence
					</h1>
					<p className="text-xl text-white mb-8">
						Invest in content creators future commitments or raise funds by
						issuing promise bonds
					</p>
					<div className="bg-white rounded-xl shadow-lg p-6 flex gap-4">
						<input
							type="text"
							placeholder="Search by creator or promise type..."
							className="flex-1 p-3 border rounded-lg"
						/>
						<button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
							Search
						</button>
					</div>
				</div>
			</div> */}
			<div className="container mx-auto px-4 absolute inset-0 flex flex-col items-center justify-center text-white">
				<h1 className="text-4xl font-bold mb-6">
					Turn Future Content into Current Value
				</h1>
				<p className="text-xl mb-8 max-w-2xl mx-auto">
					Create and trade promise bonds for content creators. Monetize your
					future influence while giving investors new opportunities.
				</p>
				<div className="flex justify-center gap-4">
					<button className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100">
						Issue Promise Bond
					</button>
					<button className="px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-primary-400">
						Browse Opportunities
					</button>
				</div>
			</div>
		</header>
	);
}
