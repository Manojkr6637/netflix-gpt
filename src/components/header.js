import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => { 
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  console.log("useruser", user?.photoURL)
  const handleSignOut = () => {     
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/');
}).catch((error) => {
  // An error happened.
    navigate('/error');
})
  }
  return (<div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex
  justify-between ">
        <img className="w-44"
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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