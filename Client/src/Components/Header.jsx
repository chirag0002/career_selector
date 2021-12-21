import React from 'react'
import "../styling/header.css";
import logo from '../Images/logo.png';
import search from "../Images/search.png";
import walk from "../Videos/header.mp4"
import {Link} from "react-location"


const Header = () => {
    return (
        <>
        <div>
            <div className="header_1">
                <Link to="/"> <img src={logo} alt="" className="header_img" /></Link>
                <navbar className="header">
                    <ul className="navbar_points">
                        <li className="navbar_point"><a className="footer_togithub"  href="/about" alt="">About</a></li>
                        <li className="navbar_point">Ask</li>
                        <li className="navbar_point">Careers</li>
                    </ul>
                </navbar>
                <span className="search_bar">
                <input className="header_search" type="input" placeholder="Search here..."/>
                <button className="search_btn"><img className="search_img" src={search} alt="" /></button>
                </span>
            </div>
            <div className="header_2">
                <div className="header_2_head">
                    <h1 className="header_2_heading">Decide Your Best Future</h1>
                    <p
                    style={{
                        textAlign:"left",
                        fontSize:"1.3rem",
                        paddingLeft:"5%"
                    }}
                    >
                    Risk something or forever sit with your dreams.
                    </p>
                    <div
                    style={{
                        display:"flex",
                        paddingLeft:"5%",
                        paddingTop:"20%"
                    }}>
                    <p 
                    style={{
                        fontSize:"4rem"
                    }}>
                    4X
                    </p>
                    <p
                    style={{
                        width:"30%",
                        paddingTop:"5%",
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
            </div>
            <hr />
        </div>
        </>

    )
}

export default Header
