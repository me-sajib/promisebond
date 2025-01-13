import React from "react";
import Categories from "../../components/home/Categories";
import Blog from "../../components/home/Blog";
import Features from "../../components/home/Features";
import Story from "../../components/home/Story";
import HowBondWork from "../../components/home/HowBondWork";
import TopCreator from "../../components/home/TopCreator";
import { Heart, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";

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
			"id": 1,
			"name": "Bond 1",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 11-minute tech review video with 100k+ views",
			"creator": "Creator 1",
			"subscribers": 11000,
			"rating": 4.6,
			"reviews": 120,
			"promiseDate": "2025-01-21",
			"bondValue": 310,
			"currentMarketValue": 470,
			"expectedViews": "110,000+",
			"missionDetails": "I promise to create and publish a detailed 11-minute tech review video on my channel which currently has 55k subscribers growing by 1.1k per week. The video will be published when my channel reaches 110k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 1",
				"purpose": "Raising $21000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 4 times over 16 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 55000,
				"weeklyGrowth": 1100,
				"avgViews": 80000,
				"completedPromises": 16
			},
			"features": [
				"Expected to grow to over 310k followers within a year.",
				"Current market rate for a single promotional post by a 310k influencer is $550."
			],
			"maturityDate": "2027-01-16",
			"price": 550,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 1",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 31
		},
		{
			"id": 2,
			"name": "Bond 2",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 12-minute tech review video with 200k+ views",
			"creator": "Creator 2",
			"subscribers": 12000,
			"rating": 4.7,
			"reviews": 140,
			"promiseDate": "2025-01-22",
			"bondValue": 320,
			"currentMarketValue": 490,
			"expectedViews": "120,000+",
			"missionDetails": "I promise to create and publish a detailed 12-minute tech review video on my channel which currently has 60k subscribers growing by 1.2k per week. The video will be published when my channel reaches 120k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 2",
				"purpose": "Raising $22000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 5 times over 17 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 60000,
				"weeklyGrowth": 1200,
				"avgViews": 85000,
				"completedPromises": 17
			},
			"features": [
				"Expected to grow to over 320k followers within a year.",
				"Current market rate for a single promotional post by a 320k influencer is $600."
			],
			"maturityDate": "2027-01-17",
			"price": 600,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 2",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 32
		},
		{
			"id": 3,
			"name": "Bond 3",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 13-minute tech review video with 300k+ views",
			"creator": "Creator 3",
			"subscribers": 13000,
			"rating": 4.8,
			"reviews": 160,
			"promiseDate": "2025-01-23",
			"bondValue": 330,
			"currentMarketValue": 510,
			"expectedViews": "130,000+",
			"missionDetails": "I promise to create and publish a detailed 13-minute tech review video on my channel which currently has 65k subscribers growing by 1.3k per week. The video will be published when my channel reaches 130k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 3",
				"purpose": "Raising $23000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 6 times over 18 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 65000,
				"weeklyGrowth": 1300,
				"avgViews": 90000,
				"completedPromises": 18
			},
			"features": [
				"Expected to grow to over 330k followers within a year.",
				"Current market rate for a single promotional post by a 330k influencer is $650."
			],
			"maturityDate": "2027-01-18",
			"price": 650,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 3",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 33
		},
		{
			"id": 4,
			"name": "Bond 4",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 14-minute tech review video with 400k+ views",
			"creator": "Creator 4",
			"subscribers": 14000,
			"rating": 4.9,
			"reviews": 180,
			"promiseDate": "2025-01-24",
			"bondValue": 340,
			"currentMarketValue": 530,
			"expectedViews": "140,000+",
			"missionDetails": "I promise to create and publish a detailed 14-minute tech review video on my channel which currently has 70k subscribers growing by 1.4k per week. The video will be published when my channel reaches 140k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 4",
				"purpose": "Raising $24000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 7 times over 19 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 70000,
				"weeklyGrowth": 1400,
				"avgViews": 95000,
				"completedPromises": 19
			},
			"features": [
				"Expected to grow to over 340k followers within a year.",
				"Current market rate for a single promotional post by a 340k influencer is $700."
			],
			"maturityDate": "2027-01-19",
			"price": 700,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 4",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 34
		},
		{
			"id": 5,
			"name": "Bond 5",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 15-minute tech review video with 500k+ views",
			"creator": "Creator 5",
			"subscribers": 15000,
			"rating": 5.0,
			"reviews": 200,
			"promiseDate": "2025-01-25",
			"bondValue": 350,
			"currentMarketValue": 550,
			"expectedViews": "150,000+",
			"missionDetails": "I promise to create and publish a detailed 15-minute tech review video on my channel which currently has 75k subscribers growing by 1.5k per week. The video will be published when my channel reaches 150k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 5",
				"purpose": "Raising $25000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 8 times over 20 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 75000,
				"weeklyGrowth": 1500,
				"avgViews": 100000,
				"completedPromises": 20
			},
			"features": [
				"Expected to grow to over 350k followers within a year.",
				"Current market rate for a single promotional post by a 350k influencer is $750."
			],
			"maturityDate": "2027-01-20",
			"price": 750,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 5",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 35
		},
		{
			"id": 6,
			"name": "Bond 6",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 16-minute tech review video with 600k+ views",
			"creator": "Creator 6",
			"subscribers": 16000,
			"rating": 5.1,
			"reviews": 220,
			"promiseDate": "2025-01-26",
			"bondValue": 360,
			"currentMarketValue": 570,
			"expectedViews": "160,000+",
			"missionDetails": "I promise to create and publish a detailed 16-minute tech review video on my channel which currently has 80k subscribers growing by 1.6k per week. The video will be published when my channel reaches 160k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 6",
				"purpose": "Raising $26000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 9 times over 21 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 80000,
				"weeklyGrowth": 1600,
				"avgViews": 105000,
				"completedPromises": 21
			},
			"features": [
				"Expected to grow to over 360k followers within a year.",
				"Current market rate for a single promotional post by a 360k influencer is $800."
			],
			"maturityDate": "2027-01-21",
			"price": 800,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 6",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 36
		},
		{
			"id": 7,
			"name": "Bond 7",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 17-minute tech review video with 700k+ views",
			"creator": "Creator 7",
			"subscribers": 17000,
			"rating": 5.2,
			"reviews": 240,
			"promiseDate": "2025-01-27",
			"bondValue": 370,
			"currentMarketValue": 590,
			"expectedViews": "170,000+",
			"missionDetails": "I promise to create and publish a detailed 17-minute tech review video on my channel which currently has 85k subscribers growing by 1.7000000000000002k per week. The video will be published when my channel reaches 170k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 7",
				"purpose": "Raising $27000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 10 times over 22 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 85000,
				"weeklyGrowth": 1700,
				"avgViews": 110000,
				"completedPromises": 22
			},
			"features": [
				"Expected to grow to over 370k followers within a year.",
				"Current market rate for a single promotional post by a 370k influencer is $850."
			],
			"maturityDate": "2027-01-22",
			"price": 850,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 7",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 37
		},
		{
			"id": 8,
			"name": "Bond 8",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 18-minute tech review video with 800k+ views",
			"creator": "Creator 8",
			"subscribers": 18000,
			"rating": 5.3,
			"reviews": 260,
			"promiseDate": "2025-01-28",
			"bondValue": 380,
			"currentMarketValue": 610,
			"expectedViews": "180,000+",
			"missionDetails": "I promise to create and publish a detailed 18-minute tech review video on my channel which currently has 90k subscribers growing by 1.8k per week. The video will be published when my channel reaches 180k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 8",
				"purpose": "Raising $28000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 11 times over 23 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 90000,
				"weeklyGrowth": 1800,
				"avgViews": 115000,
				"completedPromises": 23
			},
			"features": [
				"Expected to grow to over 380k followers within a year.",
				"Current market rate for a single promotional post by a 380k influencer is $900."
			],
			"maturityDate": "2027-01-23",
			"price": 900,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 8",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 38
		},
		{
			"id": 9,
			"name": "Bond 9",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 19-minute tech review video with 900k+ views",
			"creator": "Creator 9",
			"subscribers": 19000,
			"rating": 5.4,
			"reviews": 280,
			"promiseDate": "2025-01-29",
			"bondValue": 390,
			"currentMarketValue": 630,
			"expectedViews": "190,000+",
			"missionDetails": "I promise to create and publish a detailed 19-minute tech review video on my channel which currently has 95k subscribers growing by 1.9k per week. The video will be published when my channel reaches 190k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 9",
				"purpose": "Raising $29000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 12 times over 24 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 95000,
				"weeklyGrowth": 1900,
				"avgViews": 120000,
				"completedPromises": 24
			},
			"features": [
				"Expected to grow to over 390k followers within a year.",
				"Current market rate for a single promotional post by a 390k influencer is $950."
			],
			"maturityDate": "2027-01-24",
			"price": 950,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 9",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 39
		},
		{
			"id": 10,
			"name": "Bond 10",
			"image": "https://placehold.co/600x400",
			"title": "Promise to deliver a 20-minute tech review video with 1000k+ views",
			"creator": "Creator 10",
			"subscribers": 20000,
			"rating": 5.5,
			"reviews": 300,
			"promiseDate": "2025-01-30",
			"bondValue": 400,
			"currentMarketValue": 650,
			"expectedViews": "200,000+",
			"missionDetails": "I promise to create and publish a detailed 20-minute tech review video on my channel which currently has 100k subscribers growing by 2.0k per week. The video will be published when my channel reaches 200k subscribers, estimated in 12 months.",
			"promiseDetails": {
				"name": "Thomas Lee 10",
				"purpose": "Raising $30000 for project upgrades.",
				"promise": "Conduct viral marketing for the buyer\u2019s product/service by posting 13 times over 25 days. Attach six popular photos."
			},
			"creatorStats": {
				"currentSubscribers": 100000,
				"weeklyGrowth": 2000,
				"avgViews": 125000,
				"completedPromises": 25
			},
			"features": [
				"Expected to grow to over 400k followers within a year.",
				"Current market rate for a single promotional post by a 400k influencer is $1000."
			],
			"maturityDate": "2027-01-25",
			"price": 1000,
			"representativeImage": "https://placehold.co/600x400",
			"socialMedia": {
				"platform": "Instagram",
				"channelName": "Channel 10",
				"country": "USA"
			},
			"liabilityAgreement": true,
			"quantity": 40
		}
	]


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
						<Link
							to="/all-promise-bonds"
							className="text-[#1dbf73] text-[16px] font-semibold hover:underline"
						>
							See All
						</Link>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
						{popularBonds.map((bond, index) => (
							<Link
								to={`/bonds/${index}`}
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
												${bond.bondValue}
											</p>
										</div>
									</div>
								</div>
							</Link>
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
