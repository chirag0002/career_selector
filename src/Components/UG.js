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
import bba from "../Images/bba.jpg"
import bms from "../Images/bms.jpg"
import bfa from "../Images/bfa.jpg"
import animation from "../Images/animation.jpg"
import bfd from "../Images/bfd.jpg"
import bsw from "../Images/bsw.jpg"
import law from "../Images/law.jpg"
import diploma from "../Images/diploma.jpg"
import bpt from "../Images/bpt.png"
import bttm from "../Images/bttm.png"
import bem from "../Images/bem.png"
import bbs from "../Images/bbs.png"
import bjmc from "../Images/bjmc.png"
import Footer from './Footer';
import Header from "./Header.jsx";
import Chat from './Chat'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import {useSelector} from 'react-redux'

const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;



const UG = () => {
    const check=useSelector((state)=>state.check)
    console.log(check);
    const[theme,setTheme]=useState("dark");
        const themeChanger =() =>{
            theme=== "light" ? setTheme ("dark") : setTheme ("light");
        };
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
     
    useEffect(()=>{
        Aos.init({duration:2000});
    
      },[]);
      
    return (
        <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        <>
        <div class="ug">
        
        <Header />
        <button onClick={themeChanger}></button>
        <div className="ug_container">
               <div className="ug_heading">
                   Undergraduate
               </div>
               <div className="scroll-to-top"
                style={{
                    float:"right",
                    position: "sticky",
                    top: "0",
                    height:"70%",
                    paddingTop: "38vw",
                    paddingRight:"1vw",
                    cursor:"pointer"
                }}>
                {isVisible && (
                <div onClick={scrollToTop}>
                    <i class="fa fa-chevron-up"></i>
                </div>
                )}
            </div>
               
                   <div className="ug_cards">
                   
                       <div  data-aos="fade-left" className="ug_card_1">
                       <img className="ug_image_mtech"src={btech} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Bachelor of Technology (BTech) is a professional undergraduate engineering degree programme awarded to candidates after 
                           they complete four years of study in the field.
                           </p>
                           </div>
                           
                                <div className="ug_btn_1">
                                <a className="ug_btn_click" href="https://www.shiksha.com/b-tech-bachelor-of-technology-chp">Click Here for more </a>
                               </div>
                           </div>
                       </div>


        
          <div   data-aos="fade-right" className="ug_card_2">
                       <img className="ug_image_mtech"src={bcom} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           BCom, having the full form as Bachelor of Commerce, is a three-year UG degree course
                                recognised by the Universities Grants Commission (UGC).
                           </p>
                           </div>
                           
                                <div className="ug_btn_2">
                                <a className="ug_btn_click" href="https://www.shiksha.com/b-com-chp">Click Here for more </a>
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
                                <a className="ug_btn_click" href="https://www.shiksha.com/b-a-bachelor-of-arts-chp">Click Here for more </a>
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
                                <a className="ug_btn_click" href="https://www.shiksha.com/b-sc-chp">Click Here for more </a>
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
                                <a className="ug_btn_click" href="https://collegedunia.com/courses/bachelor-of-computer-applications-bca">Click Here for more </a>
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
                                <a className="ug_btn_click" href="https://www.collegedekho.com/courses/bachelor-of-architecture-barch/?gclid=Cj0KCQiA8ICOBhDmARIsAEGI6o3tKSeBSPYLP2t2P45HowegIBg8YV4DCUIokzLr2GEfPqttxgKpsuUaAj59EALw_wcB">Click Here for more </a>
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
                                <a className="ug_btn_click" href="https://collegedunia.com/courses/bachelor-of-pharmacy-bpharma">Click Here for more </a>
                               </div>
                           </div>




                           <div data-aos="fade-left" className="ug_card_8">
                       <img className="ug_image_mtech"src={bba} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           The Bachelor of Business Administration (BBA) is a bachelor's
                            degree in business administration. In the United States, the 
                            degree is conferred after four years of full-time study in one
                             or more areas of business concentrations.
                           </p>
                           </div>
                           
                        <div className="ug_btn_8">
                                <a className="ug_btn_click" href="https://collegedunia.com/courses/bachelor-of-business-administration-bba">Click Here for more </a>
                               </div>
                           </div>




                           <div data-aos="fade-left" className="ug_card_9">
                       <img className="ug_image_mtech"src={bms} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           BMS full form Bachelor of Management Studies is a 3 year 
                           undergraduate course. The course is designed to study analytical
                            aspects of Business Management and get in-depth knowledge in
                             several managerial or business-related subjects such as human 
                             resource management, economics, marketing, business analytics etc.
                           </p>
                           </div>
                           
                        <div className="ug_btn_9">
                                <a className="ug_btn_click" href="https://collegedunia.com/courses/bachelor-of-management-studies-bms">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-left" className="ug_card_10">
                       <img className="ug_image_mtech"src={bfa} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           BFA or Bachelor of Fine Arts is an undergraduate degree course
                            which deals with the study of Visual or Performing Arts. The
                             course is sometimes also referred to as Bachelor of Visual
                              Arts (BVA) in which the study of Visual Arts includes subjects 
                              such as painting, sculpture, photography, literature, animation,
                               etc. 
                           </p>
                           </div>
                           
                        <div className="ug_btn_10">
                                <a className="ug_btn_click" href="https://www.shiksha.com/bfa-bachelor-of-fine-arts-chp">Click Here for more </a>
                               </div>
                           </div>




                           <div data-aos="fade-left" className="ug_card_11">
                       <img className="ug_image_mtech"src={bem} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Bachelor of Event Management is the process of 
                           planning of project management to design and
                            establishment of small and large-scale personal 
                            or organizational activities such as concerts,
                             conventions, ceremonies, weddings, etc. 
                           </p>
                           </div>
                           
                        <div className="ug_btn_11">
                                <a className="ug_btn_click" href="https://www.careers360.com/courses/bem-bachelor-of-event-management">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-left" className="ug_card_12">
                       <img className="ug_image_mtech"src={bjmc} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           BJMC (Bachelor of Journalism and Communication) is a 
                           three-duration undergraduate degree course for candidates
                            who wish to build their career in the field of journalism 
                            and mass communication. ... Career opportunities for students 
                            in the field of mass communication are very high.
                           </p>
                           </div>
                           
                        <div className="ug_btn_12">
                                <a className="ug_btn_click" href="https://www.collegedekho.com/courses/bachelor-of-journalism-and-mass-communication-bjmc/?gclid=Cj0KCQiA8ICOBhDmARIsAEGI6o2Nu_3YzhTrujRECy-oGdU51NWS9FyCIudqAm89USyJiJVgARcX0fAaAsbuEALw_wcB">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-left" className="ug_card_13">
                       <img className="ug_image_mtech"src={bfd} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Bachelor of Fashion Design or Bachelor of Fashion 
                           Designing is an undergraduate Fashion Designing course.
                            Fashion design is the art of using fabrics, colours and 
                            ornamentation to craft different fashion items like clothing, 
                            textiles, jewellery, footwear and other accessories.
                           </p>
                           </div>
                           
                        <div className="ug_btn_13">
                                <a className="ug_btn_click" href="https://targetstudy.com/courses/bachelor-of-fashion-design.html">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-left" className="ug_card_14">
                       <img className="ug_image_mtech"src={bsw} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Bachelor of Social Work or BSW is a professional
                            degree that is offered at the undergraduate (UG)
                             level. The duration of a BSW course is usually three 
                             years and candidates need to positively complete the 
                             course within a maximum duration of six years.
                           </p>
                           </div>
                           
                        <div className="ug_btn_14">
                                <a className="ug_btn_click" href="https://www.shiksha.com/bsw-bachelor-of-social-work-chp">Click Here for more </a>
                               </div>
                           </div>




                           <div data-aos="fade-left" className="ug_card_15">
                       <img className="ug_image_mtech"src={bbs} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Stemming from the area of Business and Management, 
                           Bachelor of Business Studies is a course that lays the 
                           foundation for a career in commerce. BBS course has
                            wide-ranging variants with a core focus on the study of business.
                           </p>
                           </div>
                           
                        <div className="ug_btn_15">
                                <a className="ug_btn_click" href="https://www.collegedekho.com/courses/bachelor-business-studies/">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-left" className="ug_card_16">
                       <img className="ug_image_mtech"src={bttm} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Bachelor of Tourism and Travel Management, also known 
                           as B.T.T.M. is an undergraduate degree programme which
                            is a sought after course for students willing to make
                             a career in the field of travel and tourism.
                           </p>
                           </div>
                           
                        <div className="ug_btn_16">
                                <a className="ug_btn_click" href="https://www.careers360.com/courses/bttm-bachelor-of-tourism-and-travel-management">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-left" className="ug_card_17">
                       <img className="ug_image_mtech"src={bpt} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Bachelor of Physiotherapy or BPT is an undergraduate 
                           programme that deals with the structure of the human body.
                            The duration of this course is four years and once the duration
                             of the programme is over, students are required to complete a six months internship.
                           </p>
                           </div>
                           
                        <div className="ug_btn_17">
                                <a className="ug_btn_click" href="https://www.shiksha.com/bpt-bachelor-of-physiotherapy-chp">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-left" className="ug_card_18">
                       <img className="ug_image_mtech"src={animation} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Animation Courses After 12th In India is basically a 
                           visual technique course that makes the illusion of motion
                            by displaying a collection of images in rapid sequence.
                             As we are getting into the digital world, there are many
                              new career opportunities coming up. Animation is one of them. 
                           </p>
                           </div>
                           
                        <div className="ug_btn_18">
                                <a className="ug_btn_click" href="https://www.vidhyaa.in/blog/animation-courses-after-12th-in-india">Click Here for more </a>
                               </div>
                           </div>



                           <div data-aos="fade-left" className="ug_card_19">
                       <img className="ug_image_mtech"src={law} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           BCom LLB is a professional law programme which is of five
                            years duration. Bachelor of Commerce and Bachelor of
                             Legislative Law (BCom LLB) is an integrated course
                              wherein aspirants are taught both commerce and law subjects. 
                           </p>
                           </div>
                           
                        <div className="ug_btn_19">
                                <a className="ug_btn_click" href="https://www.shiksha.com/b-com-ll-b-chp">Click Here for more </a>
                               </div>
                           </div>


                           <div data-aos="fade-left" className="ug_card_20">
                       <img className="ug_image_mtech"src={diploma} alt=""/>
                          <div  className="about_ug_card1_">
                           <p class="ug_content_para">
                           Many students opt for diploma courses after graduation
                            in order to gain training and academic experience in 
                            a particular field in a shorter duration. This helps
                             them attain the right set of skills to discover various 
                             job opportunities in their chosen field.
                           </p>
                           </div>
                           
                        <div className="ug_btn_20">
                                <a className="ug_btn_click" href="https://leverageedu.com/blog/diploma-courses-after-graduation/">Click Here for more </a>
                               </div>
                           </div>
                           <Chat />
                           <Footer/>
                           



                           </div>
                           </div>
                            </>
                           </StyledApp>
                           </ThemeProvider>
                           
                           
        
        )
    }

export default UG
