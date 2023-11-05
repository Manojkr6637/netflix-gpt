import React from 'react'
import useVideoTrailer from '../hooks/useVideoTrailer'
import { useSelector } from 'react-redux';
 

const VideoBackground = ({ movieId }) => {
  const trailverVideos = useSelector((video) => video.playMovies.trailverVideos)
  
  useVideoTrailer(movieId);  
  return (
    <div className='w-screen'>
      <iframe  
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailverVideos}?si=u8Gw6zVkxZAa81bK&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
  )
}

export default VideoBackground