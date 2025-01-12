'use client'

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Gift, Bell, Search, Star, Settings, LogOut } from 'lucide-react';


const BuyerDashboard = ({ userId }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeBonds, setActiveBonds] = useState([]);
  const [showBondDetails, setShowBondDetails] = useState(false);
  const [selectedBond, setSelectedBond] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load data from localStorage
    const storedBonds = localStorage.getItem(`buyer_bonds_${userId}`);

    if (storedBonds) {
      setActiveBonds(JSON.parse(storedBonds));
    } else {
      // Set default bonds if none exist
      const defaultBonds = [
        { id: 1, title: '1-minute promo in video', creator: 'John Doe', price: 300, dueDate: '2025-06-15', status: 'Active' },
        { id: 2, title: 'Social media shoutout', creator: 'Jane Smith', price: 200, dueDate: '2025-07-01', status: 'Pending Fulfillment' },
        { id: 3, title: 'Product review', creator: 'Bob Johnson', price: 500, dueDate: '2025-08-30', status: 'Fulfilled' },
      ];
      setActiveBonds(defaultBonds);
      localStorage.setItem(`buyer_bonds_${userId}`, JSON.stringify(defaultBonds));
    }
  }, [userId]);

  const performanceData = [
    { month: 'Jan', investment: 500 },
    { month: 'Feb', investment: 800 },
    { month: 'Mar', investment: 1200 },
    { month: 'Apr', investment: 1000 },
    { month: 'May', investment: 1500 },
    { month: 'Jun', investment: 2000 },
  ];

  const exploreBonds = [
    { id: 4, title: 'Exclusive interview', creator: 'Alice Williams', price: 400, rating: 4.8 },
    { id: 5, title: 'Gaming stream feature', creator: 'Charlie Brown', price: 350, rating: 4.5 },
    { id: 6, title: 'Podcast guest appearance', creator: 'Diana Ross', price: 600, rating: 4.9 },
  ];

  const handleBondClick = (bond) => {
    setSelectedBond(bond);
    setShowBondDetails(true);
  };

  const filteredBonds = activeBonds.filter(bond =>
    bond.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bond.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bond.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderDashboard = () => (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-indigo-100 rounded-full">
              <DollarSign className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Total Spent</h3>
              <p className="text-2xl font-bold text-gray-800">
                ${activeBonds.reduce((sum, bond) => sum + bond.price, 0)}
              </p>
              <span className="text-indigo-500 text-sm">+15% from last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <Gift className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Active Bonds</h3>
              <p className="text-2xl font-bold text-gray-800">{activeBonds.length}</p>
              <span className="text-green-500 text-sm">{activeBonds.filter(bond => bond.status === 'Active').length} active</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Average Rating</h3>
              <p className="text-2xl font-bold text-gray-800">4.8</p>
              <span className="text-yellow-500 text-sm">Based on 12 reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Investment Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#8884d8" name="Investment ($)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );

  const renderMyBonds = () => (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Your Bonds</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search bonds..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-3">Title</th>
              <th className="pb-3">Creator</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Due Date</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBonds.map(bond => (
              <tr key={bond.id} className="border-b cursor-pointer hover:bg-gray-50" onClick={() => handleBondClick(bond)}>
                <td className="py-4">{bond.title}</td>
                <td className="py-4">{bond.creator}</td>
                <td className="py-4">${bond.price}</td>
                <td className="py-4">{bond.dueDate}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${bond.status === 'Active' ? 'bg-green-100 text-green-800' :
                    bond.status === 'Pending Fulfillment' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                    {bond.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderExplore = () => (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Explore Bonds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exploreBonds.map(bond => (
          <div key={bond.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold mb-2">{bond.title}</h3>
            <p className="text-gray-600 mb-2">Creator: {bond.creator}</p>
            <p className="text-indigo-600 font-bold mb-2">${bond.price}</p>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{bond.rating}</span>
            </div>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Account Settings</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
          <input type="password" id="password" name="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Leave blank to keep current password" />
        </div>
        <div>
          <label htmlFor="notifications" className="block text-sm font-medium text-gray-700">Email Notifications</label>
          <select id="notifications" name="notifications" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>All notifications</option>
            <option>Important only</option>
            <option>None</option>
          </select>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-indigo-600">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">Buyer Dashboard</h2>
        </div>
        <nav className="mt-6">
          <a onClick={() => setActiveTab('dashboard')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'dashboard' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
            <TrendingUp className="w-5 h-5 mr-3" />
            Overview
          </a>
          <a onClick={() => setActiveTab('mybonds')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'mybonds' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
            <Gift className="w-5 h-5 mr-3" />
            My Bonds
          </a>
          <a onClick={() => setActiveTab('explore')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'explore' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
            <Search className="w-5 h-5 mr-3" />
            Explore
          </a>
          <a onClick={() => setActiveTab('settings')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'settings' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8 flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Buyer Dashboard</h1>
            <p className="text-gray-600">Welcome back, Buyer!</p>
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
        {activeTab === 'mybonds' && renderMyBonds()}
        {activeTab === 'explore' && renderExplore()}
        {activeTab === 'settings' && renderSettings()}
      </div>

      {/* Bond Details Modal */}
      {showBondDetails && selectedBond && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Bond Details
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        <strong>Title:</strong> {selectedBond.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Creator:</strong> {selectedBond.creator}
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Price:</strong> ${selectedBond.price}
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Due Date:</strong> {selectedBond.dueDate}
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Status:</strong> {selectedBond.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowBondDetails(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyerDashboard;

