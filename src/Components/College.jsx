import React, { useEffect, useState } from "react";
import "../styling/college.css";

import Footer from "./Footer";
import arts from "../Images/arts.png"
import law from "../Images/law.png"
import engineer from "../Images/engineer.png"
import doctor from "../Images/doctor.png"
import commerce from "../Images/commerece.png"
import Aos from "aos";
import 'aos/dist/aos.css';

import Header from "./Header.jsx";
import Chat from './Chat'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'





const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const College = () => {
    
    
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
        Aos.init({
        duration:2000});

    },[]);

return (
    <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        <Header />
        <div>
            <button onClick={themeChanger}></button>
            <div className="scroll-to-top"
                style={{
                    float:"right",
                    position: "sticky",
                    top: "0",
                    height:"100%",
                    paddingTop: "40vw",
                    paddingRight:"1vw",
                    cursor:"pointer",
                }}>
            {isVisible && (
            <div onClick={scrollToTop}>
                <i class="fa fa-chevron-up"></i>
            </div>
            )}
            </div>
            <div className="college_des">
                <span> 
                    <h1 className="college_des_heading">Colleges</h1>
                    <br />
                </span>
                <p>
                    There are hundreds of universities and thousands of colleges in India, and thousands upon thousands 
                    more internationally. With so many options, including central universities, state universities, private 
                    universities and a myriad of institutes, choosing a college to attend becomes a major decision. One
                    solution that students often adopt is to consider the college rankings and the marks they have scored,
                    opting to enrol with the highest ranking institute possible with their marks.However, it’s your turn to
                    be smarter, and set yourself apart from the crowd following the trend of ranking universities blindly.
                    While admittedly, college rankings are a good way to judge the performance of a college, it should not 
                    be the only criteria.
                </p>
                <br />
                <h3 className="college_des_subheading">Why You Should Not Rely on College Rankings Alone When Selecting a College</h3>
                <br />
                <p>
                    The process of ranking a college is a mix of subjective and objective analysis of the concerned college.
                    While some aspects such as pass-out percentage, placement rates, and student-teacher ratio have quantifiable
                    numbers, the overall worth of a college involves much more, including the environment the college offers,
                    how open it is to help students grow, and the dedication that is provided to the students.
                </p>
                <br />
                <p>
                    For example, the famous QS World University rankings identify top colleges based on 5 factors. Firstly, 
                    academic reputation accounts for 40 percent of the rating, citations per faculty for 20 percent,
                    student-faculty ratio for 20 percent, employer reputation for 10 percent and ‘internationalisation’
                    of faculty and students for 5 percent each.
                </p> 
                <br />
                <p>
                    Many rankings do not even release the criteria used for ranking, while others incorporate factors
                    such as the number of Nobel laureates an institute has produced. In addition, the rankings are prone
                    to fluctuation and are often influenced by superficial issues such as building infrastructure or library size.
                    The most important point to remember is that your needs are your own, and not necessarily based on the
                    same factors as the bodies posting the rankings. Having a higher number of PhD holding faculty will
                    not automatically result in better teaching.
                </p>
                <br />
                <h3 className="college_des_subheading">Other Factors to Consider When Selecting a College</h3>
                <br />
                <p>
                    So, if you are not to rely entirely on the college rankings, then what should be the criteria to select
                    a college? Well, the simple answer is that there are multiple factors you should keep in mind to ensure
                    you make the best choice for a college.
                </p>
                <br />
                1. Accreditation <br />
                2. Academic Environment <br />
                3. Reviews of Former Students <br />
                4. College Infrastructure <br />
                5. Extracurricular Activities <br />
                6. Placements
            </div>
            <div className="colleges_cards">
            <h1 className="colleges_cards_heading">TYPES OF COURSES</h1>
            <div className="UG-PG Cards">
                <div className="college_ug">
                <a href="#UGCOURSES"
                style={{textDecoration:"none"}}>
                <div class="college_flip">
                    <div className="college_flip_card_inner">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLppzgey3U2YUMBSMWjDgR34-Z5y_OzYRC_OS6dlyULKnb3k6wgpAoy_JZ7h32-DMAN4&usqp=CAU" alt="" className="colleges_ug_img" />
                        <h3>Under Graduate</h3>
                    </div>
                </div>
                </a>
                </div>
                <div class="college_pg">
                <a href="#PGCOURSES"
                style={{textDecoration:"none"}}>
                <div className="college_flip">
                    <div className="college_flip_card_inner">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLppzgey3U2YUMBSMWjDgR34-Z5y_OzYRC_OS6dlyULKnb3k6wgpAoy_JZ7h32-DMAN4&usqp=CAU" alt="" className="colleges_pg_img" />
                        <h3>Post Graduate</h3>
                    </div>
                </div>
                </a>
                </div>
            </div>
            </div>
            <div id="UGCOURSES" className="college_ug_courses">
            <h1>Under Graduate Courses</h1>
                <div data-aos="fade-left" className="college_ug_container">
                    <div className="college_ug_container_img">
                        <img className="college_ug_container_img_img"src={engineer} alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        <div className="college_pg_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF TECHNOLOGY [B.TECH] (MECHANICAL ENGINEERING...
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF TECHNOLOGY [B.TECH] (COMPUTER SCIENCE AND ...
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF TECHNOLOGY [B.TECH] (CIVIL ENGINEERING)
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF TECHNOLOGY [B.TECH] (ELECTRONICS & COMMUNIC...
                            </p>
                        </div>
                
                    </div>
                    <div className="college_ug_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none"
                            }}>
                                <li className="college_li">4 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="college_ug_container">
                    <div className="college_ug_container_img">
                        <img className="college_ug_container_img_img" src={doctor} alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF MEDICINE, BACHELOR OF SURGERY [MBBS]
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF AYURVEDIC MEDICINE AND SURGERY [BAMS]
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF HOMEOPATHIC MEDICINE & SURGERY [BHMS]
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF PHYSIOTHERAPY [BPT]
                            </p>
                        </div>
                
                    </div>
                    <div className="college_ug_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none"
                            }}>
                                <li className="college_li">5 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="college_ug_container">
                    <div className="college_ug_container_img">
                    <img className="college_ug_container_img_img" src={law} alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF LAWS [L.L.B.]
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF ARTS + BACHELOR OF LAWS [B.A.L.L.B.]
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF LAWS [L.L.B.] (HONS.)
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            DIPLOMA IN CYBER LAW

                            </p>
                        </div>
                
                    </div>
                    <div className="college_ug_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none"
                            }}>
                                <li className="college_li">1-3 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="college_ug_container">
                    <div className="college_ug_container_img">
                    <img className="college_ug_container_img_img" src={arts} alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF ARTS [BA] (ENGLISH)
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF ARTS [BA] (ECONOMICS)
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF ARTS [BA] (HISTORY)
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                           BACHELOR OF ARTS [BA] (POLITICAL SCIENCE)
                            </p>
                        </div>
                
                    </div>
                    <div className="college_ug_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none",
                            }}>
                                <li className="college_li">3 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="college_ug_container">
                    <div className="college_ug_container_img">
                    <img className="college_ug_container_img_img"src={commerce} alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF COMMERCE [B.COM]
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF COMMERCE [B.COM] (COMPUTER APPLICATIONS)
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF COMMERCE [B.COM] (HONS.)
                            </p>
                        </div>
                        <hr className="college_ug_line" />
                        <div className="college_ug_container_subcontent">
                            <p className="college_ug_container_subcontent">
                            BACHELOR OF COMMERCE [B.COM] (ACCOUNTING AND FINANCE)
                            </p>
                        </div>
                
                    </div>
                    <div className="college_ug_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none",
                                float:"right"
                            }}>
                                <li className="college_li">3 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                </div>
                <p><a href="/UG">Click for more courses...</a></p>
            </div>
            <div id="PGCOURSES" className="college_pg_courses">
                    <h1>Post Graduate Courses</h1>
                    <div data-aos="fade-left" className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src={engineer} alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF TECHNOLOGY [M.TECH] (COMPUTER SCIENCE AND ENG...
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF TECHNOLOGY [M.TECH] (STRUCTURAL ENGINEERING)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF TECHNOLOGY [M.TECH] (ELECTRONICS AND COMMUNIC...
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF TECHNOLOGY [M.TECH] (MECHANICAL ENGINEERING)
                            </p>
                        </div>
                
                    </div>
                    <div className="college_pg_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none"
                            }}>
                                <li className="college_li">2 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                    </div>
                    <div data-aos="fade-right" className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src={doctor} alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            DOCTORATE OF MEDICINE [MD] (PATHOLOGY)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            DOCTORATE OF MEDICINE [MD] (MICROBIOLOGY)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF SURGERY [MS] (GENERAL SURGERY)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            DOCTORATE OF MEDICINE [MD] (PHYSIOLOGY)
                            </p>
                        </div>
                
                    </div>
                    <div className="college_pg_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none"
                            }}>
                                <li className="college_li">3 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                        
                    </div>
                    <div data-aos="fade-left" className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src={law} alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF LAWS [L.L.M.]
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF LAWS [L.L.M.] (CRIMINAL LAW)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF LAWS [L.L.M.] (CORPORATE LAW)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF LAWS [L.L.M.] (CONSTITUTIONAL LAW)
                            </p>
                        </div>
                
                    </div>
                    <div className="college_pg_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none"
                            }}>
                                <li className="college_li">2 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                        
                    </div>
                    <div data-aos="fade-right" className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src={arts} alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF ARTS [MA] (ENGLISH)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF ARTS [MA] (ECONOMICS)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF ARTS [MA] (HISTORY)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF ARTS [MA] (POLITICAL SCIENCE)
                            </p>
                        </div>
                
                    </div>
                    <div className="college_pg_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none"
                            }}>
                                <li className="college_li">2 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                        
                    </div>
                    <div data-aos="fade-left" className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src={commerce} alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF COMMERCE [M.COM]
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF COMMERCE [M.COM] (FINANCE)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF COMMERCE [M.COM] (COMPUTER APPLICATIONS)
                            </p>
                        </div>
                        <hr className="college_pg_line" />
                        <div className="college_pg_container_subcontent">
                            <p className="college_pg_container_subcontent">
                            MASTER OF COMMERCE [M.COM] (ACCOUNTANCY)
                            </p>
                        </div>
                
                    </div>
                    <div className="college_pg_container_subpoints">
                        <div>
                            <ul
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                listStyle:"none"
                            }}>
                                <li className="college_li">2 YEARS</li>
                                <li className="college_li">FULL TIME</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            style={{
                            backgroundColor:"Grey",
                            borderRadius:"25px",
                            marginTop:"4.9vw",
                            marginRight:"1vw",
                            float:"right",
                            fontSize:"1vw"
                            }}>
                                View All Course
                            </p>
                        </div>
                    </div>
                        
                    </div>    
                    <p><a href="/PG">Click for more courses...</a></p>    
                    
            </div>
            <Chat/>
            < Footer />
        </div>
         </StyledApp>
        </ThemeProvider>
                           
    )
}

export default College