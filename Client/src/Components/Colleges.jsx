
import React, { useState } from "react";
import "../styling/colleges.css";
import logo from "../Images/logo.png"
import Footer from "./Footer";
import HeaderV from "../Videos/Header.mp4"
import headerVed from "../Videos/College_background.mp4"
// import Card from 'react-animated-3d-card'


const Colleges = () => {

    // const Cards = () => {
    //     return <>
    //         <Card       
    //             style={{
    //                 backgroundImage: 'url("https://img.collegedekhocdn.com/media/img/courses/master-tech-banner.jpg")',
    //                 width: '450px',
    //                 height: '300px',
    //                 cursor: 'pointer'
    //             }}
    //         />
    //         <Card       
    //             style={{
    //                 backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ehJY6ewwnoX2bc3GC7kdxVHMllihneEfpQ&usqp=CAU")',
    //                 width: '450px',
    //                 height: '300px',
    //                 cursor: 'pointer'
    //             }}
    //         />
    //     </>
    // }
  
    return (
        <div>
            <div className="colleges_header">
                <img className="colleges_logo" src={logo} alt="" />
                    <div className="colleges_header_vdo_div">
                        {/* <video className="colleges_header_vdoo1" autoPlay loop muted > 
                            <source src={headerVed} type="video/mp4"/>
                        </video>
                        <video className="colleges_header_vdo" autoPlay loop muted > 
                            <source src={HeaderV} type="video/mp4"/>
                        </video> */}
                    </div>
                <div className="colleges_navbar">  
                <details className="colleges_first_details">  
                <ul>      
                    <li className="colleges_nav">
                        <details className="colleges_details">
                            <ul>
                                <li>School</li>
                                <li>Colleges</li>
                            </ul>
                            <summary className="colleges_summary">
                                Careers
                            </summary>
                        </details>
                    </li>
                    <li className="colleges_nav">Ask Us</li>
                    <li className="colleges_nav">About Us</li>
                </ul>
                <summary>
                    Menu
                </summary>
                </details>
                </div>
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
                <h3>Why You Should Not Rely on College Rankings Alone When Selecting a College</h3>
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
                <h3>Other Factors to Consider When Selecting a College</h3>
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
                <div class="college_ug">
                <div class="college_flip">
                    <div class="college_flip_card_inner">
                        <div class="college_flip_card_front">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLppzgey3U2YUMBSMWjDgR34-Z5y_OzYRC_OS6dlyULKnb3k6wgpAoy_JZ7h32-DMAN4&usqp=CAU" alt="" className="colleges_ug_img" />
                            <h3>Explore...</h3>
                        </div>
                        <div class="college_flip_card_back">
                            <h1>Under Graduate</h1>
                        </div>
                    </div>
                </div>
                </div>
                <div class="college_pg">
                <div class="college_flip">
                    <div class="college_flip_card_inner">
                        <div class="college_flip_card_front">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLppzgey3U2YUMBSMWjDgR34-Z5y_OzYRC_OS6dlyULKnb3k6wgpAoy_JZ7h32-DMAN4&usqp=CAU" alt="" className="colleges_pg_img" />
                            <h3>Explore...</h3>
                        </div>
                        <div class="college_flip_card_back">
                            <h1>Post Graduate</h1>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="college_ug_courses">
            <h1>Under Graduate Courses</h1>
                {/* <Cards/> */}
                <div className="college_ug_container">
                    <div className="college_ug_container_img">
                    <img className="college_ug_container_img_img"src="" alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        
                
                    </div>
                </div>
                <div className="college_ug_container">
                    <div className="college_ug_container_img">
                    <img className="college_ug_container_img_img"src="" alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        
                
                    </div>
                </div>
                <div className="college_ug_container">
                    <div className="college_ug_container_img">
                    <img className="college_ug_container_img_img"src="" alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        
                
                    </div>
                </div>
                <div className="college_ug_container">
                    <div className="college_ug_container_img">
                    <img className="college_ug_container_img_img"src="" alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        
                
                    </div>
                </div>
                <div className="college_ug_container">
                    <div className="college_ug_container_img">
                    <img className="college_ug_container_img_img"src="" alt="" />
                    </div>
                    <div className="college_ug_container_content">
                        
                
                    </div>
                </div>
                <p><a href="">Click for more courses...</a></p>
            </div>
            <div className="college_pg_courses">
                    <h1>Post Graduate Courses</h1>
                    {/* <Cards/> */}
                    <div className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src="" alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        
                
                        </div>
                    </div>
                    <div className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src="" alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        
                
                        </div>
                        
                    </div>
                    <div className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src="" alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        
                
                        </div>
                        
                    </div>
                    <div className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src="" alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        
                
                        </div>
                        
                    </div>
                    <div className="college_pg_container">
                        <div className="college_pg_container_img">
                            <img className="college_pg_container_img_img"src="" alt="" />
                        </div>
                        <div className="college_pg_container_content">
                        
                
                        </div>
                        
                    </div>               
            </div>
            < Footer />
        </div>
    )
}

export default Colleges
