import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateReview = () => {
  const {_id, title, coverImage ,rating, year, genre, userEmail, userName, description, trending,  date} = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [updatedRating, setUpdatedRating] = useState(rating);


  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const updatedReview = {
      ...Object.fromEntries(formdata.entries()),
      trending,
      date,
      updatedRating
    };

    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Your review has been updated.", "success");
          navigate("/myReviews");
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="md:pt-24 px-5 md:mx-10 lg:mx-14">
        <div className="max-w-4xl mx-auto mt-10 rounded-xl shadow-xl border border-gray-200 bg-white dark:bg-inherit">
          <div className="bg-gradient-to-bl from-violet-600 to-indigo-600 rounded-t-xl p-5 text-white">
            <h2 className="text-4xl font-bold mb-1">Update Game Review</h2>
            <p className="mb-6">Edit your previous gaming review</p>
          </div>

          <form onSubmit={handleUpdateReview} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 ">
            <div>
              <label className="label font-semibold">Game Title *</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Game Cover Image URL *</label>
              <input
                type="url"
                name="coverImage"
                defaultValue={coverImage}
                
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Rating (1–10) *</label>
              <div className="flex items-center gap-1 flex-wrap">
                {[...Array(10)].map((_, i) => {
                  const star = i + 1;
                  return (
                    <FaStar
                      key={star}
                      onClick={()=> setUpdatedRating(star)}
                      className={`cursor-pointer text-xl ${star <= updatedRating ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  );
                })}
                <input type="hidden" name="rating" value={updatedRating} />
                <span className="ml-2 font-medium">{updatedRating}.0</span>
              </div>
            </div>

            <div>
              <label className="label font-semibold">Publishing Year *</label>
              <input
                type="number"
                name="year"
                defaultValue={year}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Genre *</label>
              <select
                name="genre"
                defaultValue={genre}
                className="select select-bordered w-full"
                required
              >
                <option value="">Select Genre</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
                <option value="Strategy">Strategy</option>
                <option value="Simulation">Simulation</option>
                <option value="Sci-Fi Roguelike">Sci-Fi Roguelike</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold">User Email</label>
              <input
                type="email"
                name="userEmail"
                value={user.email}
                readOnly
                className="input input-bordered w-full bg-gray-100 dark:bg-inherit"
              />
            </div>

            <div className="md:col-span-2">
              <label className="label font-semibold">User Name</label>
              <input
                type="text"
                name="userName"
                value={user.displayName}
                readOnly
                className="input input-bordered w-full bg-gray-100 dark:bg-inherit"
              />
            </div>

            <div className="md:col-span-2">
              <label className="label font-semibold">Review Description *</label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered w-full"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-end gap-4">
              <button type="submit" className="btn bg-violet-600 border-none text-white">Update</button>
              <button type="button" className="btn btn-outline" onClick={() => navigate(-1)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateReview;
