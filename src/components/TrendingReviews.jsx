import { Link } from "react-router-dom";

const TrendingReviews = ({ reviews }) => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {reviews.map((review) => (
        <label key={review._id} className="swap swap-flip border border-gray-300 rounded-lg shadow cursor-pointer">
            <input type="checkbox" className="w-full"/>
          {/** swap-off */}
          <div className="swap-off p-4">
            <h2 className="text-xl text-violet-500 font-semibold">{review.title}</h2>
            <p className="text-gray-600">{review.genre}</p>
            <p>{review.developer}</p>
            <Link to={`/details/${review._id}`}>
              <button className="text-violet-500 hover:underline font-semibold mt-2">View Details</button>
            </Link>
          </div>

          {/** swap-on */}
          <div className="swap-on text-white p-4 w-72 rounded-lg shadow h-44 flex items-center justify-center font-bold text-xl" style={{
                backgroundImage: `url(${review.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}
            >
                <p>User: {review.userEmail.split("@")[0]}</p>
            </div>
        </label>
      ))}
    </div>
  );
};

export default TrendingReviews;
