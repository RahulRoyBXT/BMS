import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from 'react-router-dom'
import { MainLayout } from "../layouts/MainLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { SignupAction } from "../actions/signupActions";
import { loginAction } from "../actions/loginAction";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { PublicRoute } from "../components/PublicRoute";
import Loader from "../components/Loader/Loader";
// import Home from "./main/Home";
// import { AuthLayout } from "../layouts/AuthLayout";
// import ManageSeats from "./admin/ManageSeats";

const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <MainLayout />
            </ProtectedRoute>
        ),
        // children: [
        //     { index: true, element: <Home /> },
        //     { path: 'movies', element: <Movies /> },
        //     { path: 'movie/:id', element: <MovieDetails /> },
        //     { path: 'book/:id', element: <BookTickets /> },
        // ],
    },
    {
        path: '/auth',
        element: (
            <PublicRoute>
                <AuthLayout />
            </PublicRoute>
        ),
        children: [
            {
                path: 'login',
                element: <Login />,
                action: loginAction,
            },
            {
                path: 'register',
                element: <Register />,
                action: SignupAction,
            }
        ],
    },
    {
        path: '/loading',
        element: <Loader />
    }
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