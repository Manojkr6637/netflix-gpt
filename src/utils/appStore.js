import { configureStore} from '@reduxjs/toolkit'

import userReducer from "./userSlice";
import movieSliceReducer from './movieSlice';
import gptSlideReducer from './gptSlice';
import configSliceReducer from './configSlice'

 
const appStore = configureStore({
  reducer: {
    user: userReducer,
    playMovies: movieSliceReducer,
    gptSearch: gptSlideReducer,
    config:configSliceReducer
  }
});

export default appStore;