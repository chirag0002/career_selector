import React,{useState} from 'react'

const Accordions=({question,answer}) => {
   const [text, setText]=useState(false);

   const display=()=>{
    
    setText(!text);
      
   }
    return (
        <>
        
         <div  className="question" onClick = {display}>
         <h2>{question}</h2>
         {text?<i class="fas fa-angle-down"></i>:<i class="fas fa-angle-right"></i>}
      </div>
    <div className="answers">
    
    
      { text && <p className="jawab"> {answer} </p> }
      </div>
    
    
        </>
        
    )
}

export default Accordions
