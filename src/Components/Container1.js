import React,{useState} from 'react'
import "../styling/container1.css"
import logo from "../Images/logo.png"
import workplace from "../Images/wp.png"
import Popup from './Popup';
import {Navbar,Container,Offcanvas,Nav,NavDropdown} from 'react-bootstrap'
import  authentication  from "../firebase"
import { signInWithPopup,GoogleAuthProvider} from "firebase/auth";
 import google from "../Images/google.png";
const Container1 = () => {
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

    const[isOpen,setIsOpen]=useState(false);

    const togglePopup=()=>{
        setIsOpen(!isOpen);
    }


    return (
        <div className="container1">
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/"><img className="logo_container1" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Career Selector</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link onClick={togglePopup}>Ask Us</Nav.Link>
                        <Nav.Link className="container_1_login" onClick={signInWithGoogle} type="submit" >Login with Google<img className="login_google" src={google} alt="" /></Nav.Link>
                        <NavDropdown title="Careers" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/school">School</NavDropdown.Item>
                            <NavDropdown.Item href="/ug">Graduation</NavDropdown.Item>
                            <NavDropdown.Item href="/pg">Post Graduation</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
                <img className="back_img" src={workplace} alt=""/>
                <div className="animated_header">
                    <div className="container">
                        <div className="word">Career Selector</div>
                        <div className="word">Build Your Future</div>
                    </div>
                </div>
            {isOpen && <Popup
            content={<>

            <div className="query">
                <div ></div>
                <h1 className='heading'>Queries</h1>
                <form>
                <div className="data">
                <div className="first_q">
                    <label className="email" >Enter your Email-Id</label>
                    <input  name="email"
                     className="email_in" type="text" placeholder='Email'></input>
                </div>
                <div className="second_q">
                    <label className="phone">Enter your Phone No.</label>
                    <input name="phone" 
             className="phone_in" type="text" placeholder='Phone'></input>
                </div>
                <div className="third_q">
                    <label className="q">Enter your Query</label>
                    <input name="query" 
                      className="q_in" type="text" placeholder='Ask'></input>
                </div>
                <button  data-close-button className="close-icon">x</button>
                <button   className="submit" type="submit">Submit</button>
                </div>
                </form>
            </div>
            </>}
            handleClose={togglePopup}
            />}
        
        </div>
        

        
    )
}

export default Container1
