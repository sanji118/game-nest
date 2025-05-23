import { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmptyWatchlist from '../components/EmptyWatchlist';
import { FiEye, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const MyWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const { user } = useContext(AuthContext) 

  useEffect(() => {
    if (user?.email) {
      fetch(`https://game-nest-server.vercel.app/watchlist?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setWatchlist(data);
        });
    }
  }, [user]);

  const handleRemove = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-nest-server.vercel.app/watchlist/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Item removed from watchlist.", "success");
              setWatchlist(prev => prev.filter(item => item._id !== id));
            }
          });
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className='pt-36 bg-gray-50 dark:bg-inherit'>{
        watchlist.length === 0 ? (
          <EmptyWatchlist />
        ) : (
          <div className="max-w-6xl mx-auto p-4 overflow-x-auto">
            <table className="table w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-left">
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
                {watchlist.map((item) => (
                  <tr key={item._id} className="border-t border-gray-300 hover:bg-gray-700">
                    <td className="p-3">
                      <img src={item.coverImage} alt={item.title} className="w-16 h-24 object-cover rounded" />
                    </td>
                    <td className="p-3 font-semibold">{item.title}</td>
                    <td className="p-3">{item.genre}</td>
                    <td className="p-3">{item.year}</td>
                    <td className="p-3">
                      <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">{item.rating}</span>
                    </td>
                    <td className="p-3">{item.userEmail?.split('@')[0]}</td>
                    <td className="p-3">{format(new Date(item.date), "d MMM yyyy")}</td>
                    <td className="p-3 flex flex-col gap-3">
                      <Link to={`/details/${item._id}`}>
                        <button className="btn btn-sm bg-violet-600 text-white w-full">
                          <FiEye className="mr-1" /> Details
                        </button>
                      </Link>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="btn btn-sm border border-red-600 text-red-600"
                      >
                        <FiTrash2 className="mr-1" /> Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }</div>
      <Footer />
    </>
  );
};

export default MyWatchlist;
