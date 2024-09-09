import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@components";
import { authenticationLoader } from "@helpers/index";

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
        ],
        loader: () => authenticationLoader({
            pathRedirect: '/authentication/login',
            requiredAuthentication: true
        })
    },
    {
        path: '/authentication',
        loader: () => authenticationLoader({
            pathRedirect: '/',
            requiredAuthentication: false
        }),
        children: [
            {
                path: 'login',
                index: true,
                lazy: async () => {
                    const Login = await import("@pages/authentication/Login.tsx")
                    return { Component: Login.default }
                },
            }
        ]
    }
])

export default routers;