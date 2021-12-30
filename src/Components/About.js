import React,{useState} from 'react'
import ReactPlayer from 'react-player'
import "../styling/about.css"
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import Footer from "./Footer.jsx"
import Header from "./Header.jsx";

const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;
const About = () => {

    const[theme,setTheme]=useState("dark");
        const themeChanger =() =>{
            theme=== "light" ? setTheme ("dark") : setTheme ("light");
        };
    return (
        <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        <Header />
        <div>
        <button onClick={themeChanger}></button>
          <ReactPlayer className="about_us_vid" url='https://youtu.be/6gVjEZpAoAc' />            
        </div>
        <Footer />
        </StyledApp>
        </ThemeProvider>
    )
}

export default About
