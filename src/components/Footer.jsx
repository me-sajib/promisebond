import React from "react";

export default function Footer() {
	return (
		<footer className=" py-16 border-t">
			<div className="max-w-[1400px] mx-auto px-8">
				<div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
					<div>
						<h4 className="text-[16px] font-bold mb-6">Categories</h4>
						<ul className="space-y-4">
							{[
								"Video Integration",
								"Live Streaming",
								"Social Posts",
								"Podcast Features",
								"Community Events",
							].map((item) => (
								<li
									key={item}
									className="text-[14px]  hover:underline cursor-pointer"
								>
									{item}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-[16px] font-bold mb-6">About</h4>
						<ul className="space-y-4">
							{[
								"Careers",
								"Press & News",
								"Privacy Policy",
								"Terms of Service",
							].map((item) => (
								<li
									key={item}
									className="text-[14px]  hover:underline cursor-pointer"
								>
									{item}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-[16px] font-bold mb-6">Support</h4>
						<ul className="space-y-4">
							{[
								"Help & Support",
								"Trust & Safety",
								"Selling on Promise",
								"Buying on Promise",
							].map((item) => (
								<li
									key={item}
									className="text-[14px] hover:underline cursor-pointer"
								>
									{item}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-[16px] font-bold mb-6">Community</h4>
						<ul className="space-y-4">
							{["Events", "Blog", "Forum", "Community Standards"].map(
								(item) => (
									<li
										key={item}
										className="text-[14px] hover:underline cursor-pointer"
									>
										{item}
									</li>
								)
							)}
						</ul>
					</div>

					<div>
						<h4 className="text-[16px] font-bold mb-6">Legal</h4>
						<ul className="space-y-4">
							{["Terms of Use", "Privacy Policy", "Cookie Policy"].map(
								(item) => (
									<li
										key={item}
										className="text-[14px] hover:underline cursor-pointer"
									>
										{item}
									</li>
								)
							)}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
