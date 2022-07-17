import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
const MovieList = ({movies}) => {
  return (
    <div className="MovieList">
      

{movies.map((movie)=> <MovieCard movie ={movie} />)}
    </div>
  ) 
}

export default MovieList
