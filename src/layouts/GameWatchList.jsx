import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaTrash } from 'react-icons/fa';
import { format } from 'date-fns';
import EmptyWatchlist from '../components/EmptyWatchlist';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock function to get current user email (replace with real auth context or logic)
const getCurrentUserEmail = () => {
  // Example: from Firebase Auth or your auth provider
  return localStorage.getItem('userEmail') || null;
};

const MyWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userEmail = getCurrentUserEmail();

  useEffect(() => {
    if (!userEmail) {
      // if no logged-in user, redirect to login
      navigate('/login');
      return;
    }
    
    // Fetch user's watchlist data from backend or localStorage
    // For demo, using localStorage with key 'watchlist' (replace with real API call)
    const storedList = JSON.parse(localStorage.getItem('watchlist')) || [];

    // Filter watchlist by current user email only
    const userWatchlist = storedList.filter(item => item.userEmail === userEmail);

    setWatchlist(userWatchlist);
    setLoading(false);
  }, [userEmail, navigate]);

  const handleRemove = (id) => {
    // Remove from watchlist (implement backend call or localStorage update here)
    const updatedList = watchlist.filter(item => item.id !== id);
    setWatchlist(updatedList);

    // Also update localStorage (for demo only)
    const allItems = JSON.parse(localStorage.getItem('watchlist')) || [];
    const filteredAll = allItems.filter(item => item.id !== id);
    localStorage.setItem('watchlist', JSON.stringify(filteredAll));
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (watchlist.length === 0) {
    return <EmptyWatchlist />;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 mt-36 bg-white rounded-xl shadow-lg mb-20">
        <h1 className="text-3xl font-bold mb-6 text-center">My Game Watchlist</h1>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-violet-600 text-white">
            <tr>
              <th className="py-3 px-5 text-left">Title</th>
              <th className="py-3 px-5 text-left">Genre</th>
              <th className="py-3 px-5 text-left">Year</th>
              <th className="py-3 px-5 text-left">Rating</th>
              <th className="py-3 px-5 text-left">Date Added</th>
              <th className="py-3 px-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map(item => (
              <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-5">{item.title}</td>
                <td className="py-3 px-5">{item.genre}</td>
                <td className="py-3 px-5">{item.year}</td>
                <td className="py-3 px-5 flex items-center gap-1">
                  {item.rating} <FaStar className="text-yellow-400" />
                </td>
                <td className="py-3 px-5">{format(new Date(item.dateAdded), "d MMM yyyy")}</td>
                <td className="py-3 px-5 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Remove from Watchlist"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyWatchlist;
