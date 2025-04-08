
import './../css/MovieFile.css'
import getRandomYear from './../Release'
import { useMovieContext } from './../Context/MovieContext'
function MovieFile({movie}) {

  const{isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite= isFavorite(movie.id)

  function onFavoriteClick(e){
   e.preventDefault()
   if (favorite) removeFromFavorites(movie.id)
   else addToFavorites(movie)
  }
  
  return (
    <div className='movie-file'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className='movie-overlay'>
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release =getRandomYear()}</p>
      </div>
    </div>
  )
}


export default MovieFile