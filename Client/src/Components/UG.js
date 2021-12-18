import React ,  { useEffect, useState } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import '../styling/UG.css';
import btech from "../Images/btech.jpg"
import Ba from "../Images/Ba.jpg"
import bca from "../Images/bca.png"
import bcom from "../Images/bcom.jpg"
import bsc from "../Images/bsc.jpg"
import barch from "../Images/barch.jpg"
import bpharma from "../Images/bpharma.jpg"
import Footer from './Footer';
import Header from "./Header.jsx";


const UG = () => {
     
    useEffect(()=>{
        Aos.init({duration:2000});
    
      },[]);
      
    return (
        <>
        <div class="ug">
        <Header />
        <div className="ug_container">
               <div className="ug_heading">
                   Undergraduate
               </div>
               
                   <div className="ug_cards">
                   
                       <div className="ug_card_1">
                       <img className="ug_image_mtech"src={btech} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Bachelor of Technology (BTech) is a professional undergraduate engineering degree programme awarded to candidates after 
                           they complete four years of study in the field.
                           </p>
                           </div>
                           
                                <div className="ug_btn_1">
                                <a className="ug_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                       </div>


        <div className="ug_from_2_till_5">
          <div   data-aos="fade-right" className="ug_card_2">
                       <img className="ug_image_mtech"src={bcom} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           BCom, having the full form as Bachelor of Commerce, is a three-year UG degree course
                                recognised by the Universities Grants Commission (UGC).
                           </p>
                           </div>
                           
                                <div className="ug_btn_2">
                                <a className="ug_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                       </div>


        
          <div data-aos="fade-left" className="ug_card_3">
                       <img className="ug_image_mtech"src={Ba} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Bachelor of Arts is a bachelor's 
                               degree awarded for an undergraduate program in the arts, or in some cases other disciplines. A Bachelor of Arts degree course
                                is generally completed in three or four years, depending on the country and institution.
                           </p>
                           </div>

                                <div className="ug_btn_3">
                                <a className="ug_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>



                             <div data-aos="fade-right" className="ug_card_4">
                       <img className="ug_image_mtech"src={bsc} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           BSc or Bachelor of Science is an undergraduate degree of three years duration which 
                               is universally offered across institutes and universities across India. BSc is one
                                of the most popular courses opted by students who have a flair for scientific 
                                aptitude and zeal for research-oriented and calculative approaches based on 
                                a proven systematic method.
                           </p>
                           </div>
                           
                        <div className="ug_btn_4">
                                <a className="ug_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>
                      
                      
                         <div data-aos="fade-left" className="ug_card_5">
                       <img className="ug_image_mtech"src={bca} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           BCA, full form Bachelor of Computer Application, is a 3-year UG course
                            that imparts knowledge on the basics of computer application and software development.
                           </p>
                           </div>
                           <div className="ug_btn_5">
                                <a className="ug_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-right" className="ug_card_6">
                       <img className="ug_image_mtech"src={barch} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           This course consists of various aspects of different streams of humanities,
                            engineering, aesthetics, etc. The B.Arch syllabus consists of various theory 
                            subjects, studio, project work, practical training, and research training.
                           </p>
                           </div>
                           
                        <div className="ug_btn_6">
                                <a className="ug_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>




                           <div data-aos="fade-left" className="ug_card_7">
                       <img className="ug_image_mtech"src={bpharma} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           B Pharmacy or Bachelor of Pharmacy is a 4 years Undergraduate
                            degree program that deals with the intricacies of the pharmaceutical
                             industry, starting from manufacturing medicines and drugs to dispensing
                              them across various medical stores, distributors and stockists.
                           </p>
                           </div>
                           
                        <div className="ug_btn_7">
                                <a className="ug_btn_click" href="#">Click Here for more </a>
                               </div>
                           </div>

                           <Footer/>



                           </div>
                           </div>
                           
                           
        </>
        )
    }

export default UG
