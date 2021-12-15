import React,{useState} from 'react'
import Accordion from './Accordion.js'
import Container2 from './Container2'
import Container4 from './Container4'
import "../styling/homepage.css"
import Footer from './Footer'
import MUISwitch from "@material-ui/core/switch"
import Container1 from './Container1'
import Chat from './Chat'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import {useSelector} from 'react-redux'


const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const HomePage = () => {

    const check=useSelector((state)=>state.check)
    console.log(check);
    const[theme,setTheme]=useState("light");
        const themeChanger =() =>{
            theme=== "light" ? setTheme ("dark") : setTheme ("light");
        };
    return (
        <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
            <MUISwitch
            className="theme_switch"
            onClick={themeChanger}
            defaultUnChecked />
            <Container1/>
            <Container2 />
            <Container4 />
            <Accordion />
            <Footer />
            <Chat/>
        </StyledApp>
        </ThemeProvider>
    )
}

export default HomePage
