import React, { useState } from 'react'
import { Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const allBonds = [
	{
		id: 1,
		image: '/placeholder.svg?height=200&width=300',
		title: 'I will create a custom tech review video',
		creator: 'TechGuru',
		subscribers: 10000,
		rating: 4.9,
		reviews: 120,
		deliveryTime: '3 days',
		startingPrice: 50
	},
	{
		id: 2,
		image: '/placeholder.svg?height=200&width=300',
		title: 'I will design a unique logo for your brand',
		creator: 'DesignMaster',
		subscribers: 8500,
		rating: 4.8,
		reviews: 95,
		deliveryTime: '5 days',
		startingPrice: 75
	},
	{
		id: 3,
		image: '/placeholder.svg?height=200&width=300',
		title: 'I will write a compelling blog post',
		creator: 'WordSmith',
		subscribers: 7200,
		rating: 4.7,
		reviews: 88,
		deliveryTime: '2 days',
		startingPrice: 30
	},
	{
		id: 4,
		image: '/placeholder.svg?height=200&width=300',
		title: 'I will create a social media marketing strategy',
		creator: 'SocialGuru',
		subscribers: 9500,
		rating: 4.9,
		reviews: 110,
		deliveryTime: '7 days',
		startingPrice: 100
	},
	{
		id: 5,
		image: '/placeholder.svg?height=200&width=300',
		title: 'I will produce a professional podcast episode',
		creator: 'PodcastPro',
		subscribers: 6800,
		rating: 4.6,
		reviews: 75,
		deliveryTime: '4 days',
		startingPrice: 80
	},
	{
		id: 6,
		image: '/placeholder.svg?height=200&width=300',
		title: 'I will create a custom illustration',
		creator: 'ArtisticSoul',
		subscribers: 7500,
		rating: 4.8,
		reviews: 92,
		deliveryTime: '6 days',
		startingPrice: 60
	},
	{
		id: 7,
		image: '/placeholder.svg?height=200&width=300',
		title: 'I will develop a responsive website',
		creator: 'WebWizard',
		subscribers: 9200,
		rating: 4.9,
		reviews: 115,
		deliveryTime: '10 days',
		startingPrice: 200
	},
	{
		id: 8,
		image: '/placeholder.svg?height=200&width=300',
		title: 'I will create a 30-day fitness plan',
		creator: 'FitnessFanatic',
		subscribers: 8800,
		rating: 4.7,
		reviews: 105,
		deliveryTime: '2 days',
		startingPrice: 40
	}
]

export default function AllBonds() {
	const [searchTerm, setSearchTerm] = useState('')

	const filteredBonds = allBonds.filter(bond =>
		bond.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
		bond.creator.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div className="min-h-screen bg-[#f5f5f5] py-16">
			<div className="max-w-[1400px] mx-auto px-8">
				<h1 className="text-3xl font-bold text-black mb-8">All Promise Bonds</h1>

				<div className="mb-8">
					<input
						type="text"
						placeholder="Search bonds..."
						className="w-full p-3 rounded-md border border-gray-300"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{filteredBonds.map((bond) => (
						<Link
							to={`/bonds/${bond.id}`}
							key={bond.id}
							className="bg-white rounded-[4px] overflow-hidden group cursor-pointer"
						>
							<div className="relative">
								<img
									src={bond.image}
									alt={bond.title}
									width={300}
									height={200}
									className="w-full aspect-video object-cover"
								/>
								<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
									<Heart className="w-4 h-4 text-primary-500" />
								</button>
							</div>

							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<img
										src="/placeholder.svg?height=57&width=57"
										alt=""
										width={24}
										height={24}
										className="rounded-full"
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
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

