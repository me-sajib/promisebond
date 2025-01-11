import { Clock, Star, Users } from "lucide-react";
import React from "react";

export default function Features() {
	return (
		<section className="py-16 ">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center">
						Platform Features
					</h2>
					<div className="space-y-6">
						<div className="flex items-start">
							<Clock className="w-6 h-6 text-primary-500 mt-1 mr-4" />
							<div>
								<h3 className="font-semibold mb-2">Automated Reminders</h3>
								<p className="text-gray-600">
									Get notified 3 months before promise due date. Track
									fulfillment status easily.
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<Star className="w-6 h-6 text-primary-500 mt-1 mr-4" />
							<div>
								<h3 className="font-semibold mb-2">Rating System</h3>
								<p className="text-gray-600">
									Rate creators after promise fulfillment. High ratings unlock
									more bond opportunities.
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<Users className="w-6 h-6 text-primary-500 mt-1 mr-4" />
							<div>
								<h3 className="font-semibold mb-2">Secondary Market</h3>
								<p className="text-gray-600">
									Trade promise bonds before maturity. Profit from creator
									growth.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
