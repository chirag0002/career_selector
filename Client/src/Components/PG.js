import React ,  { useEffect, useState } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import '../styling/PG.css';
import mtech from "../Images/mtech.png"
import mcom from "../Images/Mcom.png"
import MA from "../Images/M.A.png"
import MSC from "../Images/msc.png"
import MCA from "../Images/MCA.png"
import MBA from "../Images/Mba.png"
import Footer from "./Footer.jsx"
const PG = () => {
      useEffect(()=>{
    Aos.init({
      duration:2000});

  },[]);
  
    return (
        <>
        <div class="pg">
        <div className="pg_container">
               <div className="pg_heading">
                   Postgraduate
               </div>
               <div className="Pg_container_1">
                   <div className="pg_cards">
                   
                       <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={mtech} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                           MTech full form is Master of Technology. MTech duration is 2 years. It deals with existing technologies and creates new paths for research and development. This degree is offered in 4 different categories such as Regular or Full Time, Sponsored, Part-time and project staff.
                           </p>
                           </div>
                           
                                <div className="pg_btn">
                                <a className="pg_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                       </div>


        </div>
        
          <div data-aos="fade-right" className="pg_card_1">
                       <img className="pg_image_mtech"src={mcom} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                          MCom or Masters of Commerce is a two-year post-graduate level course ideal for candidates who wish to make a career in banking financial services and insurance (BFSI) as well as accounting and commerce sectors. The two-year course delves deeper into the functioning of the economy, capital, revenue, trade, taxes, etc. 
                           </p>
                           </div>
                           
                                <div className="pg_btn">
                                <a className="pg_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                       </div>


        </div>
          <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MA} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                           Master of Arts or MA is a postgraduate degree which can be pursued by students who have completed their bachelors (also known as, undergraduate degree). There are various specializations. There are various colleges and universities like colleges affiliated to Delhi University, Narsee Monjee College, Loyola College, Chandigarh University that offer MA in various specializations.
                           </p>
                           </div>

                                <div className="pg_btn">
                                <a className="pg_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                             <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MCA} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                          Master of Computer Applications (MCA) is a two year professional post-graduate programme for candidates wanting to delve deeper into the world of computer application development with the help of learning modern programming language. The programme is a blend of both theoretical and practical knowledge.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                      
                      
                         <div data-aos="fade-right" className="pg_card_1">
                       <img className="pg_image_mtech"src={MSC} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                           Full form of M.Sc is Master of Science (MSc). MSc is a two-year duration postgraduate degree course offered by universities and colleges in various specialised Science fields such as Physics, Biology, Chemistry, Mathematics, Botany, Biotechnology, Microbiology, Environmental Sciences, Food Sciences, Life Sciences, and so on.
                           </p>
                           </div>
                           <div className="pg_btn">
                                <a className="pg_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                     <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MBA} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                          The Master of Business Administration (MBA) is an internationally-recognized degree designed to develop the skills required for careers in business and management. The value of the MBA, however, is not limited strictly to the business world. An MBA can also be useful for those pursuing a managerial career in the public sector, government, private industry, and other areas.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                      <Footer />


      
                       


        
   
 

            
        </>
    )
}

export default PG
