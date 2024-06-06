import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import DetailProduct from "./pages/details";
import Layout from "./components/Layouts";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/details/:id",
                element: <DetailProduct />
            },
        ]
    }
])