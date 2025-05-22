import HighRatingCard from '../HighRatingCard';

const HighestRating = ({reviews}) => {
  
  const highrated = reviews.filter(review => review.rating >= 8.5);
  
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 m-5 md:m-10 lg:m-12 gap-8'>
      {
        highrated.map(review => (
          <HighRatingCard key={review._id} review={review}></HighRatingCard>
        ))
      }
    </div>
  )
}

export default HighestRating