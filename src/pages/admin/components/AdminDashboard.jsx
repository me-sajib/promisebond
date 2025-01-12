
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, AlertTriangle, Bell, Settings, LogOut } from 'lucide-react';

const AdminDashboard = () => {
	const [activeTab, setActiveTab] = useState('overview');
	const [users, setUsers] = useState([
		{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Creator', status: 'Active' },
		{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Buyer', status: 'Active' },
		{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Creator', status: 'Suspended' },
	]);

	const [bonds, setBonds] = useState([
		{ id: 1, title: '1-minute promo in video', creator: 'John Doe', price: 300, status: 'Active' },
		{ id: 2, title: 'Social media shoutout', creator: 'Jane Smith', price: 200, status: 'Pending Review' },
		{ id: 3, title: 'Product review', creator: 'Bob Johnson', price: 500, status: 'Fulfilled' },
	]);

	const revenueData = [
		{ month: 'Jan', revenue: 150000 },
		{ month: 'Feb', revenue: 180000 },
		{ month: 'Mar', revenue: 210000 },
		{ month: 'Apr', revenue: 250000 },
		{ month: 'May', revenue: 220000 },
		{ month: 'Jun', revenue: 280000 },
	];

	const handleUserStatusChange = (userId, newStatus) => {
		setUsers(users.map(user =>
			user.id === userId ? { ...user, status: newStatus } : user
		));
	};

	const handleBondStatusChange = (bondId, newStatus) => {
		setBonds(bonds.map(bond =>
			bond.id === bondId ? { ...bond, status: newStatus } : bond
		));
	};

	return (
		<div className="min-h-screen bg-gray-50 flex">
			{/* Sidebar */}
			<div className="fixed w-64 h-full bg-gray-800">
				<div className="p-6">
					<h2 className="text-2xl font-bold text-white">Admin Panel</h2>
				</div>
				<nav className="mt-6">
					<a onClick={() => setActiveTab('overview')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'overview' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
						<TrendingUp className="w-5 h-5 mr-3" />
						Overview
					</a>
					<a onClick={() => setActiveTab('users')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'users' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
						<Users className="w-5 h-5 mr-3" />
						Users
					</a>
					<a onClick={() => setActiveTab('bonds')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'bonds' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
						<DollarSign className="w-5 h-5 mr-3" />
						Bonds
					</a>
					<a onClick={() => setActiveTab('settings')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'settings' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
						<Settings className="w-5 h-5 mr-3" />
						Settings
					</a>
				</nav>
			</div>

			{/* Main Content */}
			<div className="ml-64 p-8 flex-1">
				{/* Header */}
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
					<button className="p-2 relative">
						<Bell className="w-6 h-6 text-gray-600" />
						<span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
							3
						</span>
					</button>
				</div>

				{/* Content based on active tab */}
				{activeTab === 'overview' && (
					<div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							<div className="bg-white rounded-xl shadow-sm p-6">
								<div className="flex items-center">
									<div className="p-3 bg-blue-100 rounded-full">
										<DollarSign className="w-6 h-6 text-blue-600" />
									</div>
									<div className="ml-4">
										<h3 className="text-gray-500 text-sm">Total Revenue</h3>
										<p className="text-2xl font-bold text-gray-800">$1,280,000</p>
										<span className="text-green-500 text-sm">+12% from last month</span>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-xl shadow-sm p-6">
								<div className="flex items-center">
									<div className="p-3 bg-green-100 rounded-full">
										<Users className="w-6 h-6 text-green-600" />
									</div>
									<div className="ml-4">
										<h3 className="text-gray-500 text-sm">Total Users</h3>
										<p className="text-2xl font-bold text-gray-800">10,483</p>
										<span className="text-green-500 text-sm">+8% from last month</span>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-xl shadow-sm p-6">
								<div className="flex items-center">
									<div className="p-3 bg-yellow-100 rounded-full">
										<AlertTriangle className="w-6 h-6 text-yellow-600" />
									</div>
									<div className="ml-4">
										<h3 className="text-gray-500 text-sm">Pending Reviews</h3>
										<p className="text-2xl font-bold text-gray-800">23</p>
										<span className="text-yellow-500 text-sm">Action needed</span>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-sm p-6 mb-8">
							<h2 className="text-xl font-bold text-gray-800 mb-4">Revenue Overview</h2>
							<ResponsiveContainer width="100%" height={300}>
								<LineChart data={revenueData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="month" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue ($)" />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
				)}

				{activeTab === 'users' && (
					<div className="bg-white rounded-xl shadow-sm p-6">
						<h2 className="text-xl font-bold text-gray-800 mb-4">User Management</h2>
						<table className="w-full">
							<thead>
								<tr className="text-left text-gray-500 border-b">
									<th className="pb-3">ID</th>
									<th className="pb-3">Name</th>
									<th className="pb-3">Email</th>
									<th className="pb-3">Role</th>
									<th className="pb-3">Status</th>
									<th className="pb-3">Action</th>
								</tr>
							</thead>
							<tbody>
								{users.map(user => (
									<tr key={user.id} className="border-b">
										<td className="py-4">{user.id}</td>
										<td className="py-4">{user.name}</td>
										<td className="py-4">{user.email}</td>
										<td className="py-4">{user.role}</td>
										<td className="py-4">
											<span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
												}`}>
												{user.status}
											</span>
										</td>
										<td className="py-4">
											<select
												className="border rounded px-2 py-1"
												value={user.status}
												onChange={(e) => handleUserStatusChange(user.id, e.target.value)}
											>
												<option value="Active">Active</option>
												<option value="Suspended">Suspended</option>
											</select>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{activeTab === 'bonds' && (
					<div className="bg-white rounded-xl shadow-sm p-6">
						<h2 className="text-xl font-bold text-gray-800 mb-4">Bond Management</h2>
						<table className="w-full">
							<thead>
								<tr className="text-left text-gray-500 border-b">
									<th className="pb-3">ID</th>
									<th className="pb-3">Title</th>
									<th className="pb-3">Creator</th>
									<th className="pb-3">Price</th>
									<th className="pb-3">Status</th>
									<th className="pb-3">Action</th>
								</tr>
							</thead>
							<tbody>
								{bonds.map(bond => (
									<tr key={bond.id} className="border-b">
										<td className="py-4">{bond.id}</td>
										<td className="py-4">{bond.title}</td>
										<td className="py-4">{bond.creator}</td>
										<td className="py-4">${bond.price}</td>
										<td className="py-4">
											<span className={`px-2 py-1 rounded-full text-xs ${bond.status === 'Active' ? 'bg-green-100 text-green-800' :
												bond.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' :
													'bg-blue-100 text-blue-800'
												}`}>
												{bond.status}
											</span>
										</td>
										<td className="py-4">
											<select
												className="border rounded px-2 py-1"
												value={bond.status}
												onChange={(e) => handleBondStatusChange(bond.id, e.target.value)}
											>
												<option value="Active">Active</option>
												<option value="Pending Review">Pending Review</option>
												<option value="Fulfilled">Fulfilled</option>
											</select>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{activeTab === 'settings' && (
					<div className="bg-white rounded-xl shadow-sm p-6">
						<h2 className="text-xl font-bold text-gray-800 mb-4">Admin Settings</h2>
						<p className="text-gray-600">Admin settings and configurations would go here.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default AdminDashboard;

