import React, { use, useEffect, useState } from 'react'
import _ from 'lodash'

import Fire from '../assets/fire.png'
import './MovieList.css'
import './Navbar.css'
import MovieCard from './MovieCard'

const MovieList = ({type, title, emoji}) => {
    const[movies, setMovies] = useState([]);
    const [minRating , setMinRating] = useState(0);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [sort, setSort] = useState({
        by: 'default',
        order: 'asc'
    });

    const handleFilter = (rating) => {
      if (rating === minRating) {
            setMinRating(0);
            setFilteredMovies(movies);
            return;
        }
        setMinRating(rating);
        const filteredMovies = movies.filter(movie => movie.vote_average >= rating);
        setFilteredMovies(filteredMovies);
    }

    const handleSort = (e) => {
        const { name, value } = e.target;
        setSort((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    console.log(sort);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=183928bab7fc630ed0449e4f66ec21bd`)
            .then((response) => response.json())
                        .then((result) => {
                    if (result && Array.isArray(result.results)) {
                    setMovies(result.results);
                    setFilteredMovies(result.results);
                    // console.log(result.results);
                } else {
                    setMovies([]);
                }
            })
            .catch((error) => console.error(error));
    }, [type]);

    useEffect(() => {
        if (sort.by !== 'default')  {
            const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
            setFilteredMovies(sortedMovies);
        }
    }, [sort])

  return (
    <div className='movie-list' id={type}>
        <div className='movie-list-header'>
            <h2>{title}<img src = {emoji} alt='Emoji' className='navbar_emoji'/></h2>

            <div className='movie-list-header-fs'>
                <ul className='Movie-filter'>
                    <li className={minRating === 8 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => handleFilter(8)}>8+ Star</li>
                    <li className={minRating === 7 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => handleFilter(7)}>7+ Star</li>
                    <li className={minRating === 6 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => handleFilter(6)}>6+ Star</li>
                </ul>
                <select name='by' id='' value={sort.by} onChange={handleSort} className='movie-sorting'>
                    <option value='default'>Sort by</option>
                    <option value='release_date'>Date</option>
                    <option value='vote_average'>Rating</option>
                    </select>
                <select name='order' id='' value={sort.order} onChange={handleSort} className='movie-sorting'>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                    </select>

             </div>   
         </div>   

        <div className='movie-cards'>
          {Array.isArray(movies) && movies.length > 0 ? (
            filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <div>No movies found.</div>
          )}
            </div>

    </div>
  )
}

export default MovieList