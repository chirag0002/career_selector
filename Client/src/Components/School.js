import React,{useState} from 'react'
import "../styling/School.css"
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme ,GlobalStyles} from './themes'
import MUISwitch from "@material-ui/core/switch"
import card_video from "../Videos/school_card_background.mp4"
import Footer from "../Components/Footer.jsx"
import School_Science from "../Images/School_Science.png"
import School_Arts from "../Images/School_Arts.jpeg"
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

                <img className="School_Arts" src={School_Science} alt="" />
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
                <img className="School_Arts" src={School_Commerce} alt="" />
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

                <p className="school_container2_subheading">2. Commerce Stream Subjects after Class 10th :</p> 

                <p className="school_container2_subheading_1">
                    I. Accountancy :
                </p>

                <p>
                    In any business or corporation, it’s important to analyze the economic success of the endeavour. The field of 
                    Accountancy or Accounting involves the measurement, processing and communication of the financial data of a particular 
                    business, corporation or other economic entity. Accountancy measures the results of the economic activities of an 
                    organization, communicating it to users such as investors, creditors, regulators and management.

                    The study of Accountancy in Class 11-12 will provide you with a comprehensive understanding of accounting and basic 
                    accounting concepts. You will learn about emerging areas in the preparation of financial statements, expenditure, 
                    how to design an accounting database and how to record business transactions.
                    <br />
                    <br />
                    <b>Examples of a few topics you will study are:</b>
                    <br />
                    <br /><b>• Accounting Processes</b>
                    <br /><b>• Financial Accounting</b>
                    <br /><b>• Computers in Accounting</b>
                    <br /><b>• Financial Statement Analysis</b>
                    <br /><b>• Accounting for Not-For-Profit organizations, partnership firms and companies</b>
                    <br />
                    <br />
                    There are plenty of benefits of studying Accountancy- it will enable you to record and understand the financial reports 
                    and status of businesses, along with boosting your critical thinking skills. Every business requires accountants to maintain 
                    its records and governmental compliance.

                    There are numerous career opportunities you can pursue after studying Accountancy; the most popular is to become a 
                    Chartered Accountant. Even if you decide not to become a chartered accountant, studying Accountancy will help you in all 
                    finance-related and business-related fields.
                </p>

                <p className="school_container2_subheading_1">
                    II. Business Studies :
                </p>

                <p>
                    The subject of Business Studies focuses on analyzing, evaluating and responding to the changes that affect businesses 
                    and the business environment, including social, political, economic and legal influences. At a Class 11-12 level, 
                    Business Studies will provide you with a basic knowledge of the business world, helping you understand the framework in which a 
                    business operates and the business processes involved. You will also learn about the interdependent nature of businesses and the 
                    theoretical foundation of managing operations of a business firm.

                    <br />
                    <br />
                    <b>Examples of a few topics you will study are:</b>
                    <br />
                    <br /><b>• Evolution and Fundamentals of Business</b>
                    <br /><b>• Emerging Modes of Business</b>
                    <br /><b>• Internal Trade</b>
                    <br /><b>• Principles and Functions of Management</b>
                    <br /><b>• Business Finance and Marketing</b>
                    <br />
                    <br />
                    By pursuing Business Studies, you will gain a solid foundation in how business functions, which will help you in the long run, 
                    regardless of the profession you follow. Business Studies will also help you if you are interested in working in management, 
                    launching your own business or working in a family business.
                </p>

                <p className="school_container2_subheading_1">
                    III. Economics :
                </p>

                <p>
                    An immensely popular subject, Economics is compulsory for Commerce students and optional for Science and Humanities 
                    streams. Economics is a social science that studies the functioning of the entire economy, at a national and 
                    international level, as well as basic elements in the economy, such as individual agents, markets and their interactions. 
                    The subject studies how economies work and the behaviour and interactions of markets.

                    The study of Economics at the Class 11-12 level focuses on introducing basic concepts of the subject, microeconomics, 
                    macroeconomics and the economic realities that the country is currently facing. You will also learn about basic statistical 
                    tools and develop economic reasoning skills.
                    <br />
                    <br />
                    <b>Examples of a few topics you will study are:</b>
                    <br />
                    <br /><b>• Introductory Microeconomics</b>
                    <br /><b>• Introductory Macroeconomics</b>
                    <br /><b>• Statistics for Economies</b>
                    <br /><b>• Indian Economic Development</b>
                    <br />
                    <br />
                    There are several benefits of studying Economics, especially in India which is still an emerging economy. 
                    By studying Economics, you will learn how the economy of the nation functions, aiding you when you join the workforce. 
                    There are a variety of career options available, both in the government sector as economists and private sector as investment 
                    consultants and actuarial scientists.
                </p>

                <p className="school_container2_subheading_1">
                    IV. English :
                </p>

                <p className="padding_bottom">
                    The subject of English is compulsory with every stream, whether you opt for Commerce, Science or Humanities. 
                    English is considered to be a ‘global language’ and is the most widely spoken language in the world with a total of 
                    1.132 billion speakers. Therefore, it is important to have strong English language skills.

                    The English subject at Class 11-12 level is based on reading comprehension, listening and speaking skills, 
                    writing skills, and grammar. Due to the widespread use of English, it’s beneficial to study the language in depth. 
                    You can also pursue a variety of careers after studying English, including journalism, media, teaching and more.

                </p>    

                <p className="school_container2_subheading" >3. Optional Subjects with Science :</p>
                <p>Apart from the 4 compulsory subjects you are required to study in the Commerce stream, you are required to choose at 
                   least 1 optional subject. You can also select 2 optional subjects, based on your school policy so that you would be 
                   attempting a total of 6 subjects.

                   Here are some of the optional subjects available with the Commerce Stream:

                </p>

                <p className="school_container2_subheading_1">
                    I. Mathematics : 
                </p>

                <p>
                    The subject of Maths is one that you have been studying from the beginning of your school years, and is based 
                    primarily on numbers. Topics that you will study in Class 11-12 include Algebra, Calculus, Mathematical Reasoning, 
                    Statistics & Probability, Relations and Functions, Linear Programming. By including Mathematics as an optional subject, 
                    you will become eligible for a variety of careers and courses, including Chartered Accountancy, Finance and MBA.
                </p>

                <p className="school_container2_subheading_1">
                    II. Computer Science : 
                </p>

                <p>
                    The study of Computer Science is broadly based on the study of mechanical computation, its applications and programming languages. 
                    At the Class 11-12 level, you will be studying the basics of computers, computing logic, programming languages like C++, developing 
                    logic for problem-solving, understanding the working of Relational Databases and the basic concepts for communication and networking 
                    technologies. After studying Computer Science you can pursue careers in computer applications, software engineering and more.
                </p>

                <p className="school_container2_subheading_1">
                    III. Informatics Practices : 
                </p>

                <p>
                    While similar to the subject of Computer Science, Informatics Practices is based on the study of information and its processing, 
                    beyond the applications of computers. In Class 11-12, you will learn about computer systems, integrated device electronics, and 
                    develop the ability to develop simple device applications and use, develop and debug programs. You can opt for this course if you are 
                    interested in pursuing a career in computer science or to simply expand your knowledge in the field.

                </p>

                <p className="school_container2_subheading_1">
                    IV. Psychology : 
                </p>

                <p>
                    A popular subject, Psychology is the study of the mind, examining the experiences, behaviours and mental processes of people. 
                    At the Class 11-12 level, the subject will introduce you to the basic concepts, principals and methods in Psychology, grooming your 
                    critical reasoning and analytical skills. While you can pursue a career in psychology as a psychologist or counsellor, the subject 
                    will also help you have a better understanding of people, regardless of which career you choose.

                </p>

                <p className="school_container2_subheading_1">
                    V. Fine Arts : 
                </p>

                <p>
                    An ideal course for those who are creatively inclined, the Fine Arts subject will enhance your artistic skills, studying art history, 
                    techniques and trends. In the Fine Arts subject, you can choose a specialization of Painting, Graphics, Sculpture, or 
                    Applied Art/Commercial Art. This subject is ideal if you are interested in a career in design, be it graphic design, fashion design, 
                    interior design, etc.
                </p>

                <p className="school_container2_subheading_1">
                    VI. Physical Education : 
                </p>

                <p>
                    Considered to be a scoring and an easy subject, in Physical Education you will learn about various sports, yoga, physiology, 
                    physical fitness and changing trends in physical education.
                </p>

                <p className="school_container2_subheading">4. Career Options after Science Stream :</p>
                <p className="padding_bottom">
                    There is a multitude of career options available after pursuing Science stream in Class 11-12, however, 
                    the subjects are also considerably difficult and will require effort. Thus, you should go for this stream only if you are 
                    absolutely sure about your interest and aptitude for the subjects.
                </p>
            </div>        

            <div className="school_container2_3">
                <section id="school_container2_heading3">
                    Arts/Humanities
                </section>
                <img className="School_Arts" src={School_Arts} alt="" />
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



