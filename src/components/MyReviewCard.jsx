import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

const MyReviewCard = ({ review }) => {
  const {
    _id,
    coverImage,
    title,
    description,
    rating,
    year,
    genre,
    userEmail
  } = review;

  const userName = userEmail?.split("@")[0] || "";
  const handleDelete = id =>{
    console.log(id)
  }

  return (
    <div className="flex flex-col md:flex-row bg-base-100 rounded-xl shadow-md overflow-hidden border border-gray-200 mb-5">
      

      <div className="relative md:w-1/3 w-full h-64 md:h-auto">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
          <span className="bg-green-600 px-2 py-1 rounded text-sm font-semibold ">{rating}</span>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </div>

      
      <div className="p-4 flex flex-col justify-between md:flex-row md:items-center w-full gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="badge badge-neutral">{genre}</span>
            <p className="text-sm text-gray-500">{year}</p>
          </div>
          <p className="text-sm opacity-70 font-semibold">
            Reviewed by {userName}
          </p>
          <p className="text-sm text-gray-600 line-clamp-3">
            {description?.slice(0, 100)}...
          </p>
        </div>

        


        <div className="flex flex-col gap-2 md:w-40">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-sm bg-violet-600 text-white w-full">
              <FiEye className="mr-2" />Details
            </button>
          </Link>
          <Link to={`/updateReview/${_id}`}><button className="btn btn-sm bg-yellow-500 text-white w-full">
            <FiEdit className="mr-2" /> Edit
          </button></Link>
          <button onClick={()=> handleDelete(_id)} className="btn btn-sm bg-red-600 text-white w-full">
            <FiTrash2 className="mr-2" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
