export const users = [
	{ id: 1, name: 'John Doe', email: 'john@example.com', type: 'issuer' },
	{ id: 2, name: 'Jane Smith', email: 'jane@example.com', type: 'admin' },
	{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', type: 'buyer' },
];

export const getCurrentUser = () => {
	const storedUser = localStorage.getItem('users');
	console.log(storedUser);
	return storedUser ? JSON.parse(storedUser) : null;
};

export const setCurrentUser = (user) => {
	localStorage.setItem('users', JSON.stringify(user));
};

export const clearCurrentUser = () => {
	localStorage.removeItem('users');
};

