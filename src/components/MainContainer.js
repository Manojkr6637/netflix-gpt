import React from 'react' 
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle'; 
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.playMovies.playmovies);
  if (movies == null) return;
  const {original_title, overview ,id} = movies[0];
  
  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground  movieId={id}/>
    </div>
  )
}

export default MainContainer