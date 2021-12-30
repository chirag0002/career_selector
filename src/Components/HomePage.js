import React,{useEffect, useState} from 'react'
import Accordion from './Accordion.js'
import Container2 from './Container2'
import Container4 from './Container4'
import "../styling/homepage.css"
import Footer from './Footer'
import Container1 from './Container1'
import Chat from './Chat'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'



const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const HomePage = () => {
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
        <button onClick={themeChanger}></button>
            <Container1/>
            <div className="scroll-to-top"
                style={{
                    float:"right",
                    position: "sticky",
                    top: "0",
                    height:"100%",
                    paddingTop: "40vw",
                    paddingRight:"1vw",
                    cursor:"pointer"
                }}>
                {isVisible && (
                <div onClick={scrollToTop}>
                    <i class="fa fa-chevron-up"></i>
                </div>
                )}
            </div>
            <Container2 />
            <Container4 />
            <Accordion />
            <Footer />
            <Chat />
        </StyledApp>
        </ThemeProvider>
    )
}

export default HomePage