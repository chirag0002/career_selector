import React from 'react'
import "../styling/container2.css"
import Doctor from "../Videos/Doctor.mp4"

const Container2 = () => {
    return (
        <div className="homepage_cont_2_3">
        <div className="homepage_cont_2">
            <div className="homepage_cont_2_images">
                <div className="homepage_cont_2_img_div_1">
                    <a className="homepage_cont_2_img_link" href="">
                        <img className="homepage_cont_2_img" src="https://media.istockphoto.com/vectors/panoramic-background-with-school-building-and-school-bus-in-flat-vector-id485098782?k=6&m=485098782&s=170667a&w=0&h=rQ1ZDA5c4smnhg9QtfG9ZhH2FHJ7DXUxZ5cUfWIAHk4=" alt="" />
                        <h2 className="homepage_cont_2_heading">School</h2>
                    </a>
                </div>
                <div className="homepage_cont_2_img_div_2">
                    <a className="homepage_cont_2_img_link" href="">
                        <img className="homepage_cont_2_img" src="https://th.bing.com/th/id/R.2f3e4067943290aead99c39a38c5a949?rik=u0xPelLuKZ6mVA&riu=http%3a%2f%2fimages.clipartpanda.com%2fcollege-clip-art-1326986427_college_clip_art.jpg&ehk=fE%2fELjF87XCUeX4754nwdgh2k%2bTvhipSP3tTS2ARIQM%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <h2 className="homepage_cont_2_heading">College</h2>   
                    </a>         
                </div>
            </div>
        </div>
        <div className="homepage_cont_3">
            <h1 className="homepage_cont_3_heading"> Fields To Explore</h1>
            <div className="homepage_cont_3_ex">
                <div>
                   <a href=""><img  className="homepage_cont_3_ex_img" src="" alt="" /></a>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div className="homepage_cont_3_ex_p">
                    <p className="homepage_cont_3_ex_p_p">Engineering stimulates the mind. Kids get bored easily. They have got to get their hands dirty: make things, dismantle things, fix things. When the schools can offer that, ypu'll have an engineer for life. <br /><a href="">more...</a> </p>
                </div>
            </div>
            <div className="homepage_cont_3_ex">
                <div className="homepage_cont_3_ex_p">
                    <p className="homepage_cont_3_ex_p_p">I want to experience the most beautiful adrenaline rush of my life. A rush while taking medical pledge/oath. <br /><a href="">more...</a></p>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div>
                    <a href="">
                        <video width="25rem" height="20rem" controls className="homepage_cont_3_ex_vdo">
                            <source src="..Videos\Doctor.mp4" type="video\mp4"/>
                        </video>
                    </a>
                </div>
            </div>
            <div className="homepage_cont_3_ex">
                <div>
                   <a href=""><img  className="homepage_cont_3_ex_img" src="" alt="" /></a>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div className="homepage_cont_3_ex_p">
                    <p className="homepage_cont_3_ex_p_p">"npm Almost everything worthwhile carries with it some sort of risk, whether it’s starting a new business, whether it’s leaving home, whether it’s getting married, or whether it’s flying in space.” – Chris Hadfield, astronaut <br /><a href="">more...</a> </p>
                </div>
            </div>
            <div className="homepage_cont_3_ex">
                <div className="homepage_cont_3_ex_p">
                    <p className="homepage_cont_3_ex_p_p">"The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring." -- Paul Rand, graphic designer <br /><a href="">more...</a></p>
                </div>
                <hr className="homepage_cont_3_hr" />
                <div>
                    <a href=""><img className="homepage_cont_3_ex_img" src="" alt="" /></a>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default Container2
