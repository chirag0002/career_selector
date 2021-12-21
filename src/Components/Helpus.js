import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import "../styling/helpus.css"
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import {useSelector} from 'react-redux'

const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const Helpus=()=>{
    const check=useSelector((state)=>state.check)
    console.log(check);
    const[theme,setTheme]=useState("dark");
        const themeChanger =() =>{
            theme=== "light" ? setTheme ("dark") : setTheme ("light");
        };
    return(
        <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        <div className="help">
            <div className="head">
                <Header/>
                <button onClick={themeChanger}></button>
            </div>
            <div className="help_content">
            Welcome!!!

Since you have come to our website you must be having so many doubts about your career.Here on CareerSelector we provide you full information regarding courses after 10th class, 12th class, upcoming exams, career paths available and many more.
We have mainly three sections in our website i.e. School , UG , PG where you can read about the courses which are available according to your stream, the exams for which you are eligible and also many career paths which are suitable according to your education background.In the UG & PG section you will find almost 20 courses which you can opt after your 12th class.As well as in the PG section You will find all the courses in which you can do post graduation.We also have an Exam section where you can search for a particular exam and get full information about it like the date for application form, Eligibility etc.
Blogs are the new way of gaining knowledge of all backgrounds so we have also incorporated a  special blog section for the lovely readers out there.Not only graduation students but also the students who have just passed their 10th will find all the useful information here like the streams which you can select after 10th.
Our about us page will introduce you all to our developers who have made this website in the form of a video.
We would always love to have new enhancements in our website and that’s why we also have a contribute section with our Github repository so that all the growing developers can contribute to this and take it to the next level. 


            </div>
            <Footer/>


        </div>
        </StyledApp>
        </ThemeProvider>
    )
}
export default Helpus