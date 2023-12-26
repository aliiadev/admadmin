import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@components";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                lazy: async () => {
                    const Dashboard = await import("@pages/dashboard")
                    return { Component: Dashboard.default }
                },
            },
            {
                path: 'products',
                lazy: async () => {
                    const Products = await import("@pages/products")
                    return { Component: Products.default }
                },
            },
        ]
    },
    {
        path: '/authentication',
        children: [
            {
                path: 'login',
                lazy: async () => {
                    const Login = await import("@pages/authentication/Login.tsx")
                    return { Component: Login.default }
                },
            }
        ]
    }
])

export default routers;