import React from 'react'
import "../styling/Footer.css"
import footer_img from "../Images/uc.png"
import footer_img1 from "../Images/send.png"
import { Button } from '@mui/material';
import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import linkedin from "../Images/linkedin.png"
import facebook from "../Images/facebook.png"
import discord from "../Images/Discord.png"




const Footer = () => {
    return (
        <div className="footer_cont_6">
            <div className="footer_cont_6a">
                <div className="footer_cont_6a_a">
                    <p className="footer_contribute">Help Us Contribute More</p>
                    <div className="footer_cont_6a_a1">
                        <input className="footer_email" type="email" placeholder="Any Suggestions" />
                        <Button><img className="footer_send" src={footer_img1} alt="" /></Button>
                    </div>
                </div>                
                <img className="footerimg" src={footer_img} alt="" />
                <div>
                    <a className="discord" target="blank" href="https://discord.gg/TkPQSE2n">
                        <img className="discord_img" src={discord} alt="" 
                        style={{
                            cursor:"hover",
                            width:"50%",
                            marginTop: "25%"
                        }}/>
                    </a>
                </div>
            </div>
            <div className="footer_cont_6b">
                <div className="footer_res">
                <div className="footer_cont_6b_b">
                <table>
                    <tr>
                        <td>
                            <b>
                                <a className="footer_togithub"  href="/about" alt="">About</a>
                            </b><br />
                            <b>
                               <a className="footer_togithub"  href="/blog" alt="">Blogs</a>
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
                                <a className="footer_togithub"  href="/developers" alt="">Developers</a>
                            </b><br />
                            <b>
                            <a className="footer_togithub" href="/Helpus">
                                Help
                            </a>
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
                                <div className="footer_icons1">
                                    <img className="footer_icons_all" src={linkedin} alt="" />
                                    <img className="footer_icons_all" src={twitter} alt="" />
                                </div>
                                <div className="footer_icons2">    
                                    <img className="footer_icons_all" src={facebook} alt="" />
                                    <img className="footer_icons_all" src={instagram} alt="" />
                                </div>
                            </div>
                        </td>
                    </tr>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer