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
import MUISwitch from "@material-ui/core/switch"
import Header from "./Header.jsx";


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
        <div className="scroll-to-top"
                style={{
                    float:"right",
                    position: "-webkit-sticky",
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
        <MUISwitch
            className="school_theme_switch"
            onClick={themeChanger}
            defaultChecked />
        <div class="exam">
        
        <div className="exam_container">
               <div className="exam_heading">
                   Competetive Exams
               </div>
               <ExamSearchBar placeholder="Search for an exam..."/>
               
                   <div className="exam_cards">
                   
                       <div className="exam_card_1">
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
                             It is essential for aspirants to know and understand the requirements 
                             of the IAS exam 2021 such as the UPSC syllabus for IAS Exam (Prelims and Mains),
                              pattern, eligibility criteria, application procedure and other such significant
                               details before kick-starting the preparations. 
                           </p>
                           </div>
                           <div className="exam_link_1">
                                <a className="exam_link_click1" href="#">Click Here for more Information </a>
                               </div>
                           </div>



                           <div  data-aos="fade-left" className="exam_card_2">
                       <img className="exam_image_card2"src={iit} alt=""/>
                          <div  className="about_exam_card2_">
                           <p class="exam_content_para2">
                           Joint Entrance Examination  Advanced (JEE-Advanced), formerly
                            the Indian Institutes of Technology-Joint Entrance Examination 
                            (IIT-JEE), is an academic examination held annually in India. It
                             is organised by one of the seven "old" IITs (IIT Roorkee, IIT Kharagpur,
                              IIT Delhi, IIT Kanpur, IIT Bombay, IIT Madras, and IIT Guwahati)[3] 
                              under the guidance of the Joint Admission Board (JAB). It is the sole 
                              prerequisite for admission to the Indian Institutes of Technology. Other
                               universities—such as the Indian Institute of Petroleum and Energy (IIPE),
                                the Rajiv Gandhi Institute of Petroleum Technology, the Indian Institute 
                                of Space Technology (IIST), the Indian Institute of Science Education and
                                 Research (IISERs), and the Indian Institute of Science (IISc) — use the 
                                 score obtained on the JEE-Advanced exam as the basis for admission. The
                                  JEE-Advanced score is also used as a possible basis for admission by
                                   Indian applicants to non-Indian universities such as the University
                                    of Cambridge and National University of Singapore.The examination 
                                    is organised each year by one of the IITs, on a round-robin rotation pattern. 
                                    
                           </p>
                           </div>
                           
                                <div className="exam_link_2">
                                <a className="exam_link_click2" href="#">Click Here for more Information </a>
                               </div>
                           </div>



                           <div data-aos="fade-right" className="exam_card_3">
                       <img className="exam_image_card3"src={ca} alt=""/>
                          <div  className="about_exam_card3_">
                           <p class="exam_content_para3">
                           Students who have a commerce background are the perfect fit for
                            CAs. Rather most students enroll for the CA exam when they pass 
                            out from 10+2. But there is also a direct route to do CA. You need
                             to be a graduate, and you can sit for the CA exam. Before enrolling,
                              remember that it’s not for the faint-hearted. You need to put a lot
                               of hard work into this ICAI Exam course.
                               To pass the ICAI exam, you need to go through 3 levels. If you appear
                                after graduation (subject to you adhere to the eligibility criteria),
                                 you need to sit for only 2 levels.
                                 CA exam Final & IPCC are conducted in May & November, 
                                 whereas CPT is conducted in June & December, every year.
            </p>
                           </div>
                           
                                <div className="exam_link_3">
                                <a className="exam_link_click3" href="#">Click Here for more Information </a>
                               </div>
                           </div>








                           <div  data-aos="fade-left" className="exam_card_4">
                       <img className="exam_image_card4"src={cat} alt=""/>
                          <div  className="about_exam_card4_">
                           <p class="exam_content_para4">
                           The Common Admission Test (CAT) is a computer based test for
                            admission in a graduate management programs. The test consists 
                            of three sections: Verbal Ability and Reading Comprehension (VARC), 
                            Data Interpretation and Logical Reasoning (DILR) and Quantitative Ability 
                            (QA). The exam is taken online over a period of three hours, with one hour
                             per section. In 2020, due to the COVID precautions, IIM Indore decided to 
                             conducted the CAT Exam in 2 hours with 40 minutes devoted to each section.
                              The Indian Institutes of Management (IIMs) started this exam and use 
                             the test for selecting students for their business administration programs
                              (MBA or PGDM). The test is conducted every year by one of the IIMs based on 
                              a policy of rotation. CAT 2021 exam will be held on November 28, 2021 in 158 cities.
                           </p>
                           </div>
                           
                                <div className="exam_link_4">
                                <a className="exam_link_click4" href="https://en.wikipedia.org/wiki/Common_Admission_Test">Click Here for more Information </a>
                               </div>
                           </div>






                           <div  data-aos="fade-right" className="exam_card_5">
                       <img className="exam_image_card5"src={clat} alt=""/>
                          <div  className="about_exam_card5_">
                           <p class="exam_content_para5">
                           Common Law Admission Test (CLAT) is a centralized national level entrance 
                           test for admissions to twenty two National Law Universities (NLU) in India.
                            Most private and self-financed law schools in India also use these scores
                            for law admissions. Public sector undertakings in India like ONGC, Coal India,
                             BHEL, Steel Authority of India, Oil India etc. use CLAT Post Graduation ( CLAT PG)
                              scores for recruitment of legal positions in the companies.The test is taken after
                               the Higher Secondary Examination or the 12th grade for admission to integrated under-graduate
                                degree in Law (BA LL.B) and after Graduation in Law for Master of Laws (LL.M) programs offered 
                                by these law schools. It is considered  as one the toughest entrance examinations in India
                                 with the acceptance rate being as low as 1 percent.
                           </p>
                           </div>
                           
                                <div className="exam_link_5">
                                <a className="exam_link_click5" href="https://en.wikipedia.org/wiki/Common_Law_Admission_Test">Click Here for more Information </a>
                               </div>
                           </div>










                           <div data-aos="fade-left" className="exam_card_6">
                       <img className="exam_image_card6"src={ies} alt=""/>
                          <div  className="about_exam_card6_">
                           <p class="exam_content_para6">
                           Indian Engineering Services (IES) or Engineering Services Examination (ESE)
                            comprise of engineers who work under the government of India and designated as 
                            Class-1 officer. They administer a large segment of the public sector economy,
                             which constitutes of Indian Railways, Power, Telecommunications, Central Water
                              engineering, Defence service of Engineers, Central Engineering Service, namely.
                               The nature of work performed by these bureaucrats largely depends on their engineering
                               branch and the service or cadre they are recruited in. The career progression goes 
                               smoothly attaining high esteem. The first position offered is that of Asst. Executive 
                               engineer and the hierarchy ends at the position of Chairman/ Managing Director.

                           </p>
                           </div>
                           
                                <div className="exam_link_6">
                                <a className="exam_link_click6" href="https://www.careerindia.com/upsc/ies-exam-e26.html">Click Here for more Information </a>
                               </div>
                           </div>
















                           <div data-aos="fade-right" className="exam_card_7">
                       <img className="exam_image_card7"src={aims} alt=""/>
                          <div  className="about_exam_card7_">
                           <p class="exam_content_para7">
                           The admission to the fifteen All India Institute
                            of Medical Sciences (AIIMS) is taken through the AIIMS 
                            MBBS 2019 entrance exam. AIIMS is considered to be the most
                            coveted Institute for which the number of aspirants taking the 
                            entrance exam goes up to 3 lakh. AIIMS, New Delhi is the responsible 
                            body for holding the admission process each year. AIIMS offers admission 
                            to a total of 1,207 MBBS seats available across fifteen AIIMS - New Delhi, 
                            Rishikesh, Bhopal, Bhubaneswar, Jodhpur, Patna, Raipur, Guntur, Nagpur, Kalyani, 
                            Raebareli, Gorakhpur and Bathinda.
                            AIIMS New Delhi is governed by the All India Institute of Medical Sciences Act, 1956.
                           </p>
                           </div>
                           
                                <div className="exam_link_7">
                                <a className="exam_link_click7" href="https://raoiit.com/what-is-aiims.php">Click Here for more Information </a>
                               </div>
                           </div>














                           <div  data-aos="fade-left" className="exam_card_8">
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
                               The score is used for admissions to various post-graduate education programs 
                               (e.g. Master of Engineering, Master of Technology, Master of Architecture, Doctor 
                               of Philosophy) in Indian higher education institutes, with financial assistance
                                provided by MHRD and other government agencies. Recently, GATE scores are also
                                 being used by several Indian public sector undertakings for recruiting graduate 
                                 engineers in entry-level positions. It is one of the most competitive examinations
                                  in India. GATE is also recognized by various institutes outside India, such as Nanyang 
                                  Technological University in Singapore
                           </p>
                           </div>
                           
                                <div className="exam_link_8">
                                <a className="exam_link_click8" href="https://engineering.careers360.com/articles/all-about-gate">Click Here for more Information </a>
                               </div>
                           </div>













                           <div data-aos="fade-right" className="exam_card_9">
                       <img className="exam_image_card9"src={nda} alt=""/>
                          <div  className="about_exam_card9_">
                           <p class="exam_content_para9">
                           The NDA exam is conducted by UPSC for admission to the Army,
                            Navy and Air Force wings of the NDA. This exam is a gateway
                             for candidates looking forward to joining Defence Forces including 
                             Army, Navy and Air Force. This is a national level exam conducted 
                             twice a year: NDA I and NDA II to help candidates make a career in
                              Defence services. National Defence Academy & Naval Academy (NDA & NA)
                               Examination will be a two-step process where candidates first need
                                to take the exam and then qualify the personality test or interview 
                                conducted by the Service Selection Board (SSB). The UPSC is solely 
                                responsible for issuing guidelines for selection and the final
                                 conduct of the entrance examination.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_9">
                                <a className="exam_link_click9" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>


                           <div   data-aos="fade-left" className="exam_card_10">
                       <img className="exam_image_card10"src={nid} alt=""/>
                          <div  className="about_exam_card10_">
                           <p class="exam_content_para10">
                           The National Institute of Design (NID) is a premiere design
                            school located in Ahmedabad (main campus), Gandhinagar, Bangalore 
                            (R&D), Kurukshetra (Graduate Diploma Programs in Design) and Vijaywada
                             (Graduate Diploma Programs in Design). Recently NID has opened centres 
                             in Andhra Pradesh (Graduate Diploma Programs in Design), Haryana 
                             (Graduate Diploma Programs in Design), Madhya Pradesh (Graduate Diploma Programs in Design)
                              & Assam (Graduate Diploma Programs in Design) . NID Ahmedabad offers 4-year Bachelor of 
                              Design (B.Des) programs in faculties of Communication Design, Industrial Design and Textile,
                               Apparel, Accessory and Lifestyle design. The Ahmedabad, Bangalore and Gandhinagar campuses
                                also offers 2.5-year postgraduate Master of Design (M.Des) programs in 19 areas of specialisation.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_10">
                                <a className="exam_link_click10" href="https://bangalorestudy.com/exams/nid-dat">Click Here for more Information </a>
                               </div>
                           </div>






                           <div data-aos="fade-right"className="exam_card_11">
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
                              campuses in Mumbai, Kolkata, Bangalore, Bhopal, Bhubaneswar, Chennai,
                               Gandhinagar, Hyderabad, Jodhpur, Kangra, Kannur, Patna, Shillong,
                                Raebareli, Srinagar and Panchkula. NIFT entrance exam is three-tiered 
                                in its format for BDes and MDes course admissions. As part of the NIFT 
                                entrance exam 2022 for BDes and MDes admission, candidates have to first 
                                appear for Creative Ability Test (CAT) and General Ability Test (GAT).

 
                           </p>
                           </div>
                           
                                <div className="exam_link_11">
                                <a className="exam_link_click11" href="https://www.shiksha.com/design/nift-entrance-exam">Click Here for more Information </a>
                               </div>
                           </div>




                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>




                           <div  data-aos="fade-left" className="exam_card_13">
                       <img className="exam_image_card13"src={uceed} alt=""/>
                          <div  className="about_exam_card13_">
                           <p class="exam_content_para13">
                          
                          
                           Birla Institute of Technology and Science Admission Test
                            (BITSAT) 2022 is an entrance exam conducted by the Birla
                             Institute of Technology and Science (BITS), Pilani, for 
                             admissions to undergraduate engineering courses (BE) at 
                             its three campuses located at Pilani, Goa and Hyderabad.
                              Admissions will be offered to the candidates into BE, BPharm 
                              and MSc programmes after qualifying for the admission test.
                               The exam is conducted online and around 3 lakh students apply
                                for this entrance exam every year. 

 
                           </p>
                           </div>
                           
                                <div className="exam_link_13">
                                <a className="exam_link_click13" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>





                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>




                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>





                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>




                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>




                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>




                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>







                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>










                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>










                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>














                           <div  data-aos="fade-left" className="exam_card_12">
                       <img className="exam_image_card12"src={uceed} alt=""/>
                          <div  className="about_exam_card12_">
                           <p class="exam_content_para12">
                           Undergraduate Common Entrance Examination for Design 
                           (UCEED) is conducted by IIT Bombay under the guidance 
                           of the UCEED-CEED Implementation Committee every year to 
                           provide admission to eligible candidates to Bachelor of Design
                            (BDes) programmes at colleges accepting UCEED scores.UCEED is an
                             examination of three hours duration that is typically conducted in
                              the month of January every year. Merely appearing for the UCEED exam or
                               securing a spot in the UCEED rank list does not guarantee admission to 
                               BDes programmes. Candidates who qualify the UCEED exam need to separately
                                apply for admission as per the procedure prescribed by IIT Bombay. Admission 
                                to BDes courses is done based on merit in each category. The merit list is 
                                prepared based on the scores obtained by candidates in the written entrance exam. 
                                Aspirants can go through UCEED statistics and develop an idea of the high competition 
                                level in the design entrance exam.

 
                           </p>
                           </div>
                           
                                <div className="exam_link_12">
                                <a className="exam_link_click12" href="https://www.careerindia.com/upsc/nda-na-i-and-ii-exam-e24.html">Click Here for more Information </a>
                               </div>
                           </div>








                       </div>
                      

{/* 
                       <Footer/> */}
                       </div>
                       
                        <Chat />
                </div>


        
                           
        </>
        <Footer />
        </StyledApp>
        </ThemeProvider>
        )
    }

export default Exams
