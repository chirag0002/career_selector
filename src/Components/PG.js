import React ,  { useState, useEffect} from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import '../styling/PG.css';
import mtech from "../Images/mtech.png"
import mcom from "../Images/Mcom.png"
import MA from "../Images/M.A.png"
import MSC from "../Images/msc.png"
import MCA from "../Images/MCA.png"
import MBA from "../Images/Mba.png"
import PGDM from "../Images/PGDM.png"
import Fin from "../Images/finance.png"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx";
import Chat from './Chat'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import MArch from "../Images/MArch.png"
import MFM from "../Images/MFM.png"
import Journalism from "../Images/Journalism.jpg"
import MVSC from "../Images/MVSc-Course.png"
import MSCN from "../Images/MSC-Nursing.jpg"
import MD from "../Images/MD.png"
import MDS from "../Images/MDS.jpg"
import Machine from "../Images/Machine.png"
import LLM from "../Images/LLM.png"
import MPLAN from "../Images/MPLAN.png"
import MPHARMA from "../Images/MPHARMA.jpg"
import MHM from "../Images/MHM.PNG"

const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const PG = () => {
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
    const[theme,setTheme]=useState("dark");
        const themeChanger =() =>{
            theme=== "light" ? setTheme ("dark") : setTheme ("light");
        };
      useEffect(()=>{
    Aos.init({
      duration:2000});

  },[]);
  
    return (
      <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        <button onClick={themeChanger}></button>
        <div className="scroll-to-top"
                style={{
                    float:"right",
                    position: "sticky",
                    top: "38rem",
                    height:"100%",
                    paddingTop: "0vw",
                    paddingRight:"1vw",
                    cursor:"pointer"
                }}>
                {isVisible && (
                <div onClick={scrollToTop}>
                    <i class="fa fa-chevron-up"></i>
                </div>
                )}
            </div>
        
        <>
        <div class="pg">
        
        <Header />
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
                                <a className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Engineering">Click Here for more </a>
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
                                <a className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Commerce">Click Here for more </a>
                               </div>
                           </div>
                       </div>


        </div>
          <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MA} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                           Master of Arts or MA is a postgraduate degree which can be pursued by students who have completed their bachelors (also known as, undergraduate degree). There are various specializations. 
                           </p>
                           </div>

                                <div className="pg_btn">
                                <a className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Arts">Click Here for more </a>
                               </div>
                           </div>
                             <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MCA} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                          Master of Computer Applications (MCA) is a two year professional post-graduate programme for candidates wanting to delve deeper into the world of computer application development with the help of learning modern programming language. 
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/MCA">Click Here for more </a>
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
                                <a className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Science">Click Here for more </a>
                               </div>
                           </div>
                     <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MBA} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                          The Master of Business Administration (MBA) is an internationally-recognized degree designed to develop the skills required for careers in business and management. The value of the MBA, however, is not limited strictly to the business world.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Business_Administration">Click Here for more </a>
                               </div>
                           </div>
                              <div data-aos="fade-right" className="pg_card_1">
                       <img className="pg_image_mtech"src={PGDM} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                           A Post Graduate Diploma in Management (PGDM course) is designed with the aim of providing specific topic-based knowledge and understanding either in broad management or in a particular aspect. 
                           </p>
                           </div>
                           <div className="pg_btn">
                                <a className="pg_btn_click" href="https://en.wikipedia.org/wiki/Postgraduate_diploma">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={Fin} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                         A master’s degree in finance is a popular choice for students looking to springboard their careers in the financial sector. In today’s job market, graduates with this skillset are often highly coveted because of how easily the skills learned within this type of program can translate into a variety of different fields. 
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Finance">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MArch} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                         M Arch is a 2 year postgraduate course in architecture. M arch is a professional degree course which helps students to acquire Architectural License. Students need to complete B Arch in order to apply for M Arch.  Students need to complete B Arch in order to apply for M Arch entrance Exams. 
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Architecture">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={Machine} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                         Machine Learning or Data Science is one of the hottest fields in the current job market as data eclipsing oil has become the highest-valued resource in the world. Machine learning helps in understanding human choices and preferences through data which leads to the development of improved user-based technologies. 
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_in_Data_Science">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={LLM} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                        Master of Legislative Laws is the full form of LLM. LLM is a 2 years postgraduate degree law. Master of Law helps gaining an in-depth knowledge of a particular field of law through intensive research in that field of law.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Laws">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MPHARMA} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
M.Pharm is a two-year post-graduate course which has been designed to focus on the field of pharmaceutical science.  
Under this programme, the students get in-depth knowledge on how to prepare medicines, help in treating patients, advising patients on the usage of medicines, the side effects, dosage, etc.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Master_of_Pharmacy">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MPLAN} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                        Masters of Planning is a two-year postgraduate course which studies Planning and Structuring of any fundamental ecosystem for living purpose. It is designed with the planning of some of the most sophisticated structures for humans and animals. 
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Urban_planning_education">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MHM} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                        MHM or Master of Hotel Management is a 2-year postgraduate program which is involved in the hospitality sector with management and administration techniques. It provides a unique combination of operational, fundamental and technological skills in Hotel management.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Hospitality_management_studies">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MDS} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                         MDS in Conservative Dentistry and Endodontics is a postgraduate course in dentistry. Conservative Dentistry is concerned with the prevention and treatment of diseases and injuries that originate in the teeth. In this type of medication, diseased or fractured teeth are restored with materials that are biologically acceptable.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Dental_degree">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MD} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                         MD Microbiology is a three year Post Graduate course. Eligibility for the course is MBBS degree from the reputed university approved by medical council of India. 
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://targetstudy.com/courses/md-microbiology.html">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MSCN} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                        The Master's degree in Obstetrics and Gynecology Nursing is a two-year postgraduate program. M.Sc in Obstetrics and Gynecology Nursing are two related nursing areas where women's reproductive health is addressed by practitioners. 
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://targetstudy.com/courses/msc-obstetrics-gynecology-nursing.html">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MFM} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                         MFM full form Master in Fashion Management, is a postgraduate program of 2 years that focuses on imparting knowledge and skills required to develop industry leaders and top managers in the fashion industry.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://www.careers360.com/courses/mfm-master-of-fashion-management">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={MVSC} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                        Mv.Sc. Veterinary parasitology is a 2-year postgraduate course which is designed to teach students the relationship between a parasite and its host body interactions. The main objective of this course is to study the parasites of both domestic and wildlife animals.
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://targetstudy.com/courses/mvsc-veterinary-parasitology.html">Click Here for more </a>
                               </div>
                           </div>
                            <div data-aos="fade-left" className="pg_card_1">
                       <img className="pg_image_mtech"src={Journalism} alt=""/>
                          <div  className="about_pg_card1_">
                           <p class="pg_content_para">
                         MJMC (Master of Journalism and Mass Communication) is a postgraduate mass communication program which is of 2-year duration. This program involves the study of Newspapers, Magazines, Cinema, Radio, etc to convey information to the audience.  
                           </p>
                           </div>
                           
                        <div className="pg_btn">
                                <a  className="pg_btn_click" href="https://en.wikipedia.org/wiki/Mass_communication">Click Here for more </a>
                               </div>
                           </div>
                           <Chat />
                      <Footer />


      
                       


        
   
 

            
        </>
        </StyledApp>
        </ThemeProvider>
    )
}

export default PG
