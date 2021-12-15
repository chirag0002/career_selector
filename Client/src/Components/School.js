import React,{useState} from 'react'
import "../styling/School.css"
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import MUISwitch from "@material-ui/core/switch"
import card_video from "../Videos/school_card_background.mp4"
import Footer from "../Components/Footer.jsx"
import School_Science from "../Images/School_Science.png"


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
                <a href="#school_container2_heading1" className="school_container1_card1_para1">Science</a>
                </div>
                <div className="school_container1_card1">
                <video className="card_vid" autoPlay loop muted>
                <source src={card_video} type="video/mp4" />
                </video>
                <a href="#school_container2_heading2" className="school_container1_card1_para2">Commerce</a>
                </div>
                <div className="school_container1_card1">
                <video className="card_vid" autoPlay loop muted>
                <source src={card_video} type="video/mp4" />
                </video>
                <a href="#school_container2_heading3" className="school_container1_card1_para3">Arts/Humanities</a>
                </div>
            </div>
            
            <div className="school_container2">
            <div className="school_container2_1">
                <section id="school_container2_heading1">
                    Science
                </section>

                <img src={School_Science} alt="" />
                <p>1. What is Science?</p>
                <p>
                    Those of you who are preparing for the 10th standard board exams are most likely surrounded by questions like which stream
                    to choose? Whether to take a road less travelled or study subjects opted by many? And what are the career prospects in
                    different fields? Self-introspection is the key to unlock the box of your queries!  As you are aware, you can opt for 
                    either Science, Commerce or Arts stream after 10th standard. Before choosing a stream, you should conduct an in-depth 
                    analysis of your strengths and weaknesses and then select a stream that aligns with your interests and professional goals.
                    While the Commerce and Arts stream subjects have their own advantages, methodologies, and career prospects, we, in this blog,
                    will shed light on various Science stream subjects. But before that, let us try to understand the reasons for choosing this 
                    stream. 

                    This is one stream that most of you would have a fair bit of idea about. Not just because everyone studies science
                    subjects till class 10th at least, but also because this is a stream people can’t seem to stop talking about.
                    From statements like, “Go for the science stream so that you can become an Engineer or a Doctor” to even
                    “You are good at academics, you would be thinking of opting science, I’m sure?”

                    While these notions hardly hold a candle to reality, chances are you would have some type of understanding about what the science
                    stream entails.

                    The Science stream, as I mentioned above, relates to the study of the physical and natural world through the study
                    of pure sciences and their applications in the real world. From understanding how the laws of gravitation govern
                    planetary motion to learning about the structure of the atom, you will uncover the many mysteries of the world around
                    us.

                    Thus, innate curiosity and keenness to explore, coupled with a logical thinking ability are essential to be successful
                    in this stream.
                </p>
            </div>   

            <div className="school_container2_2">
                <section id="school_container2_heading2">
                    Commerce
                </section>
                <p>
                    Commerce is defined as the exchange of goods and services among individuals and business entities.
                    In academics, Commerce is considered to be one of the most popular streams of education along with Science and Arts.
                    Commerce deals with the various aspects of business, trade, accounting, financial information/transactions and merchandising.
                    Commerce plays a significant role in the development of nations and its citizens by facilitating trade between nations or within
                    the nation.

                    The next in line, Commerce is not without its own associated myths. The most popular ones being,
                    “Commerce is good for average students who cannot get into science” or “Commerce is only suitable for students from
                    business families.”

                    These are again a far cry from the truth. Commerce is a field that relates to the study of business, trade and finance.
                    Commerce students study how goods and services are exchanged, how businesses operate, how financial transactions occur,
                    how the economy of the country works, and more. The indispensability of commerce and its related careers to our day-to-day
                    living makes it a lucrative field to explore, and one with a wide choice of career options too.

                    While you may or may not choose to study Mathematics as part of Commerce, numbers form the base for this stream.
                    A strong hold over calculations and fundamentals of maths, and the ability to deal with large amounts of data are
                    critical elements of success in the commerce stream. 
                </p>
            </div>        

            <div className="school_container2_3">
                <section id="school_container2_heading3">
                    Arts/Humanities
                </section>
                <p>
                   Arts is also known as “Humanities”.

                   Humanities as a domain have been widely misunderstood and disregarded in the past, but as we complete the second decade
                   of the 21st century, things are changing fast. Not considered as a stream for academically weak students anymore, more
                   and more students are looking to opt humanities for the wide range of subject and career options it provides.

                   Humanities is a very broad domain that covers areas related to the human society, relationships, culture and systems.
                   These fields help you gain a deeper understanding of how the world and society around us work and how human society,
                   laws and norms have evolved over time. From the study of how people interact in group settings to the study of the legal rights of 
                   citizens, everything comes under the purview of humanities.

                   Students who are aware and curious to learn about world affairs, social issues, historical events and society are 
                   the ideal fit to explore humanities as their stream in class 11th and 12th.

                   Arts provides various career opportunities. These include those of a painter, designer, an archaeologist,
                   an animation artist. It also opens up jobs like those of a psychologist, journalist, media and film person.
                   It also opens fields like those of Hotel Management, tourism industry, fashion blogger, event management.
                   People can also become a lawyer, sociologist, anthropologist, a judge, language expert, a teacher.
                   They can also become a counsellor, content writer and historian.
                </p>
            </div>                     
            </div>
        </div>
        <Footer />
        </StyledApp>
        </ThemeProvider>
    )
}

export default School



