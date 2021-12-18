import React,{useState} from 'react'
import "../styling/container1.css"
import logo from "../Images/logo.png"
import workplace from "../Images/wp.png"
import Popup from './Popup';
import {Navbar,Container,Offcanvas,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap'
// import Search_box from './Search_box';
import Search_box from './Search_box';
import { useMediaQuery } from 'react-responsive'
// import "../big-screen/component"
// import "../mobile/component"
// import "../laptop/component"
// import "../tablet-mobile/component"
// import "../desktop/component"

const Container1 = () => {


    // const isMobileDevice = useMediaQuery({
    //     query: "(min-device-width: 480px)",
    //   });
    
    //   const isTabletDevice = useMediaQuery({
    //     query: "(min-device-width: 768px)",
    //   });
    
    //   const isLaptop = useMediaQuery({
    //     query: "(min-device-width: 1024px)",
    //   });
    
    //   const isDesktop = useMediaQuery({
    //     query: "(min-device-width: 1200px)",
    //   });
    
    //   const isBigScreen = useMediaQuery({
    //     query: "(min-device-width: 1201px )",
    //   });

   

    const[user,setUser]=useState({
        email:" ",phone:" ",query:" "
    })

    let name, value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
}

const PostData=async(e)=>{
    e.preventDefault();
    const{email,phone,query}=user;
    const res=await fetch("/query",{
        method:"POST",
        header:{
            "Contect-Type":"application/json"
        },
        body:JSON.stringify({

            email:email,
            phone:phone,
            query:query,
        })

        
    });

    const data=await res.json();
    if(res.status===422|| !data){
        window.alert("Error");
        console.log("Error");
    }else{
        window.alert("Query was successful");
        console.log("Query was successful");
        }
}
    

    const[isOpen,setIsOpen]=useState(false);

    const togglePopup=()=>{
        setIsOpen(!isOpen);
    }


    return (
        <div className="container1">
            {/* <Search_box/> */}

    
{/* {isMobileDevice && <Mobile />}
  {isTabletDevice && <>
  <TabletMobile />
  {isDesktop && <Desktop />}
  {isLaptop && <Laptop />}
  {isBigScreen && <BigScreen />}
</>} */}
            <Search_box/>
            <div className="header">
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#"><img className="logo_container1" src={logo} alt="" /></Navbar.Brand>
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
                        <Nav.Link href="/login">About Us</Nav.Link>
                        <Nav.Link onClick={togglePopup}>Ask Us</Nav.Link>
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
                
            </div>
            {/* <div className="side_stuff">
            <a href="/login" className="first">About Us</a>
                
                <a } className="third" alt="">Ask Us</a>
                
                <Dropdown className="second_check">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Careers
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/school">School</Dropdown.Item>
                        <Dropdown.Item href="/ug">Undergraduate</Dropdown.Item>
                        <Dropdown.Item href="/pg">Postgraduate</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              <a href="/login" className="fourth">Login</a> */}

              

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
                    value={user.email}
                    onChange={handleInputs}
                     className="email_in" type="text" placeholder='Email'></input>
                </div>
                <div className="second_q">
                    <label className="phone">Enter your Phone No.</label>
                    <input name="phone" 
                    value={user.phone}
                    onChange={handleInputs} className="phone_in" type="text" placeholder='Phone'></input>
                </div>
                <div className="third_q">
                    <label className="q">Enter your Query</label>
                    <input name="query" 
                     value={user.query}
                    onChange={handleInputs} className="q_in" type="text" placeholder='Ask'></input>
                </div>
                <button  data-close-button className="close-icon">x</button>
                <button  onClick={PostData} className="submit" type="submit">Submit</button>
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

