
import Layout from "../components/layout/Layout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Dashboard from "../pages/myAccount/dashboard/Dashboard";
import Order from "../pages/myAccount/order/Order";
import Home from "../pages/home/Home";
import MyAccount from "../pages/myAccount/MyAccount";

import Replace from "../pages/replace/Replace";
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
        path: "/about",
        element: <About />
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

