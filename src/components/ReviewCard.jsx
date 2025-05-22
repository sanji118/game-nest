import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const ReviewCard = ({review}) => {
    const{ user} = useContext(AuthContext);
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

    return (<>

        <div className="group transition-all duration-300 ease-in-out max-w-sm hover:max-w-md bg-base-100 rounded-xl shadow-md overflow-hidden border border-gray-200 ">
            <div className="relative">
                <img
                src={coverImage}
                alt={title}
                className="w-full h-48"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                {rating}
                </div>
            </div>

            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-purple-700">
                    {title}
                </h2>
                <p className="text-sm text-gray-500">{year}</p>
                </div>

                <div>
                <span className="badge badge-neutral">{genre}</span>
                </div>
                <p className='text-sm opacity-70 font-semibold'>
                    Reviewed by { userName}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3 py-2">
                {description?.slice(0, 100)}.....
                </p>

                <Link to={`/details/${_id}`}>
                <button className="btn bg-violet-600 text-white btn-block rounded-lg">
                    Explore Details
                </button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default ReviewCard;