import React from 'react'
import "./SignupScreen.css"
function SignupScreen(){
    return(
        <div className ="signupScreen">
            <form><h1>Sign In</h1>
            <input placeholder="email" type="email" />
            <input placeholder='password' type= "password" />
            <button type ="submit">Sign In</button>
            <h4>
                <span className='SignupScreen_gray'>New To Xliften?
                <span className='SignupScreen_link'>Sign up now</span>
                </span></h4>
            </form>
        </div>
    )
}
export default SignupScreen