import Products from "../components/admin/products/Products";
import AllBonds from "../components/home/AllPromise";
// import Marketplace from "../components/home/MarketPlace";
import MarketplaceDetails from "../components/home/MarketplaceDetails";
import HowItWorks from "../components/layout/howItWork";
import NotMatch from "../components/notMatch/NotMatch";
import AuthGuard from "../context/AuthGuard";
import About from "../pages/about/About";
import AdminDashboard from "../pages/admin/dashboard/Dashboard";
import BondDetails from "../pages/bondDetails/BondDetails";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Marketplace from "../pages/marketplace/MarketPlace";
import AccountDetail from "../pages/myAccount/accountDetails/AccountDetail";
import Address from "../pages/myAccount/address/Address";
import ChangePassword from "../pages/myAccount/changePassword/ChangePassword";
import Dashboard from "../pages/myAccount/dashboard/Dashboard";
import Download from "../pages/myAccount/download/Download";
import Order from "../pages/myAccount/order/Order";
import Register from "../pages/register/Register";

const publicRoute = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/how-it-works",
        element: <HowItWorks />
    },
    {
        path: "/all-promise-bonds",
        element: <AllBonds />
    },
    { path: "/bonds/:id", element: <BondDetails /> },
    { path: "/marketplace", element: <Marketplace /> },
    { path: "/marketplace/:id", element: <MarketplaceDetails /> },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/admin",
        element: <Dashboard />
    },
]

const loggedInRoutes = [
    { path: "/dashboard", element: <Dashboard /> },

];

const adminRoute = [
    { path: "/admin/dashboard", element: <AdminDashboard /> },
];

const routes = [
    {
        element: (
            <AuthGuard>
                <AdminDashboard />
            </AuthGuard>
        ),
        children: loggedInRoutes
    },
    ...publicRoute,
    { path: "*", element: <NotMatch /> },
]
export default routes;