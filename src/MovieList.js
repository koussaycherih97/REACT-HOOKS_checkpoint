import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
  return (
     <div className='liste'>
        
        {movie.map((el) => <MovieCard el={el} ></MovieCard>)}

     </div>


  )
}

export default MovieList