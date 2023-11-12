import { createSlice } from "@reduxjs/toolkit";
 
const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    gptMovies:null,
    movieResults:null,
    movieNames:null
  },
  reducers: {
    toggleGptSearch: (state, action)=>{ 
        state.showGptSearch = !state.showGptSearch
    },
    addGPTMovies: (state, action)=>{
       const {movieNames, movieResults} = action.payload;
        state.movieNames = movieNames
        state.movieResults = movieResults
    }
  }

})
export const { toggleGptSearch, addGPTMovies } = gptSlice.actions
export default gptSlice.reducer