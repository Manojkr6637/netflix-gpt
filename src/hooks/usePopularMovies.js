import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS, API_POPULAR } from "../utils/constant";

const usePopularMovies = () => { 
      const dispatch = useDispatch();
      const popularMoviesd = useSelector((store)=>store.playMovies.popularMovies);
      const popularMovies = async() => { 
      const data = await fetch(API_POPULAR, API_OPTIONS);
        const json = await data.json(); 
        // console.log("json::",json);
       dispatch(addPopularMovies(json.results))
  }
  useEffect(() => { 
    !popularMoviesd && popularMovies();
  },[])
  
}

export default usePopularMovies;