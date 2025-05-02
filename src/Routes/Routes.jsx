import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';

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
                Component: CategoryNews
            }

        ]
    }
])

export default router;