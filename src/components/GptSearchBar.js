import React, { useRef } from 'react'
import lang from '../utils/langConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constant'
 
 import { addGPTMovies } from '../utils/gptSlice' 

const GptSearchBar = () => {
  const dispatch= useDispatch();
  const langKey=useSelector((store) =>store.config.lang)
  const searchtext=useRef(null);

  const searchMovieTMDB= async (movieName) =>{
       const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
       const json = await data.json();
      //  console.log("== json",json);
       return json.results;
  }
  const handleSearch = async () => {
      // console.log(searchtext.current.value);
      const getQuery = 'Act as a Movie Recommendation system and suggest some movies for the query: ' +searchtext.current.value+ ' only give names of 5 movies, comma separated like the example result given ahead. example Result: Gadar, Sholay, Don, Golmaal, koi milgya'
      //make an api call to GPT API and get movie results
      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: getQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // console.log("gptResultsgptResults", gptResults, gptResults.choices);
      // const getMovies=gptResults.choices?.[0]?.message?.content.split(',');
        const moviesName = ['Chupke Chupke','Dil','darr','jigar','don']
    
      const results = moviesName.map(item=>searchMovieTMDB(item))
      // console.log("resultsresults", results)
      const moviestmdb= await Promise.all(results);
      // console.log("getMovies-dd", dd);
      dispatch(addGPTMovies({movieNames:moviesName, movieResults:moviestmdb}));
      

  }
  
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' ref={searchtext} className='p-3 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptgetPlaceholder} />
        <button className='py-2 px-2 m-4 bg-red-700 text-white rounded-lg
        col-span-3
        ' onClick={handleSearch}>{lang[langKey].search}</button>
       </form>
      
    </div>
  )
}


export default GptSearchBar