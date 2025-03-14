
import { Link, Outlet, useLocation } from "react-router-dom"

import "./MyAccount.css"

const MyAccount = () => {
    const location = useLocation();

    return (
        <>
            <div className="account">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb">
                                <h2 className="text-white"> MY ACCOUNT </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="account-dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ul>
                                <li> <Link to="dashboard" className={location.pathname === "/dashboard" ? "active" : ""}> dashboard </Link></li>
                                <li> <Link to="orders" className={location.pathname === "/orders" ? "active" : ""}> orders </Link></li>
                                <li> <Link to="downloads" className={location.pathname === "/downloads" ? "active" : ""}> downloads </Link></li>
                                <li> <Link to="address" className={location.pathname === "/address" ? "active" : ""}> address </Link></li>
                                <li> <Link to="account-details" className={location.pathname === "/account-details" ? "active" : ""}> account details </Link></li>
                                <li> <Link to="change-password" className={location.pathname === "/change-password" ? "active" : ""}> change password </Link></li>
                                <li> <Link to="products" className={location.pathname === "/products" ? "active" : ""}>Products </Link></li>
                                <li> <Link to="logout"> log out </Link></li>
                            </ul>
                        </div>
                        <div className="col-md-9 pl-3 custom-padding  ">
                            <Outlet />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MyAccount



