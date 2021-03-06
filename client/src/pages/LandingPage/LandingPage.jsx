import { useState } from 'react'
import Login from '../../comp/Login'
import Signup from '../../comp/Signup'

import logo from '../../img/logo.png'

function LandingPage() {
   const [signupDisplay, setSignupDisplay] = useState(false)
   const [signinDisplay, setSigninDisplay] = useState(false)
   const [dimDisplay, setDimDisplay] = useState(false)

   const signupDsply = () => {
      setSignupDisplay(!signupDisplay)
      setSigninDisplay(false)
      setDimDisplay(true)
   }
   const signinDsply = () => {
      setSigninDisplay(!signinDisplay)
      setSignupDisplay(false)
      setDimDisplay(true)
   }
   const dimDsply = () => {
      setDimDisplay(false)
      setSignupDisplay(false)
      setSigninDisplay(false)
   }
   // const setDsply = (display) => {
   //    setDisplay(display)
   // }

   return(
      <div className="LandingPage">
         <div className="LandingPage-content text-center">
            <div className="LandingPage-border">
               <div className="col-md-4">

                  <div className="LandingPage-contentChild text-center">
                     <img src={logo} alt="" style={{
                        width: "420px",
                        padding: "0"
                     }} />
                  </div>

                  <div className="text-left">
                     Sign-up now and subscribe to enjoy all the cool and the latest books - The best book rental service provider in Indonesia. 
                  </div>

                  <div className="LandingPage-tombol pt-4 text-center">
                     <a onClick={signupDsply} className="btn btn-danger" href="/#" role="button">Sign Up</a>
                     <a onClick={signinDsply} className="btn btn-dark" href="/#" role="button">Sign In</a>
                  </div>

               </div>
            </div>
         </div>

         <div className="LandingPage-dim" onClick={dimDsply} style={{display: dimDisplay?'block':'none'}}></div>

         <div className="Login card" style={{display: signinDisplay?'block':'none'}}>
            <Login valSu={signupDsply} />
         </div>
         <div className="Signup card" style={{display: signupDisplay?'block':'none'}}>
            <Signup valSi={signinDsply} rtn={dimDsply} />
         </div>

      </div>
   )

}

export default LandingPage