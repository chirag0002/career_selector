
import React,{useState} from 'react'
import '../styling/Accordion.css'
import Data from './Data';
import Accordions from './Accordions.js'

const Accordion=()=>{
   const [data,setData] = useState(Data);  
  return (
    <>
    <h1 className="ques">Questions?</h1>
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
