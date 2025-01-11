import Products from "../components/admin/products/Products";
import NotMatch from "../components/notMatch/NotMatch";
import AuthGuard from "../context/AuthGuard";
import About from "../pages/about/About";
import AdminDashboard from "../pages/admin/dashboard/Dashboard";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import AccountDetail from "../pages/myAccount/accountDetails/AccountDetail";
import Address from "../pages/myAccount/address/Address";
import ChangePassword from "../pages/myAccount/changePassword/ChangePassword";
import Dashboard from "../pages/myAccount/dashboard/Dashboard";
import Download from "../pages/myAccount/download/Download";
import MyAccount from "../pages/myAccount/MyAccount";
import Order from "../pages/myAccount/order/Order";
import Register from "../pages/register/Register";
import Replace from "../pages/replace/Replace";
import Shop from "../pages/shop/Shop";

const publicRoute = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about-us",
        element: <About />
    },
    {
        path: "/replace-rule",
        element: <Replace />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
        path: "/cart",
        element: <Cart />
    },
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
    { path: "/products", element: <Products /> },
    { path: "/orders", element: <Order /> },
    { path: "/downloads", element: <Download /> },
    { path: "/address", element: <Address /> },
    { path: "/account-details", element: <AccountDetail /> },
    { path: "/change-password", element: <ChangePassword /> },
];

const adminRoute = [
    { path: "/admin/dashboard", element: <AdminDashboard /> },
];

const routes = [
    {
        element: (
            <AuthGuard>
                <MyAccount />
            </AuthGuard>
        ),
        children: loggedInRoutes
    },
    ...publicRoute,
    { path: "*", element: <NotMatch /> },
]
export default routes;