import React from 'react'
import Header from './Header'
import useNowPlayMovies from '../hooks/useNowPlayMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'; 
 

const Browse = () => {
  useNowPlayMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
      {/* 
      maincontainer
        videotrailler
           title
           play button
           description
      SecondContainer
        card*n

      
       */}
    </div>
  )
}

export default Browse