import React, { useState, useEffect } from 'react'
import './Nav.css'
function Nav(){
    const[show,handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar);
    },[])
    return(
        <div className ={`nav ${show && 'nav__black'}`}>
            <div className = 'nav__contents'>

            
            <img className = 'nav__logo'
             src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt-256.png" alt="icon"/>
            
            <img className = 'nav__avatar'
             src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-256.png" alt="icon"/>

            </div>
        </div>
    )
}

export default Nav