


import React,{useState} from 'react'
import "../styling/login.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import pic from "../Images/idea_concepts.png";
import fb from "../Images/facebook2.png";
import google from "../Images/google.png";
import logo from "../Images/logo.png"
import bg from "../Images/bg.jpg";
import  authentication  from "../firebase"
import { signInWithPopup,GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

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
 
  
const  [email, setEmail] = useState("");
  
  
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
    return (
     
              <> 


         {/* <div className= "cont"> */}
         <img className="snap" src={bg} alt="" />
        
        
         <img className="logo" src={logo}  alt=""/> 
                <img className="picture" src={pic} alt="" />
                
            <Form className="form"   onSubmit={handleSubmit}>>
          
            
  <Form.Group  controlId="formBasicEmail">
    <Form.Label className="user"> Username or Email </Form.Label>
    <Form.Control autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
    className="email-1" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="password">Password</Form.Label>
    <Form.Control 
       value={password}
                onChange={(e) => setPassword(e.target.value)}
     className="password-1" type="password"  />
  </Form.Group>
  
  <Button className="login_btn"  disabled={!validateForm()}>
                type="submit">
   Login
  </Button>
  <div class="striped">
				<span class="striped-line"></span>
				<span class="striped-text">Or</span>
				<span class="striped-line"></span>
			</div>
  <Button className="login_google" onClick={signInWithGoogle} type="submit">
  <img className="google" src={google} alt="" /> Login with Google  
  </Button>
  <Button onClick={signInWithFacebook}  className="login_fb"  type="submit">
    <img className="fb" src={fb} alt="" /> Login with Facebook
  </Button>
  
  
</Form>


</>
    )
}

export default Login

