import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddReviews from "../layouts/AddReviews";
import ReviewDetails from "../components/ReviewPage/ReviewDetails";
import AllReviews from "../layouts/AllReviews";
import MyReviews from "../layouts/MyReviews";
import UpdateReview from "../components/ReviewPage/UpdateReview";
import GameWatchList from "../layouts/GameWatchList";
import NoContentFound from "../layouts/NoContentFound";
import Login from "../auth/Login";
import Register from "../auth/Register";
import PrivateProvider from "../Provider/PrivateProvider";




export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        loader: ()=> fetch('http://localhost:5000/reviews')
    },
    {
        path: '/addReview',
        element: <PrivateProvider><AddReviews></AddReviews></PrivateProvider>
    },
    {
        path: '/review/:id',
        Component: ReviewDetails,
    },
    {
        path: '/reviews',
        element: <AllReviews></AllReviews>,
        loader: ()=> fetch('http://localhost:5000/reviews')
    },
    {
        path:'/details/:id',
        element: <ReviewDetails></ReviewDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)
    },
    {
        path:'/myReviews',
        element: <PrivateProvider><MyReviews></MyReviews></PrivateProvider>
    },
    {
        path: '/updateReview/:id',
        element: <UpdateReview></UpdateReview>
    },
    {
        path: '/myWatchlist',
        element: <PrivateProvider><GameWatchList></GameWatchList></PrivateProvider>
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register,
    },
    {
        path: '*',
        Component : NoContentFound
    }
])