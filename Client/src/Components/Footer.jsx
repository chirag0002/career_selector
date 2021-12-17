import React from 'react'
import "../styling/Footer.css"
import footer_img from "../Images/uc.png"
import footer_img1 from "../Images/send.png"
import footer_img2 from "../Images/logo.png"
import { Button } from '@mui/material';
import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import linkedin from "../Images/linkedin.png"
import facebook from "../Images/facebook.png"
import {Link} from "react-location"
import discord from "../Images/Discord.png"





const Footer = () => {
    return (
        <div className="footer_cont_6">
            <div className="footer_cont_6a">
                <div className="footer_cont_6a_a">
                    <p className="footer_contribute">Help Us Contribute More</p>
                    <div className="footer_cont_6a_a1">
                        <input placeholder="Send us Your Email" className="footer_email" type="email" />
                        <Button><img className="footer_send" src={footer_img1} alt="" /></Button>
                    </div>
                </div>                
                <img className="footerimg" src={footer_img} alt="" />
                <div>
                    <a className="footer_cont_6a_b" target="blank" href="https://discord.gg/TkPQSE2n">
                        <img src={discord} alt="" 
                        style={{
                            cursor:"hover",
                            width:"50%",
                            marginTop: "25%"
                        }}/>
                    </a>
                </div>
            </div>
            <div className="footer_cont_6b">
                <div className="footer_cont_6b_a">
                    <img className="footer_logo" src={footer_img2} alt="" />
                    <p className="test_1">Let us help you in making right career choice</p>
                </div>
            
                <div className="footer_cont_6b_b">
                <table>
                    <tr>
                        <td>
                            <b>
                                About
                            </b><br />
                            <b>
                                Blogs
                            </b><br />
                            <b>
                                <a className="footer_togithub" target="blank" href="https://github.com/chirag0002/career_selector" alt="GitHub">Contribute</a> 
                            </b>
                        </td>
                    </tr>
                    </table>
                </div>
                <div className="footer_cont_6b_b">
                <table>
                    <tr>
                        <td>
                            <b>
                                <Link className="footer_togithub" to="/developers"><a class="footer_togithub"  href="" alt="">Developers</a></Link>
                            </b><br />
                            <b>
                                Help
                            </b><br />
                            <b>
                                <a className="footer_togithub" href="mailto:varshneychirag24@gmail.com">Mail Us</a>
                            </b>
                        </td>
                    </tr>
                    </table>
                </div>

                <div className="footer_cont_6b_b">
                <table>
                    <tr>
                        <td>
                            <b>
                                <p className="follow_us"> Follow Us </p> 
                            </b><br />
                                <div className="footer_icons">
                                    <img className="footer_icons_all" src={linkedin} alt="" />
                                    <img className="footer_icons_all" src={twitter} alt="" />
                                    <img className="footer_icons_all" src={facebook} alt="" />
                                    <img className="footer_icons_all" src={instagram} alt="" />
                            </div>
                        </td>
                    </tr>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default Footer