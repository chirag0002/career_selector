import React,{useState} from 'react'
import "../styling/School.css"
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import MUISwitch from "@material-ui/core/switch"
import card_video from "../Videos/school_card_background.mp4"
import Footer from "../Components/Footer.jsx"
import School_Science from "../Images/School_Science.png"
import School_Commerce from "../Images/School_Commerce.jpeg"

const StyledApp= styled.div`
color:${(props) => props.theme.fontColor};
`;

const School = () => {
    const[theme,setTheme]=useState("dark");
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
            defaultChecked />
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

                <img className="School_Science" src={School_Science} alt="" />
                <p className="school_container2_subheading" >1. What is Science?</p>
                <p className="padding_bottom">
                    This is one stream that most of you would have a fair bit of idea about. Not just because everyone studies science
                    subjects till class 10th at least, but also because this is a stream people can’t seem to stop talking about.

                    <br /><br/><b> From statements like, “Go for the science stream so that you can become an Engineer or a Doctor” to even
                    “You are good at academics, you would be thinking of opting science, I’m sure?”</b>

                    <br /><b> Those of you who are preparing for the 10th standard board exams are most likely surrounded by questions like which stream to choose?</b>
                    <br /><b> Whether to take a road less travelled or study subjects opted by many?</b>
                    <br /><b> And what are the career prospects in different fields?</b>
                    <br /><br/> Self-introspection is the key to unlock the box of your queries!  As you are aware, you can opt for 
                    either Science, Commerce or Arts stream after 10th standard. Before choosing a stream, you should conduct an in-depth 
                    analysis of your strengths and weaknesses and then select a stream that aligns with your interests and professional goals.
                    While the Commerce and Arts stream subjects have their own advantages, methodologies, and career prospects, we, in this blog,
                    will shed light on various Science stream subjects. But before that, let us try to understand the reasons for choosing this 
                    stream. 

                    While these notions hardly hold a candle to reality, chances are you would have some type of understanding about what the science
                    stream entails.

                    The Science stream, as I mentioned above, relates to the study of the physical and natural world through the study
                    of pure sciences and their applications in the real world. From understanding how the laws of gravitation govern
                    planetary motion to learning about the structure of the atom, you will uncover the many mysteries of the world around
                    us.

                    Thus, innate curiosity and keenness to explore, coupled with a logical thinking ability are essential to be successful
                    in this stream.
                </p>

                <p className="school_container2_subheading">2. Science Stream Subjects after Class 10th :</p> 
                <p>The science stream is further divided into 2 branches, namely medical (PCB) and non-medical (PCM) science stream.
                <br /> 
                The difference between the two lies in the choice of the third subject. While Physics and Chemistry are compulsory for both, the medical stream offers Biology as the 3rd compulsory subject, and the non-medical stream offers Mathematics. English is common to all streams and students can take up any optional subject to meet a total of 5 subjects.

                Here is a detailed look into the compulsory subjects in the Science stream:
                </p>   
                <p className="school_container2_subheading_1">
                    I. Physics :
                </p>

                <p>
                    Physics is among the oldest academic fields in the world and is the science of matter, motion, energy, and force.
                    It focuses on understanding how the universe behaves. Advances in the field of physics enable advancements in
                    technologies, such as the study of electromagnetism, thermodynamics, mechanics, nuclear physics and solid-state physics.

                    Studying physics at Class 11-12 level will help you develop observational, analytical, investigatory and decision
                    making skills, along with conceptual understanding, creative thinking, and problem-solving skills.
                    <br />
                    <br />
                    <b>Examples of a few topics you will study are:</b>
                    <br />
                    <br /><b>• Kinematics</b>
                    <br /><b>• Laws of Motion</b>
                    <br /><b>• Thermodynamics</b>
                    <br /><b>• Electrostatics</b>
                    <br /><b>• Electromagnetic Waves</b>
                    <br /><b>• Electronic Devices</b>
                    <br />
                    <br />
                    After studying physics there are a variety of career options available, including working as a physicist, astronaut,
                    data scientist, technician, and engineer.
                </p>

                <p className="school_container2_subheading_1">
                    II. Chemistry :
                </p>

                <p>
                    Everything in the universe is made out of atoms and matter, and the study of Chemistry is based on the study of the composition,
                    properties, and structure of matter, including atomic structure and the changes influenced by chemical reactions.

                    New areas in chemistry, such as synthetic materials, natural resources, biomolecules, and industrial chemistry are also 
                    included in the course at the Class 11-12 level, ensuring that you get a thorough understanding of Chemistry fundamentals and 
                    contemporary developments. Practical lab experiments further serve to support your theoretical studies.
                    <br />
                    <br />
                    <b>Examples of a few topics you will study are:</b>
                    <br />
                    <br /><b>• Chemical Bonding and Molecular Structure</b>
                    <br /><b>• Chemical Thermodynamics</b>
                    <br /><b>• Organic Chemistry</b>
                    <br /><b>• Chemical Kinetics</b>
                    <br /><b>• Surface Chemistry</b>
                    <br />
                    <br />
                    Career options after studying chemistry include working in research, pharmaceuticals, healthcare as lab scientists, 
                    chemical engineers,biochemists, flavour chemists, analytical chemists, etc.
                </p>

                <p className="school_container2_subheading_1">
                    III. Biology :
                </p>

                <p>
                   The term ‘Biology’ is derived from the Greek language, with ‘bios’ meaning life and ‘logos’ meaning study, 
                   literally translating into the study of life forms. And that’s exactly what biology is. Biology studies living organisms – 
                   plants and animals – including facets such as their physical structures, physiological mechanisms, chemical processes, 
                   molecular interactions, and development and evolution.

                   The subject of Biology at the Class 11-12 level focuses on providing a firm conceptual basis while also connecting 
                   the study of the subject with real-life technology, environment, agriculture, health, and industry.
                    <br />
                    <br />
                    <b>Examples of a few topics you will study are:</b>
                    <br />
                    <br /><b>• Structural Organisation in Plants and Animals</b>
                    <br /><b>• Plant Physiology</b>
                    <br /><b>• Human Physiology</b>
                    <br /><b>• Genetics and Evolution</b>
                    <br /><b>• Biotechnology and its Applications</b>
                    <br />
                    <br />
                    Career opportunities after studying Biology are immense, including the most popular path of Medicine, 
                    whether MBBS or Ayurveda or Homeopathy. Apart from medicine, you can pursue a variety of career paths such as 
                    biotechnology, dentistry, veterinary sciences, pharmaceuticals, botany, zoology, marine biology, genetics, 
                    bioinformatics, microbiology, and more.
                </p>

                <p className="school_container2_subheading_1">
                    IV. Mathematics :
                </p>

                <p>
                    Mathematics is a science of numbers and is often the most hated subject for students, and sometimes the most loved with 
                    use in money transactions and applications even in architecture, art, engineering, and sports. As a subject, 
                    Math focuses on the concepts of quantity, change, structure, and space.

                    At a Class 11-12 level, you would learn about the principles of underlying processes and skills, 
                    identify the flow of reason while solving a problem or proving a result, and learn how to apply acquired skills to solve 
                    problems by more than one method. If you pursue the Medical (PCB) stream, you can also take on Mathematics as an optional 
                    subject.
                    <br />
                    <br />
                    <b>Examples of a few topics you will study are:</b>
                    <br />
                    <br /><b>• Algebra</b>
                    <br /><b>• Calculus</b>
                    <br /><b>• Mathematical Reasoning</b>
                    <br /><b>• Linear Programming</b>
                    <br /><b>• Probability</b>
                    <br /><b>• Vectors and Three-Dimensional Geometry</b>
                    <br />
                    <br />
                    Studying Mathematics in Class 11-12 opens up a variety of career options, including those in the field of commerce, 
                    if you decide to change your mind about a career in the sciences. Career options include engineering, computer science, 
                    insurance, statistics, economics, banking, accountancy, etc.
                </p>

                <p className="school_container2_subheading_1">
                    V. English :
                </p>

                <p className="padding_bottom">
                    As one of the official languages of India, and as the language used most commonly worldwide, 
                    English is an unavoidable subject studied at Class 11-12 level regardless of the stream. English is a common language 
                    medium used in offices, colleges and online, which is why a certain level of proficiency is always helpful.

                    At the Class 11-12 level, the subject focuses on enhancing reading, writing, grammar, and listening/speaking skills 
                    in English, preparing students for further studies as well as directly for the workplace.

                    Career options available after studying English include mass communication, journalism, teaching, public relations, 
                    and blogging. The study of English will also help you in your general communication and comprehension skills which will 
                    be helpful in nearly every career where the language of communication is English.

                </p>    

                <p className="school_container2_subheading" >3. Optional Subjects with Science :</p>
                <p>Apart from the 4 compulsory subjects in the Science stream (Physics, Chemistry, English and Biology/Mathematics), 
                   you are required to take on a 5th optional subject. Some schools also allow provisions to apply for a 6th subject as well, 
                   allowing you to choose 2 optional subjects.Here are some of the optional subjects available with Science:
                </p>

                 <p className="school_container2_subheading_1">
                    I. Computer Science : 
                </p>

                <p>
                    Computer Science has become an immensely popular choice with students and is based on a general study of computer applications, 
                    programming languages, computing logic, and networking technologies.
                </p>

                <p className="school_container2_subheading_1">
                    II. Informatics Practices : 
                </p>

                <p>
                    Although there are similarities with Computer Science, Informatics Practices focuses more on the processing of information, 
                    computer systems, device applications, program development, and integrated device electronics.
                </p>

                <p className="school_container2_subheading_1">
                    III. Economics : 
                </p>

                <p>
                    Economics serves as a compulsory student for Commerce stream students, but it is also a popular optional subject for Science and 
                    Humanities streams. A social science, Economics studies the functioning of an economy and its basic elements, and the interaction of 
                    markets at national and international levels.
                </p>

                <p className="school_container2_subheading_1">
                    IV. Engineering Drawing : 
                </p>

                <p>
                    Engineering Drawing or Engineering Graphics is a specialized subject that teaches the ability to convey ideas and information required 
                    for constructing or analyzing machines, structures, and systems graphically. It’s useful for engineers, architects, surveyors, 
                    and designers.
                </p>

                <p className="school_container2_subheading_1">
                    V. Psychology : 
                </p>

                <p>
                    Psychology can be defined as the study of the mind, and it has gained immense popularity in the past few years. 
                    The subject of psychology examines the mental processes, behaviours, and experiences of people. At the Class 11-12 level, 
                    you would learn about the basic concepts and principles in the field, such as emotions, personality, intelligence, etc.
                </p>

                <p className="school_container2_subheading_1">
                    VI. Physical Education : 
                </p>

                <p className="padding_bottom">
                    Another popular optional subject is Physical Education, which is considered scoring and also boosts your physical activity. 
                    At the Class 11-12 level, you would learn about physiology, physical fitness, various sports, and yoga.
                </p>

                <p className="school_container2_subheading">4. Career Options after Science Stream :</p>
                <p className="padding_bottom">
                    There is a multitude of career options available after pursuing Science stream in Class 11-12, however, 
                    the subjects are also considerably difficult and will require effort. Thus, you should go for this stream only if you are 
                    absolutely sure about your interest and aptitude for the subjects.
                </p>

            </div>   

            <div className="school_container2_2">
                <section id="school_container2_heading2">
                    Commerce
                </section>
                <img className="School_Science" src={School_Commerce} alt="" />
                <p className="school_container2_subheading">1. What is Commerce :</p>
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

                    Commerce as a teaching medium may be defined as the study of business and marketing activities such as the trade of goods and services 
                    from the manufacturer to the end client. Students might select this field if they have a genuine passion in these disciplines and a 
                    strong connection to the economy, business, and statistics.
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



