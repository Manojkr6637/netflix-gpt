import React from 'react'
import Header from './Header'
import useNowPlayMovies from '../hooks/useNowPlayMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'; 
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
 

const Browse = () => {
  const gptSearchToggle = useSelector((store)=>store.gptSearch.showGptSearch)
  useNowPlayMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      { gptSearchToggle?<GptSearch/>:<><MainContainer />
      <SecondaryContainer/></>}
    </div>
  )
}

export default Browse