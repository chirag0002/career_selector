import React from 'react'
import "../styling/header.css";
import logo from '../Images/logo.png';
import man from "../Images/headerMan.png";
import walk from "../Videos/header.mp4"

const Header = () => {
    return (
        <>
        <div style={{height:"80%"}}>
            <div className="header_1">
                <img src={logo} alt="" className="header_img" />
                <navbar className="header">
                    <ul className="navbar_points">
                        <li className="navbar_point">About</li>
                        <li className="navbar_point">Ask</li>
                        <li className="navbar_point">Careers</li>
                    </ul>
                </navbar>
            </div>
            <div className="header_2">
                <div className="header_2_head">
                    <h1 className="header_2_heading">Decide <br />
                    Your
                    <br />
                     Best Future</h1>
                    <p
                    style={{
                        textAlign:"left",
                        fontSize:"1rem",
                        paddingLeft:"5%"
                    }}
                    >
                    Risk something or forever sit with your dreams.
                    </p>
                    <div
                    style={{
                        display:"flex",
                        paddingLeft:"5%",
                        paddingTop:"0%"
                    }}>
                    <p 
                    style={{
                        fontSize:"3rem"
                    }}>
                    4X
                    </p>
                    <p
                    style={{
                        width:"30%",
                        paddingTop:"2%",
                        fontWeight:"bold",
                        float:"left"
                    }}>
                    Trusted Imformation And Resources
                    </p>
                    </div>
                </div>
                <div className="header_2_vdo">
                    <video className="header_vdo" autoPlay loop muted > 
                        <source src={walk} type="video/mp4"/>
                    </video>
                </div>
                <div className="header_2_last">
                    <img src={man} alt="" 
                    style={{
                        width:"40%",
                        height:"80%"
                    }}/>
                    <p>Nothing Will Work Unless You Do.</p>
                </div>
            </div>
            <hr 
            style={{margin:"0"}}/>
        </div>
        </>

    )
}

export default Header
