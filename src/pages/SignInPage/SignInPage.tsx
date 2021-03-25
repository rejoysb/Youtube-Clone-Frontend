import React, { useState }  from 'react';
import "./SignInPage.css"
import { GoogleLogin } from "react-google-login"
import Axios from "axios"

import { Button } from '@material-ui/core';


const SignInPage: React.FC = ()  => {

    const [channelName, setChannelName] = useState<string>("")
    const [signInOption, setSignInOption] = useState<boolean>(false)

    const responseGoogle =(res:any)=>{
            const name = res.profileObj.name;
            const email = res.profileObj.email;
            const googleid = res.profileObj.googleId;
            const imageurl = res.profileObj.imageUrl

            Axios.post("http://localhost:3001/signin",{
                name:name,
                email:email,
                googleid:googleid,
                channelname: channelName,
                imageurl:imageurl
            }).then((res)=>{
                console.log("success");
                sessionStorage.setItem("name",name);
                sessionStorage.setItem("imageurl",imageurl);
                sessionStorage.setItem("signInOption","true");
                window.location.pathname="/"
            })
    }

    return (
        <div className ="SignInPage">
            <div className ="SignInPageContainer">
            <div className="top">
                <Button variant="outlined" color="primary" onClick={()=>{setSignInOption(false)}}> Login</Button>
                <Button variant="outlined" color="primary" onClick={()=>{setSignInOption(true)}}>Register</Button>
            </div>
            <div className="body">
 {
     signInOption? <div>
                <input type ="text" placeholder="Channel name" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                    setChannelName(event.target.value)
                }}/>
                <GoogleLogin clientId="58304106014-ve7e4dbpfvqh2t4n8m34hrp3labt8nss.apps.googleusercontent.com" buttonText="Register with Google" onFailure={responseGoogle} onSuccess={responseGoogle} cookiePolicy={"single_host_origin"}/></div>: <div>   <GoogleLogin clientId="58304106014-ve7e4dbpfvqh2t4n8m34hrp3labt8nss.apps.googleusercontent.com" buttonText="Sign in with Google" onFailure={responseGoogle} onSuccess={responseGoogle} cookiePolicy={"single_host_origin"}/></div>
 }
            </div>
            </div>


        </div>
    );
};

export default SignInPage;