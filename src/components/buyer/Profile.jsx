import { useState, useEffect } from 'react'

export default function Profile() {
	const [profile, setProfile] = useState({
		name: '',
		email: '',
		interests: [],
	})

	useEffect(() => {
		// Simulating fetching profile from an API or local storage
		const mockProfile = {
			name: 'Jane Smith',
			email: 'jane@example.com',
			interests: ['Technology', 'Fitness', 'Cooking'],
		}
		setProfile(mockProfile)
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		// Simulating profile update
		alert('Profile updated successfully!')
	}

	return (
		<div className="bg-white sm:rounded-lg">
			<div className="px-4 py-5 sm:p-6">
				<h2 className="text-lg font-medium leading-6 text-gray-900">Profile</h2>
				<form onSubmit={handleSubmit} className="mt-5 space-y-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							value={profile.name}
							onChange={(e) => setProfile({ ...profile, name: e.target.value })}
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={profile.email}
							onChange={(e) => setProfile({ ...profile, email: e.target.value })}
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests</label>
						<input
							type="text"
							name="interests"
							id="interests"
							value={profile.interests.join(', ')}
							onChange={(e) => setProfile({ ...profile, interests: e.target.value.split(', ') })}
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
						<p className="mt-2 text-sm text-gray-500">Separate interests with commas</p>
					</div>
					<div>
						<button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Update Profile
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

