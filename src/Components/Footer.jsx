import React from 'react'
import "../styling/Footer.css"
import footer_img from "../Images/unique-career-plan2.jpeg"
import footer_img1 from "../Images/paper-plane.png"
import { Button } from '@mui/material';
import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import linkedin from "../Images/linkedin.png"
import facebook from "../Images/facebook.png"





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
            </div>
            <div className="footer_cont_6b">
                <div className="footer_cont_6b_a">
                    <p className="test">CS</p>
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
                                Contribute
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
                                Developers
                            </b><br />
                            <b>
                                Help
                            </b><br />
                            <b>
                                Mail Us
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
                                Follow Us 
                            </b><br />
                                <div className="footer_icons">
                                    <img className="footer_icons_all1" src={linkedin} alt="" />
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
