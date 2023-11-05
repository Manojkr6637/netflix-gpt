import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";
const Header = () => { 
  const navigate = useNavigate();
  const dispatch = useDispatch();	
  const user = useSelector((store)=>store.user);
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
  
  return (<div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex
  justify-between ">
        <img className="w-44"
      src={ LOGO_URL}
         alt="logo" />
    {user&&(<div className="flex">
      <i class="fa-solid fa-user"></i>
      <a href="javacript:void(0)" onClick={handleSignOut} title="logout" className="mx-4 text-white" >Logout</a>
      <img className="w-10 h-10" title="Profile" alt="profile" src={ user?.photoURL} />
    </div>)}
        </div>
  )
}

export default Header;