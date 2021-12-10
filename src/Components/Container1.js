import React,{useState} from 'react'
import "../styling/container1.css"
import SearchIcon from '@mui/icons-material/Search';
import logo from "../Images/logo.png"
// import {Link} from "react-location";
// import Popup from "./Popup"
import { isDOMComponentElement } from 'react-dom/cjs/react-dom-test-utils.production.min';

const Container1 = () => {


    return (
        <div className="container1">
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
            <div className="search_bar">

            
                
            </div>
            <div className="side_stuff">
                <div className="first">About Us</div>
                {/* <Link to="ask"> */}
                <button  className="second">Ask Us</button>
                {/* </Link> */}
                <div className="third">Careers</div>
            </div>

            <div className="query">
                <h1 className='heading'>Queries</h1>
                <form>
                <div className="data">
                <div className="first_q">
                    <label className="email">Enter your Email-Id</label>
                    <input type="text" placeholder='Email'></input>
                </div>
                <div className="second_q">
                    <label className="phone">Enter your Phone No.</label>
                    <input type="text" placeholder='Phone'></input>
                </div>
                <div className="third_q">
                    <label className="q">Enter your Query</label>
                    <input type="text" placeholder='Ask'></input>
                </div>
                <button className="close">x</button>
                <button  className="submit" type="submit">Submit</button>
                </div>
                </form>
            </div>
        
        </div>
    )
}

export default Container1
