import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navbar: React.FC=() => {
   // const[loginStatus, setLoginStatus] = useState<boolean>(false)
    const[profilePic, setProfilePic] = useState<string>("")
    useEffect(()=>{
        //setLoginStatus(sessionStorage.signInOption as boolean);
        if(sessionStorage.signInOption){
            setProfilePic(sessionStorage.imageurl)
        }
    },[])
    return (
        <div className="Navbar-container">
            <div className="left">

                <button id ="sideBarToggle">
                <MenuIcon id="icon"/>
                </button>
                <div id="homebtn" onClick={()=>{window.location.pathname="/"}}>
                    <YouTubeIcon id="icon" style ={{  color:"red"  }}/>
                    <h1>Youtube</h1></div>

                 </div>
            <div className="center">
                    <input type="text" id="searchBar" placeholder="Search"/>
                    <button  id="SearchIcon"><SearchIcon/></button>
            </div>
            <div className="right">

                <button id="createVideo"><VideoCallIcon/></button>
               {(sessionStorage.signInOption )?( <img id ="account" src={profilePic}></img>):(<button id="signInButton" onClick ={()=>{window.location.pathname="signin"}}> <AccountCircleIcon/>SIGN IN</button>)}



            </div>
        </div>
    );
};

export default Navbar;