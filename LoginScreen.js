import React, { useState } from 'react'
import './LoginScreen.css'
function LoginScreen()
{
    const[signUp,setSignUp] = useState(false);
    return(
        <div className = 'loginScreen'>
            <div className="loginScreen_background">
                <img
                className = "loginScreen_logo" 
                src="D:\Computer_Science\Assignment\pexels-pixabay-247676.jpg" 
                alt = "" />
            
            <button onclick={()=>setSignUp(true)}
            className = "loginScreen_button">
                Sign In
            </button>
            <div className="loginScreen_gradient"/>
        </div>
        <div className = "loginScreen_body">
            {signUp ? (
                <SignUpScreen />
                ) : (
                    <>
                    <h1>Welcome To Xliften</h1>
            <h2>Unlimited Movies and Chill</h2>
            <h3>Watch Anywhere and Cancel anytime</h3>
            <h4>Ready to watch? Enter your email to create or restart your membership</h4>
            <div className ="loginScreen_input">
                <form>
                    <input type='email' placeholder="Email Address" />
                    <button onclick={()=>setSignUp(true)}
                    className='loginScreen_getStarted'>Get started</button>
                </form>
            </div>
            </>
                )}
            
        </div>
        </div>
        
    )
}
export default LoginScreen
