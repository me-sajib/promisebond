import { Play, Shield, TrendingUp } from "lucide-react";
import React from "react";

export default function HowBondWork() {
	return (
		<section className="py-16 container mx-auto px-4">
			<h2 className="text-3xl font-bold text-center mb-12">
				How Creator Promises Work
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="text-center p-6">
					<div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
						<Play className="w-8 h-8 text-primary-500" />
					</div>
					<h3 className="text-xl font-semibold mb-4">For Creators</h3>
					<p className="text-gray-600">
						Issue promise bonds for future content, promotions, or
						collaborations. Get paid now for commitments you ill fulfill later.
					</p>
				</div>
				<div className="text-center p-6">
					<div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
						<TrendingUp className="w-8 h-8 text-primary-500" />
					</div>
					<h3 className="text-xl font-semibold mb-4">For Investors</h3>
					<p className="text-gray-600">
						Buy and trade promise bonds. Profit from creator growth or redeem
						for promotional value when due.
					</p>
				</div>
				<div className="text-center p-6">
					<div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
						<Shield className="w-8 h-8 text-primary-500" />
					</div>
					<h3 className="text-xl font-semibold mb-4">Safe & Secure</h3>
					<p className="text-gray-600">
						Smart contracts ensure promises are tracked and fulfilled. Rating
						system maintains quality.
					</p>
				</div>
			</div>
		</section>
	);
}
