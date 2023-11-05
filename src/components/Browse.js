import React from 'react'
import Header from './Header'
import useNowPlayMovies from '../hooks/useNowPlayMovies'
import MainContainer from './MainContainer';
 

const Browse = () => {
  useNowPlayMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
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