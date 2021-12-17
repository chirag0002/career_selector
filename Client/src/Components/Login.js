import React from 'react'
import "../styling/login.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import pic from "../Images/idea_concepts.png";
import fb from "../Images/facebook2.png";
import google from "../Images/google.png";
import logo from "../Images/logo.png"
import bg from "../Images/bg.jpg";
import  authentication  from "../firebase-config"
import {  signInWithPopup,GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const Login = () => {
   const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
    })
  }

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
    })
  }
    return (
     
              <> 


         {/* <div className= "cont"> */}
         <img className="snap" src={bg} alt="" />
        
        
         <img className="logo" src={logo}  alt=""/> 
                <img className="picture" src={pic} alt="" />
                
            <Form className="form">
          
            
  <Form.Group  controlId="formBasicEmail">
    <Form.Label className="user"> Username or Email </Form.Label>
    <Form.Control className="email-1" type="email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="password">Password</Form.Label>
    <Form.Control className="password-1" type="password"  />
  </Form.Group>
  
  <Button className="login_btn"  type="submit">
   Login
  </Button>
  <div class="striped">
				<span class="striped-line"></span>
				<span class="striped-text">Or</span>
				<span class="striped-line"></span>
			</div>
  <Button className="login_google"  type="submit">
  <img className="google" src={google} alt="" /> Login with Google  
  </Button>
  <Button className="login_fb"  type="submit">
    <img className="fb" src={fb} alt="" /> Login with Facebook
  </Button>
  
  
</Form>


</>
    )
}

export default Login

