import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Bell, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
	// check if user is logged in
	const token = localStorage.getItem("promisebond_token");
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState(false);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem("currentUser");
		window.location.href = "/";
	};

	const locallyUser = localStorage.getItem("currentUser");
	const user = locallyUser ? JSON.parse(locallyUser) : null;

	// useEffect(() => {
	// 	if (token) {
	// 		fetch("http://localhost:5000/api/user", {
	// 			method: "GET",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				Authorization: `Bearer ${token}`,
	// 			},
	// 		})
	// 			.then((response) => response.json())
	// 			.then((data) => {
	// 				const { status } = data;
	// 				if (status !== "success") {
	// 					localStorage.removeItem("promisebond_token");
	// 					setLoading(false);
	// 				} else {
	// 					setUsers(true);
	// 					setLoading(false);
	// 				}
	// 			})
	// 			.catch((error) => console.error(error));
	// 	} else {
	// 		setLoading(false);
	// 		setUsers(false);
	// 	}
	// }, [token]);

	return (
		<nav className="bg-white border-b">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex items-center">
						<img src="/logo.webp" width={40} height={40} alt="Logo" />
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link to="/" className="text-gray-700 hover:text-primary-500">
							Home
						</Link>

						<Link to="/about" className="text-gray-700 hover:text-[#1dbf73]">
							About
						</Link>

						<Link
							to="/how-it-works"
							className="text-gray-700 hover:text-[#1dbf73]"
						>
							How It Works
						</Link>

						{/* Auth Buttons */}
						{!loading && user && (
							<div className="flex items-center space-x-4">
								<div className="flex items-center gap-4">
									<button
										className="flex items-center gap-2"
										onClick={() => setIsDropdownOpen(!isDropdownOpen)}
									>
										<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
											<User className="w-4 h-4 text-gray-500" />
										</div>
										<ChevronDown className="w-4 h-4 text-gray-500" />
									</button>
									{isDropdownOpen && (
										<div className="absolute  top-12 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
											<div className="py-2">
												<Link
													onClick={() => setIsDropdownOpen(false)}
													to="/dashboard"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												>
													Dashboard
												</Link>
												<button
													onClick={handleLogout}
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												>
													Logout
												</button>
											</div>
										</div>
									)}
								</div>
								{/* dropdown menu dashboard and logout */}
							</div>
						)}
						{!loading && !user && (
							<>
								<Link
									to={"/login"}
									className="text-gray-700 hover:text-[#1dbf73]"
								>
									Sign in
								</Link>
								<Link
									to={"/register"}
									className="border border-[#1dbf73] text-[#1dbf73] px-4 py-2 rounded-lg hover:bg-[#1dbf73] hover:text-white transition-colors"
								>
									Join Now
								</Link>
							</>
						)}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6 text-gray-600" />
							) : (
								<Menu className="h-6 w-6 text-gray-600" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<Link
								to="/"
								className="block px-3 py-2 text-gray-700 hover:bg-primary-500 rounded-md"
							>
								Home
							</Link>

							<a
								to="/how-it-works"
								className="block px-3 py-2 text-gray-700 hover:bg-primary-500 rounded-md"
							>
								How It Works
							</a>
							<a
								to="/about"
								className="block px-3 py-2 text-gray-700 hover:bg-primary-500 rounded-md"
							>
								About
							</a>
							<a
								to="/login"
								className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-500 rounded-md"
							>
								Sign in
							</a>
							<button className="block w-full text-center px-3 py-2 border border-primary-500 text-primary-500 rounded-md hover:bg-primary-50">
								Join
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
