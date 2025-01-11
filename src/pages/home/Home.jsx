import React from "react";
import Categories from "../../components/home/Categories";
import Blog from "../../components/home/Blog";
import Features from "../../components/home/Features";
import Story from "../../components/home/Story";
import HowBondWork from "../../components/home/HowBondWork";
import TopCreator from "../../components/home/TopCreator";
import { Heart, Search, Star } from "lucide-react";

const Home = () => {
	// Real categories based on promise bond types
	const categories = [
		{
			title: "Video Integration",
			subtitle: "1.2k Available",
			icon: "📹",
			description: "Product placement and promotional videos",
		},
		{
			title: "Live Streaming",
			subtitle: "856 Available",
			icon: "🎥",
			description: "Stream mentions and live promotions",
		},
		{
			title: "Social Posts",
			subtitle: "2.3k Available",
			icon: "📱",
			description: "Dedicated social media promotions",
		},
		{
			title: "Community Events",
			subtitle: "945 Available",
			icon: "👥",
			description: "Community engagement and events",
		},
		{
			title: "Podcast Features",
			subtitle: "678 Available",
			icon: "🎙️",
			description: "Podcast mentions and episodes",
		},
	];

	// Real services based on actual promise bonds
	const popularBonds = [
		{
			title: "1-Minute Product Feature in Tech Review (100k+ Views)",
			description:
				"I'll feature your product in my weekly tech review with guaranteed 100k+ views",
			creator: "TechReviewPro",
			rating: 4.9,
			reviews: 283,
			subscribers: "250k",
			orders: 12,
			deliveryTime: "1 Year",
			startingPrice: 300,
			image: "https://image-placeholder.com/images/actual-size/320x200.png",
		},
		{
			title: "Gaming Stream Integration (50k Live Viewers)",
			description:
				"Live product showcase during peak gaming hours with active chat engagement",
			creator: "StreamMaster",
			rating: 4.8,
			reviews: 195,
			subscribers: "180k",
			orders: 8,
			deliveryTime: "1 Year",
			startingPrice: 500,
			image: "https://image-placeholder.com/images/actual-size/320x200.png",
		},
		{
			title: "1-Minute Product Feature in Tech Review (100k+ Views)",
			description:
				"I'll feature your product in my weekly tech review with guaranteed 100k+ views",
			creator: "TechReviewPro",
			rating: 4.9,
			reviews: 283,
			subscribers: "250k",
			orders: 12,
			deliveryTime: "1 Year",
			startingPrice: 300,
			image: "https://image-placeholder.com/images/actual-size/320x200.png",
		},
		{
			title: "Gaming Stream Integration (50k Live Viewers)",
			description:
				"Live product showcase during peak gaming hours with active chat engagement",
			creator: "StreamMaster",
			rating: 4.8,
			reviews: 195,
			subscribers: "180k",
			orders: 8,
			deliveryTime: "1 Year",
			startingPrice: 500,
			image: "https://image-placeholder.com/images/actual-size/320x200.png",
		},
		{
			title: "1-Minute Product Feature in Tech Review (100k+ Views)",
			description:
				"I'll feature your product in my weekly tech review with guaranteed 100k+ views",
			creator: "TechReviewPro",
			rating: 4.9,
			reviews: 283,
			subscribers: "250k",
			orders: 12,
			deliveryTime: "1 Year",
			startingPrice: 300,
			image: "https://image-placeholder.com/images/actual-size/320x200.png",
		},
		{
			title: "Gaming Stream Integration (50k Live Viewers)",
			description:
				"Live product showcase during peak gaming hours with active chat engagement",
			creator: "StreamMaster",
			rating: 4.8,
			reviews: 195,
			subscribers: "180k",
			orders: 8,
			deliveryTime: "1 Year",
			startingPrice: 500,
			image: "https://image-placeholder.com/images/actual-size/320x200.png",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<header className=" text-white container mx-auto mt-10">
				<div className="max-w-[1400px] mx-auto px-8 bg-hero h-auto lg:h-[438px] rounded-lg pt-10 lg:pt-24 pb-10 lg:pb-5 flex flex-col items-center justify-center">
					<div className="text-center w-full lg:w-[60%] flex flex-col items-center justify-center">
						<h1 className="text-3xl lg:text-[40px] leading-[130%] font-bold mb-6 font-macan">
							Find the perfect promised promotion
							<br />
							for your future needs
						</h1>

						<div className="relative max-w-[750px] w-full lg:w-[70%]">
							<input
								type="text"
								placeholder="Search for future promotional opportunities..."
								className="w-full rounded-xl h-[58px] pl-12 pr-28 lg:pr-32 text-gray-900 text-[16px]"
							/>
							<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
							<button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1dbf73] text-white px-4 py-2 rounded-[4px] text-[16px] font-medium">
								Search
							</button>
						</div>

						<div className="hidden lg:block mt-6 flex items-center gap-3 text-[12px]">
							Popular:
							<div className="flex gap-3">
								{[
									"YouTube Features",
									"Twitch Promotions",
									"Instagram Stories",
									"TikTok Integration",
								].map((tag) => (
									<button
										key={tag}
										className="px-3 py-1 border border-white rounded-[20px] hover:bg-white/10 transition-colors"
									>
										{tag}
									</button>
								))}
							</div>
						</div>
						<section className="mt-10 items-end hidden lg:block">
							<div className="max-w-[1400px] mx-auto px-8">
								<div className="flex items-center justify-center gap-x-12">
									<span className="text-gray-600 text-[12px]">Trusted by:</span>
									{["Facebook", "Google", "Netflix", "Amazon", "Spotify"].map(
										(brand) => (
											<span
												key={brand}
												className="text-gray-600 text-[12px] font-semibold"
											>
												{brand}
											</span>
										)
									)}
								</div>
							</div>
						</section>
					</div>
				</div>
			</header>
			<Categories />

			{/* Professional Services */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-[1400px] mx-auto px-8">
					<h2 className="text-[24px] text-black font-bold mb-6">
						Professional services for future promotions
					</h2>

					<div className="grid sm:grid-cols-5 grid-cols-1 gap-6">
						{categories.map((category) => (
							<div
								key={category.title}
								className="relative group cursor-pointer shadow-md"
							>
								<div className=" bg-primary-500 text-white rounded-[4px] p-6 transition-all duration-200 group-hover:opacity-80">
									<span className="text-[32px] mb-4 block ">
										{category.icon}
									</span>
									<h3 className="text-[16px] font-semibold">
										{category.title}
									</h3>
									<p className="text-[14px] mt-1">{category.subtitle}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* how it work */}
			<HowBondWork />

			{/* Latest Promise Bonds */}
			<section className="py-16 bg-[#f5f5f5]">
				<div className="max-w-[1400px] mx-auto px-8">
					<div className="flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center mb-8">
						<h2 className="text-[24px] text-black font-bold mb-4 lg:mb-0">
							Latest Promise Bonds
						</h2>
						<button className="text-[#1dbf73] text-[16px] font-semibold hover:underline">
							See All
						</button>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
						{popularBonds.map((bond, index) => (
							<div
								key={index}
								className="bg-white rounded-[4px] overflow-hidden group cursor-pointer"
							>
								<div className="relative">
									<img
										src={bond.image}
										alt={bond.title}
										className="w-full aspect-video object-cover"
									/>
									<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<Heart className="w-4 h-4 text-primary-500" />
									</button>
								</div>

								<div className="p-4">
									<div className="flex items-center gap-3 mb-3">
										<img
											src="https://image-placeholder.com/images/actual-size/57x57.png"
											alt=""
											className="w-6 h-6 rounded-full"
										/>
										<div>
											<h4 className="text-[14px] font-semibold text-black">
												{bond.creator}
											</h4>
											<p className="text-[12px] text-primary-500">
												{bond.subscribers} Subscribers
											</p>
										</div>
									</div>

									<h3 className="text-[16px] text-black font-medium line-clamp-2 mb-3 group-hover:underline">
										{bond.title}
									</h3>

									<div className="flex items-center gap-1 mb-3">
										<Star className="w-4 h-4 text-[#ffb33e] fill-current" />
										<span className="text-[14px] text-[#ffb33e] font-semibold">
											{bond.rating}
										</span>
										<span className="text-[14px] text-primary-500">
											({bond.reviews})
										</span>
									</div>

									<div className="flex justify-between items-center pt-3 border-t border-gray-200">
										<span className="text-[12px] text-primary-500">
											Promise Date: {bond.deliveryTime}
										</span>
										<div className="text-right">
											<span className="text-[12px] text-primary-500">From</span>
											<p className="text-[18px] text-black font-semibold">
												${bond.startingPrice}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<TopCreator />

			{/* Everything you need section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-[1400px] mx-auto px-8">
					<h2 className="text-[24px] text-black font-bold mb-6">
						Everything you need for future promotions
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="flex gap-4">
							<div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center">
								<span className="text-[20px]">⭐</span>
							</div>
							<div>
								<h3 className="text-[18px] font-semibold text-black mb-2">
									Verified Creators
								</h3>
								<p className="text-[16px] text-[#74767e] leading-[24px]">
									Find creators with proven track records and verified
									subscriber counts
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center">
								<span className="text-[20px]">💰</span>
							</div>
							<div>
								<h3 className="text-[18px] font-semibold text-black mb-2">
									Secure Payments
								</h3>
								<p className="text-[16px] text-[#74767e] leading-[24px]">
									Always know what youll pay upfront. Your payment isnt released
									until promise fulfilled.
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center">
								<span className="text-[20px]">📈</span>
							</div>
							<div>
								<h3 className="text-[18px] font-semibold text-black mb-2">
									Growth Tracking
								</h3>
								<p className="text-[16px] text-[#74767e] leading-[24px]">
									Monitor creator growth and bond value appreciation in
									real-time
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* platform features */}
			<Features />

			{/* Marketplace Stats */}
			<section className="py-16 bg-[#f5f5f5]">
				<div className="max-w-[1400px] mx-auto px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						<div>
							<h3 className="text-[30px] font-bold text-black mb-2">$12M+</h3>
							<p className="text-[18px] text-[#74767e]">Promise bonds traded</p>
						</div>

						<div>
							<h3 className="text-[30px] font-bold text-black mb-2">96%</h3>
							<p className="text-[18px] text-[#74767e]">
								Promise fulfillment rate
							</p>
						</div>

						<div>
							<h3 className="text-[30px] font-bold text-black mb-2">4.9/5</h3>
							<p className="text-[18px] text-[#74767e]">Average bond rating</p>
						</div>

						<div>
							<h3 className="text-[30px] font-bold text-black mb-2">250K+</h3>
							<p className="text-[18px] text-[#74767e]">Active creators</p>
						</div>
					</div>
				</div>
			</section>

			{/* stories */}
			<Story />

			{/* blog */}
			<Blog />
		</div>
	);
};

export default Home;
