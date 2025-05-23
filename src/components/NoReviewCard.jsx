import { Link } from 'react-router-dom'

const NoReviewCard = () => {
  return (
    <div className="bg-base-100 dark:border shadow-md rounded-l text-center p-8">
      
      <h3 className="text-xl font-semibold mb-2">No reviews yet</h3>
      <p className="text-gray-600 mb-4">
        You haven't added any game reviews yet. Start sharing your gaming experiences!
      </p>
      <Link to={'/addReview'}>
        <button className="btn bg-purple-600 hover:bg-purple-700 text-white">
          Add Your First Review
        </button>
      </Link>
    </div>
  )
}

export default NoReviewCard
