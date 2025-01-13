import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Gift, Bell, Video, Settings, LogOut, BarChart2, FileText, LogOutIcon, CreditCard } from 'lucide-react';
import CreateBondForm from './BondForm';
import IssuedBonds from '../../../components/issuer/IssuedBond';
import Billing from '../../../components/issuer/Billing';
import Profile from '../../../components/issuer/Profile';
import Setting from '../../../components/issuer/Settings';

const IssuerDashboard = ({ userId }) => {
	const [activeTab, setActiveTab] = useState('dashboard');
	const [activeBonds, setActiveBonds] = useState([]);
	const [contentData, setContentData] = useState([]);
	const [showNewBondModal, setShowNewBondModal] = useState(false);
	const [newBond, setNewBond] = useState({ type: '', amount: 0, dueDate: '', status: 'active' });
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		// Load data from localStorage
		const storedBonds = localStorage.getItem(`bonds_${userId}`);
		const storedContent = localStorage.getItem(`content_${userId}`);

		if (storedBonds) {
			setActiveBonds(JSON.parse(storedBonds));
		} else {
			// Set default bonds if none exist
			const defaultBonds = [
				{ id: 1, type: "Promotion", amount: 300, dueDate: "2025-02-15", status: "active" },
				{ id: 2, type: "Sponsorship", amount: 500, dueDate: "2025-03-01", status: "pending" }
			];
			setActiveBonds(defaultBonds);
			localStorage.setItem(`bonds_${userId}`, JSON.stringify(defaultBonds));
		}

		if (storedContent) {
			setContentData(JSON.parse(storedContent));
		} else {
			// Set default content if none exists
			const defaultContent = [
				{ id: 1, title: 'How to Start a YouTube Channel', views: 15000, likes: 1200, comments: 300 },
				{ id: 2, title: '10 Tips for Better Videos', views: 22000, likes: 1800, comments: 450 },
				{ id: 3, title: 'My Gear Setup 2025', views: 30000, likes: 2500, comments: 600 },
			];
			setContentData(defaultContent);
			localStorage.setItem(`content_${userId}`, JSON.stringify(defaultContent));
		}
	}, [userId]);

	const handleNewBond = (e) => {
		e.preventDefault();
		const newBondWithId = { ...newBond, id: activeBonds.length + 1 };
		const updatedBonds = [...activeBonds, newBondWithId];
		setActiveBonds(updatedBonds);
		localStorage.setItem(`bonds_${userId}`, JSON.stringify(updatedBonds));
		setShowNewBondModal(false);
		setNewBond({ type: '', amount: 0, dueDate: '', status: 'active' });
	};

	const filteredBonds = activeBonds.filter(bond =>
		bond.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
		bond.status.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const filteredContent = contentData.filter(content =>
		content.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const performanceData = [
		{ month: 'Jan', subscribers: 50000, bondValue: 300 },
		{ month: 'Feb', subscribers: 54000, bondValue: 320 },
		{ month: 'Mar', subscribers: 59000, bondValue: 350 }
	];

	const audienceData = [
		{ age: '18-24', percentage: 30 },
		{ age: '25-34', percentage: 40 },
		{ age: '35-44', percentage: 20 },
		{ age: '45+', percentage: 10 },
	];

	const renderDashboard = () => (
		<>
			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex items-center">
						<div className="p-3 bg-green-100 rounded-full">
							<Users className="w-6 h-6 text-green-600" />
						</div>
						<div className="ml-4">
							<h3 className="text-gray-500 text-sm">Subscribers</h3>
							<p className="text-2xl font-bold text-gray-800">59,000</p>
							<span className="text-green-500 text-sm">+9% this month</span>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex items-center">
						<div className="p-3 bg-blue-100 rounded-full">
							<Gift className="w-6 h-6 text-blue-600" />
						</div>
						<div className="ml-4">
							<h3 className="text-gray-500 text-sm">Active Bonds</h3>
							<p className="text-2xl font-bold text-gray-800">{activeBonds.length}</p>
							<span className="text-blue-500 text-sm">${activeBonds.reduce((sum, bond) => sum + bond.amount, 0)} total value</span>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex items-center">
						<div className="p-3 bg-purple-100 rounded-full">
							<DollarSign className="w-6 h-6 text-purple-600" />
						</div>
						<div className="ml-4">
							<h3 className="text-gray-500 text-sm">Average Bond Price</h3>
							<p className="text-2xl font-bold text-gray-800">
								${activeBonds.length > 0 ? Math.round(activeBonds.reduce((sum, bond) => sum + bond.amount, 0) / activeBonds.length) : 0}
							</p>
							<span className="text-purple-500 text-sm">+16.7% from start</span>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex items-center">
						<div className="p-3 bg-yellow-100 rounded-full">
							<TrendingUp className="w-6 h-6 text-yellow-600" />
						</div>
						<div className="ml-4">
							<h3 className="text-gray-500 text-sm">Fulfillment Rate</h3>
							<p className="text-2xl font-bold text-gray-800">98%</p>
							<span className="text-yellow-500 text-sm">Last 30 days</span>
						</div>
					</div>
				</div>
			</div>

			{/* Growth Chart */}
			<div className="bg-white rounded-xl shadow-sm p-6 mb-8">
				<h2 className="text-xl font-bold text-gray-800 mb-4">Growth & Bond Value</h2>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={performanceData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="month" />
						<YAxis yAxisId="left" />
						<YAxis yAxisId="right" orientation="right" />
						<Tooltip />
						<Legend />
						<Line yAxisId="left" type="monotone" dataKey="subscribers" stroke="#8884d8" name="Subscribers" />
						<Line yAxisId="right" type="monotone" dataKey="bondValue" stroke="#82ca9d" name="Bond Value ($)" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</>
	);

	const renderMyBonds = () => (
		<div className="bg-white rounded-xl shadow-sm">
			<div className="p-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold text-gray-800">Active Promises</h2>
					<div className="flex items-center">
						<input
							type="text"
							placeholder="Search bonds..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="mr-2 px-3 py-2 border border-gray-300 rounded-md"
						/>
						<button
							onClick={() => setShowNewBondModal(true)}
							className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-indigo-700"
						>
							Create New Bond
						</button>
					</div>
				</div>
				<table className="w-full">
					<thead>
						<tr className="text-left text-gray-500 border-b">
							<th className="pb-3">ID</th>
							<th className="pb-3">Type</th>
							<th className="pb-3">Amount</th>
							<th className="pb-3">Due Date</th>
							<th className="pb-3">Status</th>
							<th className="pb-3">Action</th>
						</tr>
					</thead>
					<tbody>
						{filteredBonds.map(bond => (
							<tr key={bond.id} className="border-b">
								<td className="py-4">{bond.id}</td>
								<td className="py-4">{bond.type}</td>
								<td className="py-4">${bond.amount}</td>
								<td className="py-4">{bond.dueDate}</td>
								<td className="py-4">
									<span className={`px-2 py-1 rounded-full text-xs ${bond.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
										}`}>
										{bond.status}
									</span>
								</td>
								<td className="py-4">
									<button className="text-indigo-600 hover:text-indigo-800">Manage</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);

	const handleLogout = () => {
		localStorage.removeItem("currentUser");
		window.location.href = "/";
	};

	return (
		<div className="min-h-screen bg-gray-50 flex">

			{/* Sidebar */}
			<div className="fixed w-64 h-full bg-indigo-600">
				<div className="p-6">
					<h2 className="text-2xl font-bold text-white">Issuer Studio</h2>
				</div>
				<nav className="mt-6">
					<a onClick={() => setActiveTab('dashboard')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'dashboard' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
						<TrendingUp className="w-5 h-5 mr-3" />
						Dashboard
					</a>
					<a onClick={() => setActiveTab('issue')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'issue' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
						<Gift className="w-5 h-5 mr-3" />
						Issue Promise Bond
					</a>
					{/* <a onClick={() => setActiveTab('issued')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'issued' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
						<Gift className="w-5 h-5 mr-3" />
						Issued Promise Bond
					</a> */}
					<a onClick={() => setActiveTab('billing')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'billing' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
						<CreditCard className="w-5 h-5 mr-3" />
						Billing
					</a>
					<a onClick={() => setActiveTab('profile')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'profile' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
						<Users className="w-5 h-5 mr-3" />
						Profile
					</a>
					<a onClick={() => setActiveTab('settings')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'settings' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
						<Settings className="w-5 h-5 mr-3" />
						Settings
					</a>
					{/* logout button */}
					<button onClick={handleLogout} className="flex items-center px-6 py-3 cursor-pointer text-indigo-100 hover:bg-indigo-700">
						<LogOutIcon className="w-5 h-5 mr-3" />
						Logout
					</button>

				</nav>
			</div>

			{/* Main Content */}
			<div className="ml-64 p-8 flex-1">
				{/* Header */}
				<div className="flex justify-between items-center mb-8">
					<div>
						<h1 className="text-3xl font-bold text-gray-800">Issuer Dashboard</h1>
						<p className="text-gray-600">Welcome back, Issuer!</p>
					</div>
					<button className="p-2 relative">
						<Bell className="w-6 h-6 text-gray-600" />
						<span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
							2
						</span>
					</button>
				</div>

				{/* Content based on active tab */}
				{activeTab === 'dashboard' && renderDashboard()}
				{activeTab === 'issue' && renderMyBonds()}
				{activeTab === 'issued' && <IssuedBonds />}
				{activeTab === 'billing' && <Billing />}
				{activeTab === 'profile' && <Profile />}
				{activeTab === 'settings' && <Setting />}
			</div>

			{/* New Bond Modal */}
			{showNewBondModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<CreateBondForm />
					{/* <div className="bg-white p-8 rounded-lg">
						<h2 className="text-2xl font-bold mb-4">Create New Bond</h2>
						<form onSubmit={handleNewBond}>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
									Type
								</label>
								<input
									className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="type"
									type="text"
									placeholder="Bond Type"
									value={newBond.type}
									onChange={(e) => setNewBond({ ...newBond, type: e.target.value })}
									required
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
									Amount
								</label>
								<input
									className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="amount"
									type="text"
									placeholder="Bond Amount"
									value={newBond.amount}
									onChange={(e) => setNewBond({ ...newBond, amount: Number(e.target.value) })}
									required
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
									Due Date
								</label>
								<input
									className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="dueDate"
									type="date"
									value={newBond.dueDate}
									onChange={(e) => setNewBond({ ...newBond, dueDate: e.target.value })}
									required
								/>
							</div>
							<div className="flex items-center justify-between">
								<button
									className="bg-primary-500 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Create Bond
								</button>
								<button
									className=" py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button"
									onClick={() => setShowNewBondModal(false)}
								>
									Cancel
								</button>
							</div>
						</form>
					</div> */}
				</div>
			)}
		</div>
	);
};

export default IssuerDashboard;

