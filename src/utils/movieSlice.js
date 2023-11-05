import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    playmovies: null,
    trailverVideos: null,
  },
  reducers: {
    addMovies: (state, action) => { 
           state.playmovies=action.payload;
    },
    addTrailers: (state, action) => { 
      state.trailverVideos=action.payload;
    }
  }
})

export const { addMovies, addTrailers } =movieSlice.actions;
export default movieSlice.reducer;