import { useState, useEffect } from 'react'
import IssuerDashboard from '../components/IssuerDashboard'
import AdminDashboard from '../components/AdminDashboard'
import BuyerDashboard from '../components/BuyerDashboard'
import { getCurrentUser, setCurrentUser, clearCurrentUser } from '../../../hooks/UserManagement';
export default function DashboardPage() {
	const userStor = localStorage.getItem('currentUser');
	const users = JSON.parse(userStor);
	const [currentUser, setCurrentUserState] = useState(null);

	useEffect(() => {
		if (users) {
			setCurrentUserState(users);
		} else {
			window.location.href = '/';
		}
	}, []);

	const handleLogout = () => {
		setCurrentUserState(null);
		localStorage.removeItem('currentUser');
		window.location.href = '/';
	};

	return (
		<div>
			<div className="mb-4 p-4 bg-gray-100 flex justify-between items-center">
				<div>
					<span className="font-bold">Current User: </span>
					{currentUser && currentUser?.name + ' (' + currentUser?.role + ')'}
				</div>
				<button
					onClick={handleLogout}
					className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
				>
					Logout
				</button>
			</div>
			{currentUser?.role === 'issuer' && <IssuerDashboard userId={currentUser?.id} />}
			{currentUser?.role === 'admin' && <AdminDashboard userId={currentUser?.id} />}
			{currentUser?.role === 'buyer' && <BuyerDashboard userId={currentUser?.id} />}
		</div>
	)
}

