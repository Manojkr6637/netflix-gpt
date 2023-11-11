import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import lang from "../utils/langConstant";
import { changeLanguage } from "../utils/configSlice";
const Header = () => { 
  const navigate = useNavigate();
  const dispatch = useDispatch();	
  
  const user = useSelector((store)=>store.user);
  const showGptSearch = useSelector((store)=>store.gptSearch.showGptSearch);
  // console.log("useruser", user?.photoURL)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
   
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    })
  }
  useEffect(() => {
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/auth.user
                  const { uid,  email, displayName, photoURL } = user;
                  dispatch(addUser({ uid: uid, email: email, displayName:displayName, photoURL: photoURL}))                
                     navigate('/browse');
                } else {
                  // User is signed out
                  // ...
                  dispatch(removeUser());
                   navigate('/');
                }
  });    
  return () => unsubscribe();
  }, []);
  
  const handleSearchButton = () => {
         dispatch(toggleGptSearch())
   }
   const langKey=useSelector((store) =>store.config.lang)
  console.log("langKeylangKeyhhd",lang,langKey)
  console.log("langKeylangKeyhhd",lang[langKey])
  const changeLanguageHandle= (e) =>{
    // console.log("e.target.valuee.target.value", e.target.value);
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex
  justify-between ">
     
        <img className="w-44"
      src={ LOGO_URL}
         alt="logo" />
      {user && (<div className="flex">

         {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white "
            onChange={changeLanguageHandle}
          >
          {SUPPORTED_LANGUAGES.map((item)=> <option value={item.indentifier} key={item}>{item.name}</option>)}            
          </select>}
         <button  onClick={handleSearchButton} className="py-2 w-[110px] h-[40px] 
      mx-4 my-2 rounded-lg bg-purple-800 text-white">{showGptSearch?'Home Search':'GPT Search'}</button>
      <i class="fa-solid fa-user"></i>
      <a href="javacript:void(0)" onClick={handleSignOut} title="logout" className="mx-4 text-white" >Logout</a>
      <img className="w-10 h-10" title="Profile" alt="profile" src={ user?.photoURL} />
    </div>)}
        </div>
  )
}

export default Header;