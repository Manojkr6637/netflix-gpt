import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.playMovies)
  console.log("movies>========>>", movies)
  return (
    <div className='bg-black'>
      <div className='-mt-52 pl-10  relative z-20'>
      <MovieList title={'Now Playing'} movies={movies?.playmovies} />
      <MovieList title={'Trending'} movies={movies?.playmovies} />
      <MovieList title={'Popular'} movies={movies?.playmovies} />
      <MovieList title={'Horror'} movies={movies?.playmovies} />
      <MovieList title={'TV Show'} movies={movies?.playmovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer