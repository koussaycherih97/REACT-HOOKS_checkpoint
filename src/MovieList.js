import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
  return (
     <div className='liste'>
        
        {movie.map((el,i) => <MovieCard el={el} key={i} ></MovieCard>)}

     </div>


  )
}

export default MovieList