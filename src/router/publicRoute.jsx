
import Layout from "../components/layout/Layout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Dashboard from "../pages/myAccount/dashboard/Dashboard";
import Order from "../pages/myAccount/order/Order";
import Home from "../pages/home/Home";
import MyAccount from "../pages/myAccount/MyAccount";

import Replace from "../pages/replace/Replace";
import Download from "../pages/myAccount/download/Download";
import Address from "../pages/myAccount/address/Address";
import AccountDetail from "../pages/myAccount/accountDetails/AccountDetail";
import ChangePassword from "../pages/myAccount/changePassword/ChangePassword";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Products from "../components/admin/products/Products";

// create public Router 
const publicRoute = [
  {
    element: <Layout />,
    children: [
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
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]

  }
]





// export default router 
export default publicRoute;

