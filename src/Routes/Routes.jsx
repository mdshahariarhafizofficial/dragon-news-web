import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import Auth from '../layouts/Auth';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NewsDetails from '../Pages/NewsDetails';

const router = createBrowserRouter([
    {
        path: "",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch('../news.json'),
                hydrateFallbackElement: <p>Loading.....</p>
            },

        ]
    },
    {
        path: '/news-details/:id',
        Component: NewsDetails,
        loader: () => fetch('../news.json'),
        hydrateFallbackElement: <p>Loading.....</p>
    },

    {
        path: "/auth",
        Component: Auth,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: "/*",
        element: <p>404 Error</p>
    }

])

export default router;