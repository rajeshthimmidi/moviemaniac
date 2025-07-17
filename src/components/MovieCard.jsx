import React from 'react'
import './MovieCard.css'
import Poster from '../assets/poster.jpg'
import Star from '../assets/star.png'

const MovieCard = (movie) => {
  return (
    
        <a href={`https://www.themoviedb.org/movie/${movie.movie.id}`} target='_blank' className='movie-card'>
        <img loading="lazy" src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`} alt='Movie Poster' className='movie-poster'/>
        <div className="Movie-details">
            <h3 className='movie-title'>{movie.movie.title}</h3>
            <div className='movie-date-rating'>
                <p>{movie.movie.release_date}</p>
               <p>
                {movie.movie.vote_average.toFixed(1)}
                <img src={Star} alt='Star Icon' className='movie-rating-icon'/></p> 
                </div>
            <p className='movie-overview'>{movie.movie.overview.slice(0,100) +"..."}</p>
        </div>
        </a>
    

  ) 
}

export default React.memo(MovieCard)