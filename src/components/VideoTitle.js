import React from 'react'

const VideoTitle = ({ title, description}) => {
  return (
    <div className='m-30 p-20 w-screen aspect-video absolute'>
      <h1 className='font-bold text-6xl'>{title}</h1> 
      <p className='py-6 text-white bg-gradient-to-r from-black text-lg w-1/3'>{description}</p>
      <div>
        <button className='m-2 px-8 py-2 w-30 bg-white  text-black hover:bg-opacity-80 rounded-lg'><i class="fa-solid fa-play"></i>  Play</button>
        <a  href="#" className='mx-2 p-2 w-30 bg-slate-500 bg-opacity-80 text-white rounded-lg'><i class="fa-solid fa-circle-info"></i> More info</a>
      </div>
    </div>
  )
}

export default VideoTitle