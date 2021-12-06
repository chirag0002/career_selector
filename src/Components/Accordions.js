import React,{useState} from 'react'

const Accordions=({question,answer}) => {
   const [text, setText]=useState(false);

   const display=()=>{
    
    setText(!text);
      
   }
    return (
        <>
         <div className="question">
            <h2>{question}</h2>
            <p onClick = {display}>{text?<i class="fas fa-angle-down"></i>:<i class="fas fa-angle-right"></i>}</p>
    </div>
    <div className="answers">
    
      { text && <p> {answer} </p> }
    </div>
    
             </>
        
    )
}

export default Accordions
