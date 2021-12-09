import React from 'react'
import "../styling/container1.css"
import SearchIcon from '@mui/icons-material/Search';
import logo from "../Images/logo.png"

const Container1 = ({props}) => {
    return (
        <div className="container1">
             <img className="logo" src={logo} />
            <div className="header">
                <div className="search_box">
                    <input type="text" placeholder="Type to search"></input>
                    <div className="search_button">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="cancel_button">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
               
                
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
                <div className="second">Ask Us</div>
                <div className="third">Careers</div>
            </div>
        
        </div>
    )
}

export default Container1
