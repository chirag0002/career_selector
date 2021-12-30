import React ,  { useEffect, useState } from 'react';
import "../styling/blogs.css";
import EngineeringBlogs from "../Images/Engineering-Blog.png";
import MedicalBlogs from "../Images/Medical-Blog.png"
import LawBlogs from "../Images/Law-Blogs.jpg"
import ES from "../Images/ES.png"
import DesignBlogs from "../Images/DesignBlogs.png"
import UPSC from "../Images/UPSC4.jpg"
import Footer from "./Footer.jsx"
import Chat from './Chat';
import Header from "./Header.jsx"
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'



const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const Blogs = () => {

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

    return (

      <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        <>
        
        
       <Header />
       <button onClick={themeChanger}></button>
            <div className="scroll-to-top"
                style={{
                    float:"right",
                    // position: "-webkit-sticky",
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
       <h1 className="blog_title"> Blogs </h1>
       
        <div className="blogs-container_1">
        <div className="blog_card">
        <div className="blog_image">
        <img src={EngineeringBlogs} className="engineering_blog" alt="" />
        </div>
     
        <div className="blog_heading">
        <h2 className="heading_blog_tag"> It's time to read more facts about Engineering</h2>
        </div>
        <div className="blog_para">
        <p className="blog-paragraph"> 
                                       In any given year, engineering blogs provide a great opportunity to stay connected with the larger conversations in your field.These blogs focus on more than just cool gadgets though. These 11 awesome blogs focus a lot more about engineering.
        </p>
        </div>
        
        <div className="blog_card_btn"> 
        <button className="blogs_card_btn_1"> <a class="link_blog"href="https://blog.hackbrightacademy.com/blog/software-engineering-blogs/">Read more</a> </button>
        </div>
        

      
      </div>
       <div className="blog_card">
        <div className="blog_image">
        <img src={MedicalBlogs} className="medical_blog" alt="" />
        </div>
     
        <div className="blog_heading">
        <h2 className="heading_blog_tag"> It's time to read more facts about Medical</h2>
        </div>
        <div className="blog_para">
        <p className="blog-paragraph">
                                      A medical blog will typically provide information about common medical concerns. For conditions and diseases, this information most often includes causes, symptoms, diagnosis, and treatment. 
        </p>
        </div>
        
        <div className="blog_card_btn"> 
        <button className="blogs_card_btn_2"> <a class="link_blog" href="https://www.everydayhealth.com/">Read more</a> </button>
        </div>
        

      
      </div>
       <div className="blog_card">
        <div className="blog_image">
        <img src={LawBlogs} className="law_blog" alt="" />
        </div>
     
        <div className="blog_heading">
        <h2 className="heading_blog_tag"> It's time to read more facts Law</h2>
        </div>
        <div className="blog_para">
                <p className="blog-paragraph"> Blogs provide a medium for the members of the legal community to 
                                        write about the current trends in law, its development, criticise the loopholes, and discuss viable solutions with a broad reader base. 
                </p>
        </div>
        
        <div className="blog_card_btn"> 
        <button className="blogs_card_btn_3"> <a class="link_blog"href="https://www.simplelegal.com/blog/top-in-house-legal-blogs-to-follow">Read more</a> </button>
        </div>
        

      
      </div>
       <div className="blog_card">
        <div className="blog_image">
        <img src={ES} className="ES_blog" alt="" />
        </div>
     
        <div className="upsc_blog_heading">
        <h2 className="heading_blog_tag"> It's time to read more facts about entrepreneur</h2>
        </div>
        <div className="blog_para">
        <p className="blog-paragraph"> 
                        Entrepreneurship is the process by which individuals or a group of individuals (entrepreneurs) exploit a commercial opportunity, either by bringing a new product or process to the market, or by substantially improving an existing good, service, or method of production.
        </p>
        </div>
        
        <div className="blog_card_btn"> 
        <button className="blogs_card_btn_4"> <a class="link_blog"href="https://www.onstartups.com/">Read more</a> </button>
        </div>
        

      
      </div>
       <div className="blog_card">
        <div className="blog_image">
        <img src={DesignBlogs} className="Design_blog" alt="" />
        </div>
     
        <div className="blog_heading">
        <h2 className="heading_blog_tag"> It's time to read more facts about designing</h2>
        </div>
        <div className="blog_para">
        <p className="blog-paragraph"> It is a broad term that can be applied to creating structures, environments, interfaces, products, services, features and processes. The art of designing: a school of design. a plan or project: a design for a new process.</p>
        </div>
        
        <div className="blog_card_btn"> 
        <button className="blogs_card_btn_5"> <a class="link_blog"href="https://www.thefashionstudenthub.com/blog/">Read more</a> </button>
        </div>
        

      
      </div>
       <div className="blog_card">
        <div className="blog_image">
        <img src={UPSC} className="Upsc_blog" alt="" />
        </div>
     
        <div className="blog_heading">
        <h2 className="heading_blog_tag"> It's time to read more facts about Civil Services</h2>
        </div>
        <div className="blog_para">
        <p className="blog-paragraph">Civil service, the body of government officials who are employed in civil occupations that are neither political nor judicial. In most countries the term refers to employees selected and promoted on the basis of a merit and seniority system, which may include examinations.</p>
        </div>
        
        <div className="blog_card_btn"> 
        <button className="blogs_card_btn_6"> <a class="link_blog"href="https://www.newsbytesapp.com/news/india/5-blogs-to-aid-upsc-preparation/story">Read more</a> </button>
        </div>
      
        

      
      </div>
      </div>
      <Chat />
      <Footer />
      
   
      
       
     
   
    
   
     

     
    
      
      </>
      </StyledApp>
      </ThemeProvider>
    )
}

export default Blogs
