import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth} from "../utils/firebase"; 
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { photoURL} from "../utils/constant"
export const Login = () => {
  const dispatch = useDispatch();
  
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null); 
  const password = useRef(null);
  
  const formHandlerEvent = () => { 
      const isValid = checkValidate(email.current.value, password.current.value);
        if (isValid) { 
            setErrorMessage(isValid)
    }
    if (isValid) return;
    if (!isLogin) {
      // sign up form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
          // Signed up 
              // const user = userCredential.user;
             
              
              updateProfile(auth.currentUser, {
                displayName: name.current.value, photoURL: photoURL
              }).then((res) => {
                // Profile updated!   
                 const { uid,  email, displayName, photoURL } = auth.currentUser;
    dispatch(addUser({ uid: uid, email: email, displayName:displayName, photoURL: photoURL}))
                  
              }).catch((error) => {
                // An error occurred               
                  setErrorMessage(error.message);
              });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });

    } else { 
      //sign in form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });

    }

  }
  const handleForm = () => { 
    setIsLogin(!isLogin);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo" />
      </div>
      {/* <div className="w-3/12   absolute p-12 bg-black my-36
      mx-auto right-0 left-0
      "> */}
       
      <form
         onSubmit={(e)=>e.preventDefault()}
        className="text-white w-2/6   absolute p-12 bg-black my-36
      mx-auto right-0 left-0 bg-opacity-80">
        <p className="text-white font-bold text-center">{isLogin ? 'Sign In' : 'Sign Up'}</p>
        
        {!isLogin && (<input
          ref={name}  className="p-2 my-2 rounded bg-[#333] w-full" type="text" placeholder="Full Name" />)}
        <input
           ref={email}
          className="p-2 my-2 rounded bg-[#333] w-full" type="text" placeholder="Email or Phone number" />
        <input
          ref={password}	
          className="p-2 my-2 rounded bg-[#333] w-full" type="password" placeholder="Password" />
        <button
          
          onClick={formHandlerEvent}
          className="font-bold text-center p-4 my-4 rounded-lg text-white bg-red-600 w-full"> {isLogin ? 'Sign In' : 'Sign Up'} </button>
        <p className="text-red-600">{ errorMessage}</p>
        <div>
             <input type="checkbox" className="text-white" name="remember" />
            <span className="text-white-200 text-sm ">Remember me </span>
              <a href="#" className="text-white text-sm m-10 "> Need help? </a>
          </div>
           <div>             
            <span className="text-white text-sm mx-auto right-0 left-0">{isLogin?' New to Netflix':' New to Netflix'}</span>
          <a href="#" onClick={handleForm}
            className="text-white text-sm m-10">{isLogin ? 'Sign up now' : 'Sign In'} </a>
            <p>This page is protected by Google reCAPTCHA to ensure you 're not a bot.<a href="#" className="text-bl"> Learn more.</a></p>
            </div>
          
        </form>
      {/* </div> */}
    </div>
  )
}
export default Login