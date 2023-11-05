import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ title, posterPath }) => {  
  return (
    <div className='pr-1'>        
      <img className='rounded' alt={ title}  src={ IMG_CDN_URL+posterPath}/>       
    </div>
  )
}

export default MovieCard