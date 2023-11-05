import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    playmovies: null,
    popularMovies:null,
    trailverVideos: null,
  },
  reducers: {
    addMovies: (state, action) => { 
           state.playmovies=action.payload;
    },
    addPopularMovies: (state, action) => {
        state.popularMovies=action.payload;
     },
    addTrailers: (state, action) => { 
      state.trailverVideos=action.payload;
    }
  }
})

export const { addMovies, addTrailers, addPopularMovies } =movieSlice.actions;
export default movieSlice.reducer;