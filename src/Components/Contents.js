import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./Accordion.js";

// import "./styles.css";

function Content() {
 return (
   <div>
     <Accordion
       title="What is your return policy?"
       content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <Accordion
       title="Which languages does you support?"
       content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <Accordion
       title="Can I use a custom domain?"
       content="
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
     />
   </div>
 );
}


ReactDOM.render(<Content />);