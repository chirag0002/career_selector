import React,{useState} from 'react'
import "../styling/container1.css"
import SearchIcon from '@mui/icons-material/Search';
import logo from "../Images/logo.png"
import { isDOMComponentElement } from 'react-dom/cjs/react-dom-test-utils.production.min';
import Popup from './Popup';
import Search_box from './Search_box';
const Container1 = () => {

    const[isOpen,setIsOpen]=useState(false);

    const togglePopup=()=>{
        setIsOpen(!isOpen);
    }
return (
    
<div className="container1">
<Search_box/>
             <img className="logo" src={logo} />
            <div className="header">

                <img className="back_img" src="https://blog.bonus.ly/hubfs/workplace-conflict.png"/>
                <div className="animated_header">
                    <div className="container">
                        <div className="word">Career Selector</div>
                        <div className="word">Build Your Future</div>
                    </div>
                </div>
                
            </div>
            <div className="side_stuff">
                <div className="first">About Us</div>
                
                <button  onClick={togglePopup} className="second">Ask Us</button>
                
                <div className="third">Careers</div>
            </div>

            {isOpen && <Popup
            content={<>

            <div className="query">
                <div ></div>
                <h1 className='heading'>Queries</h1>
                <form>
                <div className="data">
                <div className="first_q">
                    <label className="email">Enter your Email-Id</label>
                    <input  className="email_in" type="text" placeholder='Email'></input>
                </div>
                <div className="second_q">
                    <label className="phone">Enter your Phone No.</label>
                    <input  className="phone_in" type="text" placeholder='Phone'></input>
                </div>
                <div className="third_q">
                    <label className="q">Enter your Query</label>
                    <input className="q_in" type="text" placeholder='Ask'></input>
                </div>
                <button  data-close-button className="close-icon">x</button>
                <button  className="submit" type="submit">Submit</button>
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
