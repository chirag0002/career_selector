import React ,  { useEffect, useState } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import '../styling/exams.css';
import ias from "../Images/ias.jpg"
import iit from "../Images/iit.jpg"
import ca from "../Images/ca.png"
import cat from "../Images/cat.jpg"
import clat from "../Images/clat.jpg"
import ies from "../Images/ies.png"
import aims from "../Images/aims.jpg"
import gate from "../Images/gate.jpg"
import nda from "../Images/nda.jpg"
import nid from "../Images/nid.jpg"
import nift from "../Images/nift.jpg"
import uceed from "../Images/uceed.jpg"
import ExamSearchBar from './ExamSearchBar';
import Footer from './Footer';
import Chat from './Chat';
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import Header from "./Header.jsx";
import bitsat  from "../Images/bitsat.jpg"
import indian  from "../Images/indian.jpg"
import jipmer  from "../Images/jipmer.jpg"
import manipal  from "../Images/manipal.jpg"
import navy  from "../Images/navy.jpg"
import army  from "../Images/army.jpg"
import aieed  from "../Images/aieed.png"
import hsee  from "../Images/hsee.jpg"
import jnu  from "../Images/jnu.jpg"
import hotel  from "../Images/hotel.jpg"
import ailet  from "../Images/ailet.jpg"
import kvpy  from "../Images/kvpy.jpg"
import nest from "../Images/nest.jpg"
import bhu from "../Images/bhu.jpg"
import banasthali from "../Images/banasthali.jpg"





