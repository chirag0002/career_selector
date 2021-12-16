import React,{useState} from 'react'
import "../styling/container1.css"
import logo from "../Images/logo.png"
import workplace from "../Images/wp.png"
import Popup from './Popup';
import Search_box from './Search_box';

const Container1 = () => {

   

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
            <Search_box/>
             <img className="logo" src={logo}  alt=""/>
            <div className="header">

                <img className="back_img" src={workplace} alt=""/>
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
