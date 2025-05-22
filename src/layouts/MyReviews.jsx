import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NoContentFound from "./NoContentFound";
import MyReviewCard from "../components/MyReviewCard";
import { FiPlus } from "react-icons/fi";


const MyReviews = () => {
  const reviews = useLoaderData();
  const {user} = useContext(AuthContext);
  const myReviews = reviews.filter(review=>{
    return review.userEmail === user.email;
  })
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-6 md:pt-32 px-5 md:px-10 lg:px-14">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600">My Reviews</h2>
          <button className="btn bg-violet-600 hover:bg-purple-700 text-white">
            <FiPlus className="mr-2" /> Add New Review
          </button>
        </div>
        {
          myReviews.length === 0 ? (
            <NoContentFound></NoContentFound>
          ) : (
            myReviews.map(review =>(
              <MyReviewCard key={review._id} review={review}></MyReviewCard>
            ))
          )
        }
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MyReviews