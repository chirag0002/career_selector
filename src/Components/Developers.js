import React,{useEffect, useState} from 'react'
import "../styling/Developers.css"
import group from "../Images/Group_Photo.jpeg"
import chirag from "../Images/Chirag.JPG"
import kanika from "../Images/Kanika.JPG"
import bhavya from "../Images/Bhavya.JPG"
import aayush from "../Images/Aayush.JPG"
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import Footer from './Footer.jsx'
import {Button} from "react-bootstrap"
import Header from './Header.jsx'
import Chat from './Chat'




const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;


const Developers = () => {

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
                    height:"100%",
                    paddingTop: "35%",
                    paddingRight:"1%",
                    cursor:"pointer"
                }}>
            {isVisible && (
            <div onClick={scrollToTop}>
                <i class="fa fa-chevron-up"></i>
            </div>
            )}
        </div>
        <div className="developers">
            <div className="developers_cont">
            <p class="developers_heading">Team SuperContributors</p>
            <img className="Group_Photo" src={group} alt="" />
            <p className="quote_developers">In the ocean of choices, providing direction to the right career paths. <br /> -Team SuperContributors</p>
            <div className="developers_cont1">
            <img className="chirag" src={chirag} alt="" />
            <p className="chirag_name">
            Chirag Varshney
           
            <br /><Button href="https://www.linkedin.com/in/chirag-varshney-864917202" className="developers_buttons1" variant="outline-warning">LinkedIn</Button>{' '}
            <br /><Button href="https://twitter.com/ChiragV0101?t=JttZTqzDXamIjso3JyfBPA&s=09" className="developers_buttons2" variant="outline-warning">Twitter</Button>{' '}
            <br /><Button href="https://instagram.com/_chirag_varshney_?utm_medium=copy_link" className="developers_buttons3" variant="outline-warning">Instagram</Button>{' '}
            <br /><Button href="https://github.com/chirag0002" className="developers_buttons4" variant="outline-warning">GitHub</Button>{' '}
            </p>
            <img className="kanika" src={kanika} alt="" />
            <p className="kanika_name">
            Kanika Gola
            
            <br /><Button href="https://www.linkedin.com/in/kanika-gola-999968204/" className="developers_buttons1" variant="outline-warning">LinkedIn</Button>{' '}
            <br /><Button href="https://twitter.com/gola_kanika" className="developers_buttons2" variant="outline-warning">Twitter</Button>{' '}
            <br /><Button href="https://www.instagram.com/kanika.gola26/" className="developers_buttons3" variant="outline-warning">Instagram</Button>{' '}
            <br /><Button href="https://github.com/Kanika637" className="developers_buttons4" variant="outline-warning">GitHub</Button>{' '}
            </p>
            <img className="aayush" src={aayush} alt="" />
            <p className="aayush_name">
            Aayush Sharma
            
            <br /><Button href="https://www.linkedin.com/in/aayush-sharma-0555a4206/" className="developers_buttons1" variant="outline-warning">LinkedIn</Button>{' '}
            <br /><Button href="https://twitter.com/AayushS45351191" className="developers_buttons2" variant="outline-warning">Twitter</Button>{' '}
            <br /><Button href="https://www.instagram.com/aayusharma1401/" className="developers_buttons3" variant="outline-warning">Instagram</Button>{' '}
            <br /><Button href="https://github.com/SuperAayush" className="developers_buttons4" variant="outline-warning">GitHub</Button>{' '}
            </p>
            <img className="bhavya" src={bhavya} alt="" />
            <p className="bhavya_name">
            Bhavya Sachdeva
            
            <br /><Button href="https://www.linkedin.com/in/bhavya-sachdeva9/" className="developers_buttons1" variant="outline-warning">LinkedIn</Button>{' '}
            <br /><Button href="https://twitter.com/bhavya_58" className="developers_buttons2" variant="outline-warning">Twitter</Button>{' '}
            <br /><Button href="https://www.instagram.com/bhavya_sachdeva__/" className="developers_buttons3" variant="outline-warning">Instagram</Button>{' '}
            <br /><Button href="https://github.com/bhavyastar" className="developers_buttons4" variant="outline-warning">GitHub</Button>{' '}
            </p>
            </div>            
            </div>
            <br/>
            <br/>
            <br/>
            <Chat />

            <Footer />
        </div>
        </StyledApp>
        </ThemeProvider>
    )
}

export default Developers
