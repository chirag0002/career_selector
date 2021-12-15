import React ,  { useEffect, useState } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import '../styling/PG.css';
import mtech from "../Images/mtech.png"
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
                      
                      
                         <div data-aos="fade-right" className="pg_card_1">
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
                     


      
                       


        
   
 

            
        </>
    )
}

export default PG
