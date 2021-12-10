import React from 'react'
import "../styling/ask.css"

const Ask= () => {
    return (
        
        <div className="ask">
            <div className="heading">Ask Us</div>
            <div className="sign_">
                <form className="form">
                    <input  className="enter_email" type="text" placeholder="Enter your Email"></input>
                    <input type="text" placeholder="Enter your Phone No" className="enter_no"></input>
                    <input type="text" placeholder="Enter your Query" className="enter_query"></input>
                    <button className="button_submit" type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    )
};

export default Ask
