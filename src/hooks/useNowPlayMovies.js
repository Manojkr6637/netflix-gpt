import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { API_OPTIONS, API_PLAYNOW } from "../utils/constant";

const useNowPlayMovies = () => { 
      const dispatch = useDispatch();
      const playmovies = useSelector((store)=>store.playMovies.playmovies);
      const PlayNow = async() => { 
      const data = await fetch(API_PLAYNOW, API_OPTIONS);
      const json = await data.json();
      //  console.log("json", json.results);
       dispatch(addMovies(json.results))
  }
  useEffect(() => { 
    !playmovies&& PlayNow();
  },[])
  
}

export default useNowPlayMovies;