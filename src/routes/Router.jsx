import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddReviews from "../layouts/AddReviews";
import ReviewDetails from "../components/ReviewDetails";
import AllReviews from "../layouts/AllReviews";
import MyReviews from "../layouts/MyReviews";
import UpdateReview from "../components/UpdateReview";
import GameWatchList from "../layouts/GameWatchList";
import NoContentFound from "../layouts/NoContentFound";
import Login from "../auth/Login";
import Register from "../auth/Register";

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
    },
    {
        path: '/addReview',
        Component: AddReviews,
    },
    {
        path: '/review/:id',
        Component: ReviewDetails,
    },
    {
        path: '/reviews',
        Component: AllReviews,
    },
    {
        path:'/myReviews',
        Component: MyReviews,
    },
    {
        path: '/updateReview/:id',
        Component: UpdateReview
    },
    {
        path: '/myWatchlist',
        Component: GameWatchList
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