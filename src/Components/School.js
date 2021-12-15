import React,{useState} from 'react'
import "../styling/School.css"
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import MUISwitch from "@material-ui/core/switch"
import card_video from "../Videos/school_card_background.mp4"

const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const School = () => {
    const[theme,setTheme]=useState("light");
        const themeChanger =() =>{
            theme=== "light" ? setTheme ("dark") : setTheme ("light");
        };

    return (
        <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        <div className="school">
            <p className="heading_school">School</p>
            <MUISwitch
            className="school_theme_switch"
            onClick={themeChanger}
            defaultUnChecked />
            <div className="school_container1">
                <div className="school_container1_card1">
                <video className="card_vid" autoPlay loop muted>
                <source src={card_video} type="video/mp4" />
                </video>
                <p className="school_container1_card1_para1">Science</p>
                </div>
                <div className="school_container1_card1">
                <video className="card_vid" autoPlay loop muted>
                <source src={card_video} type="video/mp4" />
                </video>
                <p className="school_container1_card1_para2">Commerce</p>
                </div>
                <div className="school_container1_card1">
                <video className="card_vid" autoPlay loop muted>
                <source src={card_video} type="video/mp4" />
                </video>
                <p className="school_container1_card1_para3">Arts/Humanities</p>
                </div>
            </div>
        </div>
        </StyledApp>
        </ThemeProvider>
    )
}

export default School



