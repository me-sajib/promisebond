import { useState, useEffect } from 'react'

export default function Settings() {
	const [settings, setSettings] = useState({
		notifications: true,
		twoFactorAuth: false,
		language: 'en',
	})

	useEffect(() => {
		// Simulating fetching settings from an API or local storage
		const mockSettings = {
			notifications: true,
			twoFactorAuth: false,
			language: 'en',
		}
		setSettings(mockSettings)
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		// Simulating settings update
		alert('Settings updated successfully!')
	}

	return (
		<div className="bg-white sm:rounded-lg">
			<div className="px-4 py-5 sm:p-6">
				<h2 className="text-lg font-medium leading-6 text-gray-900">Settings</h2>
				<form onSubmit={handleSubmit} className="mt-5 space-y-6">
					<div>
						<label htmlFor="notifications" className="flex items-center">
							<input
								type="checkbox"
								name="notifications"
								id="notifications"
								checked={settings.notifications}
								onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
								className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							/>
							<span className="ml-2 text-sm text-gray-900">Enable email notifications</span>
						</label>
					</div>
					<div>
						<label htmlFor="twoFactorAuth" className="flex items-center">
							<input
								type="checkbox"
								name="twoFactorAuth"
								id="twoFactorAuth"
								checked={settings.twoFactorAuth}
								onChange={(e) => setSettings({ ...settings, twoFactorAuth: e.target.checked })}
								className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							/>
							<span className="ml-2 text-sm text-gray-900">Enable two-factor authentication</span>
						</label>
					</div>
					<div>
						<label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
						<select
							id="language"
							name="language"
							value={settings.language}
							onChange={(e) => setSettings({ ...settings, language: e.target.value })}
							className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
						>
							<option value="en">English</option>
							<option value="es">Español</option>
							<option value="fr">Français</option>
						</select>
					</div>
					<div>
						<button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Save Settings
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

