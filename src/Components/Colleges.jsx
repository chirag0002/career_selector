
import React, { useState } from "react";
import "../styling/colleges.css";
import logo from "../Images/logo.png"


const Colleges = () => {
  
    return (
        <div>
            <div className="colleges_header">
                <img className="colleges_logo" src={logo} alt="" />
                <img  className="colleges_header_img" src="https://www.lonestar.edu/departments/careerservices/CS-path.jpg" alt="" />
                <dropdown />
                <div className="colleges_navbar">  
                
                <details className="colleges_first_details">  
                <ul>      
                    <li className="colleges_nav"><details className="colleges_details">
                        <ul>
                             <li>School</li>
                             <li>Colleges</li>
                        </ul>
                        <summary className="colleges_summary">Careers</summary></details>

                    </li>
                    <li className="colleges_nav">Ask Us</li>
                    <li className="colleges_nav">About Us</li>
                </ul>
                    <summary>Menu</summary>
                </details>
                </div>
            </div>
            <div className="colleges_cards">
                <img src="" alt="" className="colleges_cards_img" />
                <img src="" alt="" className="colleges_cards_img" />
            </div>
        </div>
    )
}

export default Colleges
