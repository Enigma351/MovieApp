import React from 'react'
import './../css/Favorites.css'
import { useMovieContext } from '../Context/MovieContext'
import MovieFile from '../Components/MovieFile'

const Favorites = () => {

    const {favorites} = useMovieContext()

    if(favorites) {
      return (
      <div classname="favorites">
        <h2>Your Favorites</h2>
          <div className="movies-grid">
        {favorites.map((movie) => 
          (
          <MovieFile movie={movie} key={movie.id} />
          )
        )}
          </div>
      </div>)
    }

  return (
    <div className='favorites-empty'>
      <h2>Nothing here till now!</h2>
      <p>Add Movies to make it appear here</p>
    </div>
  )
}

export default Favorites