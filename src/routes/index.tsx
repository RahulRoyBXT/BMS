import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from 'react-router-dom'
import { MainLayout } from "../layouts/MainLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { SignupAction } from "../actions/signupActions";
import { loginAction } from "../actions/loginAction";
// import Home from "./main/Home";
// import { AuthLayout } from "../layouts/AuthLayout";
// import ManageSeats from "./admin/ManageSeats";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        // children: [
        //     { index: true, element: <Home /> },
        //     { path: 'movies', element: <Movies /> },
        //     { path: 'movie/:id', element: <MovieDetails /> },
        //     { path: 'book/:id', element: <BookTickets /> },
        // ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
                action:loginAction,
            },
            {
                path: 'register',
                element: <Register />,
                action:SignupAction,
            }
        ],
    },
    // {
    //     path: '/admin',
    //     element: <AdminLayout />,
    //     children: [
    //         { index: true, element: <Dashboard /> },
    //         { path: 'add-movie', element: <AddMovie /> },
    //         { path: 'manage-seats', element: <ManageSeats /> }
    //     ]
    // }
];

const router = createBrowserRouter(routes);

export default router;