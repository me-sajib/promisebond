
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Gift, Bell, Search, Star, Settings, LogOut, Users, LogOutIcon } from 'lucide-react';
import Billing from '../../../components/buyer/Billing';
import Profile from '../../../components/buyer/Profile';
import Setting from '../../../components/buyer/Settings';
import PurchasedBonds from '../../../components/buyer/PurchaseBond';


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

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  }
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-gray-800">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">Buyer Dashboard</h2>
        </div>
        <nav className="mt-6">
          <a onClick={() => setActiveTab('overview')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'overview' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
            <TrendingUp className="w-5 h-5 mr-3" />
            Overview
          </a>
          <a onClick={() => setActiveTab('purchases')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'purchases' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
            <Gift className="w-5 h-5 mr-3" />
            Purchased Promise Bond
          </a>
          <a onClick={() => setActiveTab('billing')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'billing' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
            <DollarSign className="w-5 h-5 mr-3" />
            Billing & Payments
          </a>
          <a onClick={() => setActiveTab('profile')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'profile' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
            <Users className="w-5 h-5 mr-3" />
            Profile
          </a>
          <a onClick={() => setActiveTab('settings')} className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'settings' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </a>
          <button onClick={handleLogout} className={`flex items-center px-6 py-3 cursor-pointer text-gray-400`}>
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
        {activeTab === 'overview' && renderDashboard()}
        {activeTab === 'purchases' && <PurchasedBonds />}
        {activeTab === 'billing' && <Billing />}
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'settings' && <Setting />}
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

