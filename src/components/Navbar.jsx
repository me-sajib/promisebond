import React, { useState } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Check user state
	const locallyUser = localStorage.getItem("currentUser");
	const user = locallyUser ? JSON.parse(locallyUser) : null;
	const userRole = user?.role; // "issuer", "buyer", or undefined

	const handleLogout = () => {
		localStorage.removeItem("currentUser");
		window.location.href = "/";
	};

	// Common menu items
	const commonMenu = [
		{ name: "Home", path: "/" },
		{ name: "Promise Bonds", path: "/promise-bonds" },
		{ name: "Market Place", path: "/marketplace" },
		{ name: "How It Works", path: "/how-it-works" }
	];

	// Additional menus for Issuer
	const issuerMenu = [
		{ name: "Dashboard", path: "/dashboard" },
		{ name: "Issue Promise Bond", path: "/dashboard/issue" },
		{ name: "Issued Promise Bonds", path: "/dashboard/issued" },
		{ name: "Billing & Payments", path: "/dashboard/billing" },
		{ name: "Profile", path: "/dashboard/profile" },
		{ name: "Settings", path: "/dashboard/settings" },
		{ name: "Sign Off", action: handleLogout },
	];

	// Additional menus for Buyer
	const buyerMenu = [
		{ name: "Dashboard", path: "/dashboard" },
		{ name: "Purchased Promise Bonds", path: "/dashboard/purchased" },
		{ name: "Billing & Payments", path: "/dashboard/billing" },
		{ name: "Profile", path: "/dashboard/profile" },
		{ name: "Settings", path: "/dashboard/settings" },
		{ name: "Sign Off", action: handleLogout },
	];

	// Menu items based on user role
	const userMenu = userRole === "issuer" ? issuerMenu : buyerMenu;

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
						{commonMenu.map((item, index) => (
							<>
								<Link
									key={index}
									to={item.path}
									className="text-gray-700 hover:text-primary-500"
								>
									{item.name}
								</Link>

							</>
						))}

						{/* Auth Buttons */}
						{user ? (
							<>
								<button>Sign off</button>
							</>
						) : (
							<>
								<Link
									to="/login"
									className="text-gray-700 hover:text-primary-500"
								>
									Sign In
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
							{commonMenu.map((item, index) => (
								<Link
									key={index}
									to={item.path}
									className="block px-3 py-2 text-gray-700 hover:bg-primary-500 rounded-md"
								>
									{item.name}
								</Link>
							))}
							{user &&
								userMenu.map((item, index) =>
									item.action ? (
										<button
											key={index}
											onClick={item.action}
											className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-500 rounded-md"
										>
											{item.name}
										</button>
									) : (
										<Link
											key={index}
											to={item.path}
											className="block px-3 py-2 text-gray-700 hover:bg-primary-500 rounded-md"
										>
											{item.name}
										</Link>
									)
								)}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
