import React from 'react'
import './App.css'
import Fire from './assets/fire.png'
import Star from './assets/glowing-star.png'
import Party from './assets/partying-face.png'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
     <main>
      <Routes>
        <Route path='/' element={<MovieList type="popular" title="Popular Movies" emoji={Fire} />} />
        <Route path='/top_rated' element={<MovieList type="top_rated" title="Top Rated Movies" emoji={Star} />} />
        <Route path='/upcoming' element={<MovieList type="upcoming" title="Upcoming Movies" emoji={Party} />} />
      </Routes>
     </main>
      {/* <main className=''><MovieList type="popular" title="Popular Movies" emoji={Fire} />
                          <MovieList type="top_rated" title="Top Rated Movies" emoji={Star} />
                          <MovieList type="upcoming" title="Upcoming Movies" emoji={Party} />
       </main> */}
    </div>
  )
}

export default App