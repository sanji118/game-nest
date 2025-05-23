import { useEffect, useState } from 'react';
import ReviewCard from "../ReviewCard";
import { Fade } from "react-awesome-reveal";

const HighestRating = () => {
  const [highrated, setHighrated] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/highest-rated-reviews')
      .then(res => res.json())
      .then(data => setHighrated(data));
  }, []);

  return (
    <>
      <h1 className='py-10 text-3xl md:text-5xl text-center font-bold text-violet-500'>
        Highest Rated Games
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 m-5 md:m-10 lg:m-12 gap-8'>
        <Fade cascade damping={0.2} triggerOnce>
          {highrated.map(review => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </Fade>
      </div>
    </>
  );
}

export default HighestRating;
