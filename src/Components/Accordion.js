
import React,{useState} from 'react'
import '../styling/Accordion.css'
import Data from './Data';
import Accordions from './Accordions.js'
import faq from "../Images/faq3.png"


const Accordion=()=>{
   const [data,setData] = useState(Data);  
  return (
    <>
    <div className="cont-5">
     <img className="pic" src={faq} alt="" />
     </div>
    {/* <h1 className="ques">Questions?</h1> */}
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
