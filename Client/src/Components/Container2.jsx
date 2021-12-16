import React from 'react'
import "../styling/container2.css"
import Doctor from "../Videos/Doctor.mp4"
import Enterpreneur from "../Videos/Enterpreneur.mp4"
import Design from "../Videos/Design.mp4"
import Engineer from "../Videos/Engineer.mp4"
import Civil from "../Videos/Civil.mp4"
import {Link} from "react-location"

const Container2 = () => {
    return (
        <div className="homepage_cont_2_3">
        <div className="homepage_cont_2">
            <h1 className="homepage_cont_2_main_head">
            CHOOSE YOUR DESTINATION
            </h1>
            <div className="homepage_cont_2_images">
                <div className="homepage_cont_2_img_div_1">
                    <Link to ="/school"><a className="homepage_cont_2_img_link" href="">
                        <img className="homepage_cont_2_img" src="https://media.istockphoto.com/vectors/panoramic-background-with-school-building-and-school-bus-in-flat-vector-id485098782?k=6&m=485098782&s=170667a&w=0&h=rQ1ZDA5c4smnhg9QtfG9ZhH2FHJ7DXUxZ5cUfWIAHk4=" alt="" />
                        <h2 className="homepage_cont_2_heading">SCHOOLS</h2>
                    </a></Link>
                </div>
                <div className="homepage_cont_2_img_div_2">
                    <a className="homepage_cont_2_img_link" href="">
                        <img className="homepage_cont_2_img" src="https://th.bing.com/th/id/R.2f3e4067943290aead99c39a38c5a949?rik=u0xPelLuKZ6mVA&riu=http%3a%2f%2fimages.clipartpanda.com%2fcollege-clip-art-1326986427_college_clip_art.jpg&ehk=fE%2fELjF87XCUeX4754nwdgh2k%2bTvhipSP3tTS2ARIQM%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <h2 className="homepage_cont_2_heading">COLLEGES</h2>   
                    </a>         
                </div>
            </div>
        </div>
        <div className="homepage_cont_3">
            <h1 className="homepage_cont_3_heading"> FIELDS TO EXPLORE</h1>
            <div className="homepage_cont_3_ex">
                <div className="homepage_cont_3_ex_vdo_div">
                   <a href="">
                        <video className="homepage_cont_3_ex_vdo" autoPlay loop muted > 
                            <source src={Engineer} type="video/mp4"/>
                        </video></a>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div className="homepage_cont_3_ex_p">
                <h3 className="homepage_cont_3_ex_p_head">ENGINEERING</h3>
                    <p className="homepage_cont_3_ex_p_p">
                    Engineering stimulates the mind. Kids get bored easily. They have got to get their hands dirty: make things, 
                    dismantle things, fix things. When the schools can offer that, ypu'll have an engineer for life.
                    <br />
                    <a href="">more...</a> 
                    </p>
                </div>
            </div>
            <div className="homepage_cont_3_ex">
                <div className="homepage_cont_3_ex_p">
                <h3 className="homepage_cont_3_ex_p_head">DOCTORS</h3>
                    <p className="homepage_cont_3_ex_p_p">I want to experience the most beautiful adrenaline rush of my life. A rush while taking medical pledge/oath. <br /><a href="">more...</a></p>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div className="homepage_cont_3_ex_vdo_div">
                    <a href="">
                        <video className="homepage_cont_3_ex_vdo" autoPlay loop muted controls>
                            <source src={Doctor} type="video/mp4"/>
                        </video>
                    </a>
                </div>
            </div>
            <div className="homepage_cont_3_ex">
                <div className="homepage_cont_3_ex_vdo_div">
                   <a href=""> 
                        <video className="homepage_cont_3_ex_vdo" autoPlay loop muted controls>
                            <source src={Enterpreneur} type="video/mp4"/>
                        </video></a>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div className="homepage_cont_3_ex_p">
                <h3 className="homepage_cont_3_ex_p_head">ENTREPRENEURS</h3>
                    <p className="homepage_cont_3_ex_p_p">"Almost everything worthwhile carries with it some sort of risk, whether it’s starting a new business, whether it’s leaving home, whether it’s getting married, or whether it’s flying in space.” – Chris Hadfield, astronaut <br /><a href="">more...</a> </p>
                </div>
            </div>
            <div className="homepage_cont_3_ex">
                <div className="homepage_cont_3_ex_p">
                <h3 className="homepage_cont_3_ex_p_head">DESIGNING</h3>
                    <p className="homepage_cont_3_ex_p_p">"The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring." -- Paul Rand, graphic designer <br /><a href="">more...</a></p>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div className="homepage_cont_3_ex_vdo_div">
                    <a href="">
                        <video className="homepage_cont_3_ex_vdo" autoPlay loop muted controls>
                            <source src={Design} type="video/mp4"/>
                        </video>
                    </a>
                </div>
            </div>
            <div className="homepage_cont_3_ex">
                <div className="homepage_cont_3_ex_vdo_div">
                   <a href=""> 
                        <video className="homepage_cont_3_ex_vdo" autoPlay loop muted controls>
                            <source src={Civil} type="video/mp4"/>
                        </video></a>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div className="homepage_cont_3_ex_p">
                <h3 className="homepage_cont_3_ex_p_head">CIVIL-SERVICES</h3>
                    <p className="homepage_cont_3_ex_p_p">It takes hundreds of individuals to show against the law politically impose the right democratic injustice, and because it happens, these persons are civil servants. If even a few civil servant of the country is loyal and faithful to the country, then the place is in safe hands.
                    <br /><a href="">more...</a> </p>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default Container2
