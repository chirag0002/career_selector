import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      
    </div>
  );
};
 
export default Popup;