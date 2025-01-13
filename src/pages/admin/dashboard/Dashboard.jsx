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



	return (
		<div>

			{currentUser?.role === 'issuer' && <IssuerDashboard userId={currentUser?.id} />}
			{currentUser?.role === 'admin' && <AdminDashboard userId={currentUser?.id} />}
			{currentUser?.role === 'buyer' && <BuyerDashboard userId={currentUser?.id} />}
		</div>
	)
}

