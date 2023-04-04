import { createBrowserRouter } from "react-router-dom";
import getStoredCart from "../functions/getShopingCart";
import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";
import OrderReview from "../pages/OrderReview";
import Shop from "../pages/Shop";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/",
                element: <Shop/>
            },
            {
                path: "/order",
                element: <Order/>,
                loader: getStoredCart
            },
            {
                path: "/order-review",
                element: <OrderReview/>
            },
            {
                path: "/manage-inventory",
                element: <Inventory/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "*",
                errorElement: <NotFound/>,
            }
        ]
    }
])
export default Routes