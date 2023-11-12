import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailers } from "../utils/movieSlice";
import { useEffect } from "react";

const useVideoTrailer = (movieId) => { 
          const dispatch = useDispatch();
        const trailverVideos = useSelector((store)=>store.playMovies.trailverVideos);
     console.log("trailverVideos", trailverVideos)
        const getMovieVideo = async () => { 
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
    const json = await data.json();    
    let filters = json.results.filter((item) => item.type == "Trailer");
    const mainMovie = filters.length > 0 ? filters[0] : filters[0];
    dispatch(addTrailers(mainMovie.key));   
    
  }
  useEffect(() => { 
    !trailverVideos && getMovieVideo();
  }, [])
}

export default useVideoTrailer;