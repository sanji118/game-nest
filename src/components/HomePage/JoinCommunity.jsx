import { useState } from "react";
import { FaEye, FaPenFancy, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const JoinCommunity = () => {
  const navigate = useNavigate();
  const [shareClicked, setShareClicked] = useState(false);



  const handleJoin = () => {
    navigate('/login')
  };

  const handleShareClick = () => {
    Swal.fire({
      title: 'Want to write a review?',
      text: "Log in to start sharing your gaming experiences!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#10B981',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log In',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  };
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Join Our Gaming Community</h2>
      <p className="text-lg mb-12">
        Connect with fellow gamers, share your experiences, and discover your next favorite game.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
        
        <div className="card bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="bg-green-400 text-black rounded-full p-4 mb-4 text-3xl">
              <FaEye />
            </div>
            <h3 className="card-title">Discover</h3>
            <p>Find new games based on honest reviews from real players</p>
          </div>
        </div>

        
        <div className="card bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl">
          <div className="card-body items-center text-center">
            <button onClick={handleShareClick}><div className="bg-green-400 text-black rounded-full p-4 mb-4 text-3xl">
              <FaPenFancy />
            </div></button>
            <h3 className="card-title">Share</h3>
            <p>Write reviews for games you've played and help others decide</p>
          </div>
        </div>

        
        <div className="card bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="bg-green-400 text-black rounded-full p-4 mb-4 text-3xl">
              <FaUsers />
            </div>
            <h3 className="card-title">Connect</h3>
            <p>Join discussions and connect with gamers who share your interests</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleJoin}
        className="btn bg-green-400 text-white hover:bg-green-300 px-8 py-2 border-none shadow-none rounded-lg"
      >
        Join Now
      </button>
    </section>
  );
};

export default JoinCommunity;
