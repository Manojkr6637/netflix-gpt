import { useState } from "react"
import Header from "./Header"

 
export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

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
       
        <form className="text-white w-2/6   absolute p-12 bg-black my-36
      mx-auto right-0 left-0 bg-opacity-80">
        <p className="text-white font-bold text-center">{isLogin ? 'Sign In' : 'Sign Up'}</p>
        
        {!isLogin && (<input className="p-2 my-2 rounded bg-[#333] w-full" type="text" placeholder="Full Name" />)}
          <input className="p-2 my-2 rounded bg-[#333] w-full" type="text" placeholder="Email or Phone number" />
            <input className="p-2 my-2 rounded bg-[#333] w-full" type="password" placeholder="Password" />
            <button className="font-bold text-center p-4 my-4 rounded-lg text-white bg-red-600 w-full"> {isLogin?'Sign In':'Sign Up'} </button>
           <div>
             <input type="checkbox" className="text-white" name="remember" />
            <span className="text-white-200 text-sm   right-0">Remember me </span>
              <a href="#" className="text-white text-sm mx-auto right-0 left-0">Need help? </a>
          </div>
           <div>             
            <span className="text-white text-sm mx-auto right-0 left-0">{isLogin?' New to Netflix':' New to Netflix'}</span>
            <a href="#" onClick={handleForm} className="text-white text-sm mx-auto right-0 left-0">{isLogin?'Sign In':'Sign up now'} </a>
            <p>This page is protected by Google reCAPTCHA to ensure you 're not a bot.<a href="#" className="text-bl"> Learn more.</a></p>
            </div>
          
        </form>
      {/* </div> */}
    </div>
  )
}
export default Login