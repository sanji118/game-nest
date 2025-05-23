import React from 'react'
import { FiBookmark } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const EmptyWatchlist = () => {
  return (
    <div className="bg-base-100 shadow-md rounded-lg p-8 text-center w-5/6 mx-auto">
        <div className="text-5xl text-gray-400 mb-4 mx-auto w-fit">
          <FiBookmark />
        </div>
        <h3 className="text-xl font-semibold mb-2">Your watchlist is empty</h3>
        <p className="text-gray-600 mb-4">
         Add games to your watchlist by clicking "Add to Watchlist" on review pages.
        </p>
        <Link to={'/reviews'}><button className="btn bg-purple-600 hover:bg-purple-700 text-white">
          Browse Reviews
        </button></Link>
    </div>
  )
}

export default EmptyWatchlist