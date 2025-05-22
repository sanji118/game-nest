import React, { useState } from 'react';
import TrendingReviews from '../TrendingReviews';

const GenreTrending = ({ reviews }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const trendingReviews = reviews.filter(review => review.trending === true);
  const uniqueGenres = [...new Set(trendingReviews.map(review => review.genre))];

  const filteredReviews = selectedGenre
    ? trendingReviews.filter(review => review.genre === selectedGenre)
    : trendingReviews;

  return (
    <div className='p-5 md:p-10 lg:p-12'>
      <h1 className='py-10 text-3xl md:text-5xl text-center font-bold text-violet-500'>
        Trending Genres
      </h1>

      
      <div className='grid md:grid-cols-3 gap-5 h-auto md:h-[60vh]' >
        
        <div className='flex flex-col gap-2 font-semibold md:overflow-y-auto pr-2'>
          <button
            onClick={() => setSelectedGenre(null)}
            className={`px-4 py-2 rounded ${
              selectedGenre === null ? 'bg-violet-500 text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          {uniqueGenres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded hover:text-violet-500 ${
                selectedGenre === genre ? 'bg-violet-500 text-white' : 'bg-gray-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        
        <div className='md:col-span-2 md:overflow-y-auto px-1'>
            <div><TrendingReviews reviews={filteredReviews} /></div>
          
        </div>
      </div>
    </div>
  );
};

export default GenreTrending;
