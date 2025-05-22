import HighRatingCard from '../HighRatingCard';

const HighestRating = ({reviews}) => {
  
  const highrated = reviews.filter(review => review.rating >= 8.5);
  
  return (
    <>
    <h1 className='py-10 text-3xl md:text-5xl text-center font-bold text-violet-600'>Highest Rated Games</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 m-5 md:m-10 lg:m-12 gap-8 '>
      {
        highrated.map(review => (
          <HighRatingCard key={review._id} review={review}></HighRatingCard>
        ))
      }
    </div></>
  )
}

export default HighestRating