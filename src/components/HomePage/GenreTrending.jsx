  import React from 'react'
  
  const GenreTrending = ({reviews}) => {
    const Trending = reviews.filter(review => review.trending === true);
    const uniqueGenres = [...new Set(Trending.map(review=> review.genre))]
    console.log(uniqueGenres)
    return (
      <div className='p-5 md:p-10 lg:p-12'>
        <h1 className='py-10 text-3xl md:text-5xl text-center font-bold text-violet-500'>Trending Genres</h1>
        <div className='grid md:grid-cols-3'>
            <div className='flex gap-2'>
                {
                    uniqueGenres.map(genre=> (
                        <button className='btn'>{genre}</button>
                    ))
                }
            </div>
            <div className='col-span-2'>

            </div>
        </div>
      </div>
    )
  }
  
  export default GenreTrending