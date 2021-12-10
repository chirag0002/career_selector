import React,{useState} from 'react'
import "../styling/container1.css"
import SearchIcon from '@mui/icons-material/Search';
import logo from "../Images/logo.png"
// import {Link} from "react-location";
// import Popup from "./Popup"
import { isDOMComponentElement } from 'react-dom/cjs/react-dom-test-utils.production.min';

import Popup from './Popup';


import workplace from '../Images/workplace.png'


const Container1 = () => {

    const[isOpen,setIsOpen]=useState(false);

    const togglePopup=()=>{
        setIsOpen(!isOpen);
    }



    // const openQuery=document.querySelectorAll('[data-query-target]')
    // const closeQuery=document.querySelectorAll('[data-close-button]')
    // const overplay=document.getElementById('overplay')

    // openQuery.forEach(button=>{
    //     button.addEventListener('click', ()=>{
    //         const query= document.querySelector(button.dataset.queriesTarget)
    //     open(query)
    //     })
    // })
    // closeQuery.forEach(button=>{
    //     button.addEventListener('click', ()=>{
    //         const query= button.closest('.query')
    //     close(query)
    //     })
    // })

    // function open(query){
    //     if(query==null)
    //     return
    //     query.classList.add('active')
    //     // overlay.classList.add('active')
    // }

    // function close(query){
    //     if(query==null)
    //     return
    //     query.classList.remove('active')
    //     // overlay.classList.remove('active')
    // }


    return (
        <div className="container1">
             <img className="logo" src={logo} />
            <div className="header">

                <img className="back_img" src="https://blog.bonus.ly/hubfs/workplace-conflict.png"/>


                <img className="back_img" src="https://blog.bonus.ly/hubfs/workplace-conflict.png"/>

                
               
                
                <img className="back_img" src={workplace}/>

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
                <button  onClick={togglePopup} className="second">Ask Us</button>
                {/* </Link> */}
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
