import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GetMovieSuggestions = () => {
  const movieResults = useSelector((store)=>store.gptSearch.movieResults)
  const movieNames = useSelector((store)=>store.gptSearch.movieNames)
  console.log("movieResultsmovieResults-ss", movieResults)
  console.log("movieNames-ss", movieNames)
  if(!movieResults) return null;
  return (
    <div className='p-4 m-4 bg-black bg-opacity-70 text-white'>
    <div> {movieNames && movieNames.length>0 && movieNames.map((movieName,index)=><MovieList title={movieName} movies={movieResults[index]} />)}
      
      </div>
    </div>
  )
}

export default GetMovieSuggestions