import React from 'react'
import "../styling/Footer.css"
import footer_img from "../Images/unique-career-plan2.jpeg"
import footer_img1 from "../Images/paper-plane.png"

const Footer = () => {
    return (
        <div className="footer_cont_6">
            <div className="footer_cont_6a">
                <div className="footer_cont_6a_a">
                    <p className="footer_contribute">Help Us Contribute More</p>
                    <div className="footer_cont_6a_a1">
                        <input placeholder="Send us Your Email" className="footer_email" type="email" />
                        <img className="footer_send" src={footer_img1} alt="" />
                        </div>
                </div>                
                <img className="footerimg" src={footer_img} alt="" />
            </div>
            <div className="footer_cont_6b">
            <h1 className="test">CS</h1>
                <div className="footer_cont_6b_a">
                <table>
                    <tr>
                        <td>
                            <b>
                                About
                            </b><br />
                            <b>
                                Jobs
                            </b><br />
                            <b>
                                Docs
                            </b>
                        </td>
                    </tr>
                    </table>
                </div>
                <div className="footer_cont_6b_a">
                <table>
                    <tr>
                        <td>
                            <b>
                                About
                            </b><br />
                            <b>
                                Jobs
                            </b><br />
                            <b>
                                Docs
                            </b>
                        </td>
                    </tr>
                    </table>
                </div>
                
            </div>
            <div className="footer_cont_6c">
            
            </div>
        </div>
    )
}

export default Footer
