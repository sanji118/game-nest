import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddReviews from "../layouts/AddReviews";
import ReviewDetails from "../components/ReviewPage/ReviewDetails";
import AllReviews from "../layouts/AllReviews";
import MyReviews from "../layouts/MyReviews";
import UpdateReview from "../components/ReviewPage/UpdateReview";
import NoContentFound from "../layouts/NoContentFound";
import Login from "../auth/Login";
import Register from "../auth/Register";
import PrivateProvider from "../Provider/PrivateProvider";
import MyWatchlist from "../layouts/MyWatchlist";




export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        loader: ()=> fetch('https://game-nest-server.vercel.app/reviews')
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
        loader: () => fetch('https://game-nest-server.vercel.app/reviews')

    },
    {
        path:'/details/:id',
        element: <ReviewDetails></ReviewDetails>,
        loader: ({params})=> fetch(`https://game-nest-server.vercel.app/reviews/${params.id}`)
    },
    {
        path:'/myReviews',
        element: <PrivateProvider><MyReviews></MyReviews></PrivateProvider>,
        loader: ()=> fetch('https://game-nest-server.vercel.app/reviews')
    },
    {
        path: '/updateReview/:id',
        element: <UpdateReview></UpdateReview>,
        loader: ({params})=> fetch(`https://game-nest-server.vercel.app/reviews/${params.id}`)
    },
    {
        path: '/myWatchlist',
        element: <PrivateProvider><MyWatchlist></MyWatchlist></PrivateProvider>
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