
import React from 'react'
import '../styling/Accordion.css'
import Data from './Data';
import Accordions from './Accordions.js'
import faq from "../Images/faq.png"


const Accordion=()=>{ 
  return (
    <>
    <h1 className="accordion_heading">Frequently Asked Question</h1>
    <div className="cont-5">
    
     <img className="accordion_pic" src={faq} alt="" />
     </div>

    <div className="container5">
      <div className="accordionBlock">
      {Data.map((val)=>{
           return(
             <>
            
            <Accordions {...val}/>
            </>
           )
      })}
    </div>
    </div>
    </>
  )}
   

export default Accordion;
