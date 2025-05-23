import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmptyWatchlist from '../components/EmptyWatchlist';
import { FiEye, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';


const MyWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/watchlist')
    .then(res => res.json())
    .then(data => {
      setWatchlist(data);
    })
  }, [])
  console.log(watchlist)
  
  return (
    <>
      <Navbar />
      <div className='pt-36 bg-gray-50'>{
        watchlist.length === 0 ? (
          <EmptyWatchlist/>
        ) : (
          <div className="max-w-6xl mx-auto p-4">
            {
              watchlist.map(item => (
                <div className="flex flex-col md:flex-row bg-base-100 rounded-xl shadow-md overflow-hidden border border-gray-200 mb-5">
      

                  <div className="relative md:w-1/3 w-full h-64 md:h-auto">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                      <span className="bg-green-600 px-2 py-1 rounded text-sm font-semibold ">{item.rating}</span>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                    </div>
                  </div>

                  
                  <div className="p-4 flex flex-col justify-between md:flex-row md:items-center w-full gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="badge badge-neutral">{item.genre}</span>
                        <p className="text-sm text-gray-500">{item.year}</p>
                      </div>
                      <p className="text-sm opacity-70 font-semibold">
                        Reviewed by {item.userEmail?.split("@")[0]}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {format(new Date(item.date), "d MMMM yyyy")}
                      </p>
                    </div>

                    


                    <div className="flex flex-col gap-2 md:w-40">
                      <Link to={`/details/${item._id}`}>
                        <button className="btn btn-sm bg-violet-600 text-white w-full">
                          <FiEye className="mr-2" />Details
                        </button>
                      </Link>
                      <button onClick={()=> handleDelete(_id)} className="btn btn-sm bg-red-600 text-white w-full">
                        <FiTrash2 className="mr-2" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }</div>
      <Footer />
    </>
  );
};

export default MyWatchlist;