const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const Exams = () => {
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
        Aos.init({duration:2000});
    
      },[]);
    return (
        <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        <Header />
        <button onClick={themeChanger}></button>
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
        <>
        <div class="exam">
        
        <div className="exam_container">
               <div className="exam_heading">
                   Competetive Exams
               </div>
               <ExamSearchBar placeholder="Search for an exam..."/>
               
                   <div className="exam_cards">
                   
                       <div id="ias" className="exam_card_1">
                       <img className="exam_image_card1"src={ias} alt=""/>
                          <div  className="about_exam_card1_">
                           <p class="exam_content_para1">
                           The IAS exam (officially known as the Civil Services Examination) 
                           is conducted by the Union Public Service Commission (UPSC) annually. 
                           Those who clear all the three stages of the IAS exam enter into the 
                           prestigious civil services of the country, and become officers in the 
                           Indian Administrative Service (IAS), Indian Police Service (IPS), Indian 
                           Foreign Service (IFS) and a host of other services. Although regarded as 
                           one of the toughest exams in the country, with the right approach and strategy,
                            an aspirant can crack the IAS examination in the very first attempt.
                              
                           </p>
                           </div>
                           <div className="exam_link_1">
                                <a className="exam_link_click1" href=" ">Click Here for more Information </a>
                               </div>
                           </div>



                           <div id="jee" className="exam_card_2">
                       <img className="exam_image_card2"src={iit} alt=""/>
                          <div  className="about_exam_card2_">
                           <p class="exam_content_para2">
                           Joint Entrance Examination  Advanced (JEE-Advanced), formerly
                            the Indian Institutes of Technology-Joint Entrance Examination 
                            (IIT-JEE), is an academic examination held annually in India. It
                             is organised by one of the seven "old" IITs (IIT Roorkee, IIT Kharagpur,
                              IIT Delhi, IIT Kanpur, IIT Bombay, IIT Madras, and IIT Guwahati)[3] 
                              under the guidance of the Joint Admission Board (JAB). 
                                    
                           </p>
                           </div>
                           
                                <div className="exam_link_2">
                                <a className="exam_link_click2" href=" ">Click Here for more Information </a>
                               </div>
                           </div>



                           <div  id="ca"  className="exam_card_3">
                       <img className="exam_image_card3"src={ca} alt=""/>
                          <div  className="about_exam_card3_">
                           <p class="exam_content_para3">
                           Students who have a commerce background are the perfect fit for
                            CAs. Rather most students enroll for the CA exam when they pass 
                            out from 10+2. But there is also a direct route to do CA. You need
                             to be a graduate, and you can sit for the CA exam. Before enrolling,
                              remember that it’s not for the faint-hearted. You need to put a lot
                               of hard work into this ICAI Exam course.
                               
            </p>
                           </div>
                           
                                <div className="exam_link_3">
                                <a className="exam_link_click3" href= " " >Click Here for more Information </a>
                               </div>
                           </div>








                           <div id="cat" className="exam_card_4">
                       <img className="exam_image_card4"src={cat} alt=""/>
                          <div  className="about_exam_card4_">
                           <p class="exam_content_para4">
                           The Common Admission Test (CAT) is a computer based test for
                            admission in a graduate management programs. The test consists 
                            of three sections: Verbal Ability and Reading Comprehension (VARC), 
                            Data Interpretation and Logical Reasoning (DILR) and Quantitative Ability 
                            (QA). The exam is taken online over a period of three hours, with one hour
                             per section. 
                           </p>
                           </div>
                           
                                <div className="exam_link_4">
                                <a className="exam_link_click4" href="https://en.wikipedia.org/wiki/Common_Admission_Test">Click Here for more Information </a>
                               </div>
                           </div>






                           <div id="clat"  className="exam_card_5">
                       <img className="exam_image_card5"src={clat} alt=""/>
                          <div  className="about_exam_card5_">
                           <p class="exam_content_para5">
                           Common Law Admission Test (CLAT) is a centralized national level entrance 
                           test for admissions to twenty two National Law Universities (NLU) in India.
                            Most private and self-financed law schools in India also use these scores
                            for law admissions. The test is taken after
                               the Higher Secondary Examination or the 12th grade for admission to integrated under-graduate
                                degree in Law (BA LL.B) and after Graduation in Law for Master of Laws (LL.M) programs offered 
                                by these law schools. 
                           </p>
                           </div>
                           
                                <div className="exam_link_5">
                                <a className="exam_link_click5" href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">Click Here for more Information </a>
                               </div>
                           </div>










                           <div  id="ies"  className="exam_card_6">
                       <img className="exam_image_card6"src={ies} alt=""/>
                          <div  className="about_exam_card6_">
                           <p class="exam_content_para6">
                           Indian Engineering Services (IES) or Engineering Services Examination (ESE)
                            comprise of engineers who work under the government of India and designated as 
                            Class-1 officer. They administer a large segment of the public sector economy,
                             which constitutes of Indian Railways, Power, Telecommunications, Central Water
                              engineering, Defence service of Engineers, Central Engineering Service, namely.
                               

                           </p>
                           </div>
                           
                                <div className="exam_link_6">
                                <a className="exam_link_click6" href="https://www.careerindia.com/upsc/ies-exam-e26.html">Click Here for more Information </a>
                               </div>
                           </div>
















                           <div id="aims"  className="exam_card_7">
                       <img className="exam_image_card7"src={aims} alt=""/>
                          <div  className="about_exam_card7_">
                           <p class="exam_content_para7">
                           The admission to the fifteen All India Institute
                            of Medical Sciences (AIIMS) is taken through the AIIMS 
                            MBBS 2019 entrance exam. AIIMS is considered to be the most
                            coveted Institute for which the number of aspirants taking the 
                            entrance exam goes up to 3 lakh. AIIMS, New Delhi is the responsible 
                            body for holding the admission process each year.
                           </p>
                           </div>
                           
                                <div className="exam_link_7">
                                <a className="exam_link_click7" href="https://raoiit.com/what-is-aiims.php">Click Here for more Information </a>
                               </div>
                           </div>














                           <div id="gate"  className="exam_card_8">
                       <img className="exam_image_card8"src={gate} alt=""/>
                          <div  className="about_exam_card8_">
                           <p class="exam_content_para8">
                           The Graduate Aptitude Test in Engineering (GATE) is an
                            examination conducted in India that primarily tests the 
                            comprehensive understanding of various undergraduate subjects 
                            in engineering and science for admission into the Masters Program 
                            and Job in Public Sector Companies. GATE is conducted jointly by the 
                            Indian Institute of Science and seven Indian Institutes of Technologies 
                            at Roorkee, Delhi, Guwahati, Kanpur, Kharagpur, Chennai (Madras) and Mumbai
                             (Bombay) on behalf of the National Coordination Board – GATE, Department of
                              Higher Education, Ministry of Education (MoE), Government of India.The GATE 
                              score of a candidate reflects the relative performance level of a candidate.
                               
                           </p>
                           </div>
                           
                                <div className="exam_link_8">
                                <a className="exam_link_click8" href="https://engineering.careers360.com/articles/all-about-gate">Click Here for more Information </a>
                               </div>
                           </div>













                           <div id="nda"  className="exam_card_9">
                       <img className="exam_image_card9"src={nda} alt=""/>
                          <div  className="about_exam_card9_">
                           <p class="exam_content_para9">
                           The NDA exam is conducted by UPSC for admission to the Army,
                            Navy and Air Force wings of the NDA. This exam is a gateway
                             for candidates looking forward to joining Defence Forces including 
                             Army, Navy and Air Force. This is a national level exam conducted 
                             twice a year: NDA I and NDA II to help candidates make a career in
                              Defence services. 

 
                           </p>
                           </div>
                           
                                <div className="exam_link_9">
                                <a className="exam_link_click9" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>


                           <div  id="nid"  className="exam_card_10">
                       <img className="exam_image_card10"src={nid} alt=""/>
                          <div  className="about_exam_card10_">
                           <p class="exam_content_para10">
                           The National Institute of Design (NID) is a premiere design
                            school located in Ahmedabad (main campus), Gandhinagar, Bangalore 
                            (R&D), Kurukshetra (Graduate Diploma Programs in Design) and Vijaywada
                             (Graduate Diploma Programs in Design). Recently NID has opened centres 
                             in Andhra Pradesh (Graduate Diploma Programs in Design), Haryana 
                             (Graduate Diploma Programs in Design), Madhya Pradesh (Graduate Diploma Programs in Design)
                              & Assam (Graduate Diploma Programs in Design) . 
 
                           </p>
                           </div>
                           
                                <div className="exam_link_10">
                                <a className="exam_link_click10" href="https://bangalorestudy.com/exams/nid-dat">Click Here for more Information </a>
                               </div>
                           </div>






                           <div id="nift" className="exam_card_11">
                       <img className="exam_image_card11"src={nift} alt=""/>
                          <div  className="about_exam_card11_">
                           <p class="exam_content_para11">
                           The National Institute of Fashion Technology (NIFT) conducts 
                           the NIFT entrance exam to shortlist aspirants for admission to 
                           its design programs such as Bachelor of Design (BDes), Bachelor 
                           of Fashion Technology (BFTech), Master of Design (MDes), Master
                            of Fashion Management (MFM) and Master of Fashion Technology 
                            (MFTech). Considered to be a pioneer in fashion education, NIFT
                             has its headquarters in New Delhi. Apart from New Delhi, NIFT has
                              campuses in Mumbai, Kolkata, Bangalore.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_11">
                                <a className="exam_link_click11" href="https://www.shiksha.com/design/nift-entrance-exam">Click Here for more Information </a>
                               </div>
                           </div>




                           <div id="uceed" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. 

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>




                           <div  id="bitsat"  className="exam_card_13">
                       <img className="exam_image_card13"src={bitsat} alt=""/>
                          <div  className="about_exam_card13_">
                           <p class="exam_content_para13">
                          
                          
                           Birla Institute of Technology and Science Admission Test
                            (BITSAT) 2022 is an entrance exam conducted by the Birla
                             Institute of Technology and Science (BITS), Pilani, for 
                             admissions to undergraduate engineering courses (BE) at 
                             its three campuses located at Pilani, Goa and Hyderabad.
                              

 
                           </p>
                           </div>
                           
                                <div className="exam_link_13">
                                <a className="exam_link_click13" href="https://collegedunia.com/exams/bitsat">Click Here for more Information </a>
                               </div>
                           </div>





                           <div id="jipmer"  className="exam_card_14">
                       <img className="exam_image_card14"src={jipmer} alt=""/>
                          <div  className="about_exam_card14_">
                           <p class="exam_content_para14">
                           JIPMER is a national level under graduate medical entrance exam,
                            conducted by Jawaharlal Institute of Postgraduate Medical Education 
                            and Research (JIPMER) for the admission to MBBS programmes.
                            </p>
                           </div>
                           
                                <div className="exam_link_14">
                                <a className="exam_link_click14" href="https://www.careerindia.com/exams/entrance-exam/what-is-jipmer-014168.html">Click Here for more Information </a>
                               </div>
                           </div>




                           <div id="manipal"  className="exam_card_15">
                       <img className="exam_image_card15"src={manipal} alt=""/>
                          <div  className="about_exam_card15_">
                           <p class="exam_content_para15">
                           Manipal Academy of Higher Education (MAHE) conducts 
                           its own online entrance exam to offer admissions to
                            candidates in the programmes that it has on offer.
                             Candidates can secure admissions in courses provided at
                              Manipal University on the basis of their rank/score in 
                              the Manipal Entrance Test (MET). 

 
                           </p>
                           </div>
                           
                                <div className="exam_link_15">
                                <a className="exam_link_click15" href="https://www.shiksha.com/b-tech/met-exam">Click Here for more Information </a>
                               </div>
                           </div>





                           <div id="indian"  className="exam_card_16">
                       <img className="exam_image_card16"src={indian} alt=""/>
                          <div  className="about_exam_card16_">
                           <p class="exam_content_para16">
                           IMUCET is an All India Level merchant navy entrance exam .
                            It stands for Indian Maritime University Common Entrance Test .
                             A candidate must clear this exam before doing any undergraduate
                              programme in merchant navy. If he fails to clear it then he won't
                               be eligible for any course in merchant navy. The level of this exam
                                is moderate. Normal and easy questions from PCM of class 11 and 12 
                                are asked. English and G.K is also there. An average student who has
                                 around 65% in class 12 can easily clear it.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_16">
                                <a className="exam_link_click16" href="https://www.shiksha.com/university/imu-chennai-indian-maritime-university-imuc/imucet-exam">Click Here for more Information </a>
                               </div>
                           </div>




                           <div id="navy"  className="exam_card_17">
                       <img className="exam_image_card17"src={navy} alt=""/>
                          <div  className="about_exam_card17_">
                           <p class="exam_content_para17">
                           Applications are invited from UNMARRIED MALE CANDIDATES
                            (fulfilling the conditions of nationality as laid down by the Govt. of India)
                             to join the prestigious Indian Naval Academy, Ezhimala, Kerala for a four year
                              B.Tech degree course under the 10+2 (B.Tech) Cadet Entry Scheme.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_17">
                                <a className="exam_link_click17" href="https://www.joinindiannavy.gov.in/en/event/officer-entry-10-2-b-tech-cadet-entry-scheme-permanent-commission-jan-2020-online-from-31-may-2019-t.html">Click Here for more Information </a>
                               </div>
                           </div>




                           <div  id="army"  className="exam_card_18">
                       <img className="exam_image_card18"src={army} alt=""/>
                          <div  className="about_exam_card18_">
                           <p class="exam_content_para18">
                           Applications are invited from unmarried male Candidates who have passed 10+2 examination 
                           with Physics, Chemistry and Mathematics (hereinafter referred to as PCM) subjects and appeared 
                           in JEE (Mains) 2021 examination and fulfill the eligibility conditions prescribed in the subsequent 
                           paragraphs, for the grant of Permanent Commission in the Army.


 
                           </p>
                           </div>
                           
                                <div className="exam_link_18">
                                <a className="exam_link_click18" href="https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/TES-46__Notification.pdf">Click Here for more Information </a>
                               </div>
                           </div>




                           <div id="aieed"  className="exam_card_19">
                       <img className="exam_image_card19"src={aieed} alt=""/>
                          <div  className="about_exam_card19_">
                           <p class="exam_content_para19">
                           Arch College of Design and Business conducts the All India Entrance
                            Examination for Design (AIEED) to offer admissions to its undergraduate 
                            as well as postgraduate design programmes. The exam is held in three stages/
                             phases - Stage I (General Aptitude Test or GAT ), Stage II (Creative Aptitude 
                             Test or CAT) and Stage III (Personal Interaction).Arch College of Design and
                              Business entrance exam is designed in such a way to test the “aesthetic sense, 
                              creativity & design sensitivity of students seeking fulfilling careers in the
                               various fields of design. 
 
                           </p>
                           </div>
                           
                                <div className="exam_link_19">
                                <a className="exam_link_click19" href="https://www.aieed.com/">Click Here for more Information </a>
                               </div>
                           </div>







                           <div id="hsee"  className="exam_card_20">
                       <img className="exam_image_card20"src={hsee} alt=""/>
                          <div  className="about_exam_card20_">
                           <p class="exam_content_para20">
                           The Humanities and Social Sciences Entrance Examination or
                            HSEE is a national level entrance test conducted every year 
                            by Indian Institute of Technology Madras for admission to the 
                            master programme offered by the Department of Humanities and 
                            Social Sciences (HSS) of the institute.
 
                           </p>
                           </div>
                           
                                <div className="exam_link_20">
                                <a className="exam_link_click20" href="https://hsee.iitm.ac.in/">Click Here for more Information </a>
                               </div>
                           </div>










                           <div id="jnu" className="exam_card_21">
                       <img className="exam_image_card21"src={jnu} alt=""/>
                          <div  className="about_exam_card21_">
                           <p class="exam_content_para21">
                           The Jawaharlal Nehru University constituted under 
                           the Jawaharlal Nehru University Act 1966, (53 of 1966)
                            came into existence in 1969. The approach of the University
                             has been to evolve policies and programmes which will make JNU
                              a distinct addition to the national resources in higher education.
                               Admission to JNU is based on the performance of candidates in the 
                               All India Level Entrance Examination.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_21">
                                <a className="exam_link_click21" href="https://jnuexams.nta.ac.in/">Click Here for more Information </a>
                               </div>
                           </div>










                           <div id="hotel"  className="exam_card_22">
                       <img className="exam_image_card22"src={hotel} alt=""/>
                          <div  className="about_exam_card22_">
                           <p class="exam_content_para22">
                           National Council for Hotel Management & Catering Technology 
                           Joint Entrance Exam (NCHMCT JEE) is a national level hospitality 
                           entrance exam for admission in BSc (Hospitality & Hotel Administration). 
                           The exam is held annually and is conducted by NTA on behalf of the National 
                           Council for Hotel Management & Catering Technology (NCHMCT). The 3 years BSc (HHA) 
                           course is offered by NCHMCT jointly with the Indira Gandhi National Open University
                            (IGNOU). 
 
                           </p>
                           </div>
                           
                                <div className="exam_link_22">
                                <a className="exam_link_click22" href="https://www.shiksha.com/hospitality-travel/hotel-hospitality-management/nchmct-jee-exam">Click Here for more Information </a>
                               </div>
                           </div>
                
                
                
                
                
                 <div id="ailet"  className="exam_card_23">
                       <img className="exam_image_card23"src={ailet} alt=""/>
                          <div  className="about_exam_card23_">
                           <p class="exam_content_para23">
                           All India Law Entrance Test (AILET) is conducted by National
                            Law University, Delhi (NLU Delhi) for admission undergraduate 
                            (UG), postgraduate (PG) and doctorate (PhD) level law courses.
                             This is a national-level entrance exam conducted for admission 
                             in law programmes at NLU Delhi only. The university does not accept 
                             any other law entrance exam for NLU Delhi admissions.
 
                           </p>
                           </div>
                           
                                <div className="exam_link_23">
                                <a className="exam_link_click23" href="https://www.shiksha.com/law/ailet-exam">Click Here for more Information </a>
                               </div>
                           </div>




                           <div id="kvpy"  className="exam_card_24">
                       <img className="exam_image_card24"src={kvpy} alt=""/>
                          <div  className="about_exam_card24_">
                           <p class="exam_content_para24">
                           The Kishore Vaigyanik Protsahan Yojana (KVPY) is an on-going National
                            Program of Fellowship in Basic Sciences, initiated and funded by the
                             Department of Science and Technology, Government of India, to attract 
                             exceptionally highly motivated students for pursuing basic science courses 
                             and research career in science.The objective of the program is to identify
                              students with talent and aptitude for research; help them realize their academic
                               potential; encourage them to take up research careers in Science, and ensure the
                                growth of the best scientific minds for research and development in the country.
 
                           </p>
                           </div>
                           
                                <div className="exam_link_24">
                                <a className="exam_link_click24" href="http://www.kvpy.iisc.ernet.in/main/index.htm">Click Here for more Information </a>
                               </div>
                           </div>






                           <div  id="nest"  className="exam_card_25">
                       <img className="exam_image_card25"src={nest} alt=""/>
                          <div  className="about_exam_card25_">
                           <p class="exam_content_para25">
                           National Entrance Screening Test (NEST) is a compulsory 
                           test for students seeking admission to National Institute
                            of Science Education and Research (NISER) Bhubaneswar and 
                            University of Mumbai - Department of Atomic Energy Centre
                             for Excellence in Basic Sciences (UM-DAE CEBS), Mumbai.
                              Both NISER and UM-DAE CEBS were set up by Department of
                               Atomic Energy, Government of India in 2007. Their mandate
                                is to train scientific manpower for carrying out cutting 
                                edge scientific research and for providing input to scientific
                                 programmes of Department of Atomic Energy and other applied 
                                 science institutions in the country.
 
                           </p>
                           </div>
                           
                                <div className="exam_link_25">
                                <a className="exam_link_click25" href="https://www.nestexam.in/">Click Here for more Information </a>
                               </div>
                           </div>
                           

                           <div id="bhu"  className="exam_card_26">
                       <img className="exam_image_card26"src={bhu} alt=""/>
                          <div  className="about_exam_card26_">
                           <p class="exam_content_para26">
                           BHU UET  - Banaras Hindu University Undergraduate Entrance 
                           Test is the admission test for BHU in UG courses like BA (Hons), 
                           BA LLB (Hons), LLB (Hons), BCom (Hons), BEd, BSc (Hons), etc.Until
                            last year BHU conducted the exam with a combination of CBT and pen-paper
                             mode. However, this year, BHU has given NTA the responsibility to conduct
                              the exam. 
                           </p>
                           </div>
                           
                                <div className="exam_link_26">
                                <a className="exam_link_click26" href="https://www.shiksha.com/university/bhu-banaras-hindu-university/bhu-uet-exam">Click Here for more Information </a>
                               </div>
                           </div>







                       </div>
                      

                           <div id="banasthali"  className="exam_card_27">
                       <img className="exam_image_card27"src={banasthali} alt=""/>
                          <div  className="about_exam_card27_">
                           <p class="exam_content_para27">
                           Admission to the Banasthali Vidyapith is open to women only.Admission
                            is open to all women irrespective of their race, religion, caste, colour
                             or domicile.A student admitted to the Banasthali Vidyapith has to compulsorily 
                             join a hostel of the Vidyapith unless the student is a ward of some worker of 
                             the Vidyapith and stays with the worker in the campus, or the student belongs 
                             to a neighboring village community within a radius of 25 kms.
                           </p>
                           </div>
                           
                                <div className="exam_link_27">
                                <a className="exam_link_click27" href="http://www.banasthali.org/banasthali/admissions/">Click Here for more Information </a>
                               </div>
                           </div>
</div>


                       <Footer/>
                       </div>
                       
                        <Chat />
                

        
                           
        </>
        </StyledApp>
        </ThemeProvider>
        )
    }

export default Exams
