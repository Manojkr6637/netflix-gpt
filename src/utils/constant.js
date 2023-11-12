export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const photoURL = "https://avatars.githubusercontent.com/u/31730550?v=4"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};

export const API_PLAYNOW = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
export const API_POPULAR = 'https://api.themoviedb.org/3/person/popular?page=1'

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w780'

export const SUPPORTED_LANGUAGES = [
   {indentifier:'en', name:'English'},
   {indentifier:'hi', name:'Hindi'},
   {indentifier:'sp', name:'Spanish'},
]

export const OPENAP_KEY= process.env.REACT_APP_OPENAI_KEY;