import React from 'react'
import "../styling/login.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import pic from "../Images/idea_concepts.png"

const Login = () => {
    return (

        <div className= "cont">
                <img className="picture" src={pic} alt="" />
            <Form class="form">
            
  <Form.Group  controlId="formBasicEmail">
    <Form.Label className="user"> Username or Email </Form.Label>
    <Form.Control className="email-1" type="email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="password">Password</Form.Label>
    <Form.Control className="password-1" type="password"  />
  </Form.Group>
  
  <Button className="login_btn" variant="primary" type="submit">
    Login
  </Button>
</Form>
        </div>
    )
}

export default Login

