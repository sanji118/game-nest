import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import { format } from "date-fns";
import Swal from "sweetalert2";

const AddReviews = () => {
  const [rating, setRating] = useState(1);
  const {user} = useContext(AuthContext);
  const submitted = new Date().toLocaleString();

  const handleAddReview = e =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const coverImage = form.coverUrl.value;
    const rating = parseFloat(form.rating.value);
    const year = form.year.value;
    const genre = form.genre.value;
    const userEmail = form.email.value;
    const userName = form.username.value;
    const description = form.description.value;
    const trending = rating >= 8.5;
    const date = format(submitted, "d MMMM yyyy")
    const review = {title, coverImage ,rating, year, genre, userEmail, userName, description, trending,  date};
    

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      Swal.fire({
        title: "Success!",
        text: "Your review has been submitted.",
        icon: "success",
        draggable: true
      });
      form.reset();
    })
  }

  return (
    <>
      <Navbar />
      <div className="md:pt-24 px-5 md:mx-10 lg:mx-14">
        <div className="max-w-4xl mx-auto mt-10 rounded-xl shadow-xl border border-gray-200 bg-white">
          <div className="bg-gradient-to-bl from-violet-600 to-indigo-600 rounded-t-xl p-5 text-white">
            <h2 className="text-4xl font-bold mb-1">Add New Game Review</h2>
            <p className="mb-6">Share your gaming experience with the community</p>
          </div>

          <form onSubmit={handleAddReview} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 dark:bg-gray-400">
           
            <div>
              <label className="label font-semibold">Game Title *</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. The Legend of Zelda"
                className="input input-bordered w-full"
                required
              />
            </div>

            
            <div>
              <label className="label font-semibold">Game Cover Image URL *</label>
              <input
                type="url"
                name="coverUrl"
                placeholder="https://example.com/game-cover.jpg"
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
                      className={`cursor-pointer text-xl ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  );
                })}
                <input type="hidden" name="rating" value={rating} required />
                <span className="ml-2 font-medium">{rating}.0</span>
              </div>
            </div>

            
            <div>
              <label className="label font-semibold">Publishing Year *</label>
              <input
                type="number"
                name="year"
                placeholder="2025"
                className="input input-bordered w-full"
                required
              />
            </div>

            
            <div>
              <label className="label font-semibold">Genre *</label>
              <select name="genre" className="select select-bordered w-full" required>
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
                name="email"
                value={user.email}
                className="input input-bordered w-full bg-gray-100 dark:bg-gray-900"
                readOnly
              />
            </div>

            
            <div className="md:col-span-2">
              <label className="label font-semibold">User Name</label>
              <input
                type="text"
                name="username"
                value={user.displayName}
                className="input input-bordered w-full bg-gray-100 dark:bg-gray-900"
                readOnly
              />
            </div>

            
            <div className="md:col-span-2">
              <label className="label font-semibold">Review Description *</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                placeholder="Share your thoughts about the game..."
                rows="5"
                required
              ></textarea>
            </div>

            
            <div className="md:col-span-2 flex justify-end gap-4">
              <button type="submit" className="btn bg-violet-600 border-none text-white">
                Submit Review
              </button>
              <button type="button" className="btn btn-outline">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddReviews;
