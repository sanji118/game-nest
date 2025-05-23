import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiPlus } from "react-icons/fi";
import NoReviewCard from "../components/NoReviewCard";
import MyReviewTable from "../components/MyReviewTable";


const MyReviews = () => {
  const {user} = useContext(AuthContext);
  const myReviews = useLoaderData()?.filter(review=>{
    return review.userEmail === user.email;
  })
  const [reviews, setReviews] = useState(myReviews);
  
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
          reviews.length === 0 ? (
            <NoReviewCard></NoReviewCard>
          ) : (
            reviews.map(review =>(
              <MyReviewTable 
              key={review._id}
              setReviews={setReviews} 
              review={review}/>
            ))
          )
        }
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MyReviews