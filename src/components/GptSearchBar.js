import React from 'react'
import lang from '../utils/langConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey=useSelector((store) =>store.config.lang)
  
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
        <input type='text' className='p-3 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptgetPlaceholder} />
        <button className='py-2 px-2 m-4 bg-red-700 text-white rounded-lg
        col-span-3
        '>{lang[langKey].search}</button>
       </form>
    </div>
  )
}


export default GptSearchBar