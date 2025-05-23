import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

const MyReviewTable = ({ review, setReviews }) => {
  const {
    _id,
    coverImage,
    title,
    description,
    rating,
    year,
    genre,
    userEmail,
    date
  } = review;

  const userName = userEmail?.split("@")[0] || "";

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-nest-server.vercel.app/reviews/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success"
              });
              setReviews(prev => prev.filter(r => r._id !== id));
            }
          })
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto p-4 overflow-x-auto">
      <table className="table w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-center">
            <th className="p-3">Cover Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Genre</th>
            <th className="p-3">Year</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Reviewed By</th>
            <th className="p-3">Date</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr key={_id} className="border-t border-gray-300 hover:bg-gray-700">
            <td className="p-3">
              <img src={coverImage} alt={title} className="w-16 h-24 object-cover rounded" />
            </td>
            <td className="p-3 font-semibold">{title}</td>
            <td className="p-3">{genre}</td>
            <td className="p-3">{year}</td>
            <td className="p-3">
              <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">{rating}</span>
            </td>
            <td className="p-3">{userEmail?.split('@')[0]}</td>
            <td className="p-3">{format(new Date(date), "d MMM yyyy")}</td>
            <td className="p-3 flex flex-col gap-3">
              <Link to={`/details/${_id}`}>
                <button className="btn btn-sm bg-violet-600 text-white w-full">
                  <FiEye className="mr-1" /> Details
                </button>
              </Link>
              <Link to={`/updateReview/${_id}`}><button class="btn btn-sm bg-yellow-500 text-white w-full flex items-center justify-center"><FiEdit/> Edit</button></Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-sm border bg-red-600 text-white"
              >
                <FiTrash2 className="mr-1" /> Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyReviewTable;
