import React from 'react';
import image1 from "../Assets/1 (1).png";
import image2 from "../Assets/2.png";
import image3 from "../Assets/3.png";
import image4 from "../Assets/envelope.png"
import image5 from "../Assets/Symbol.png";
import image6 from "../Assets/Made with  by.png";

const Footer = () => {
    return (
        <div className='foot'>

            <div>

                <div className='foot-col'>
                    <div className='footmob'>
                    <h4>Our top cities</h4>

                    <div className='foot-row'>
                        <div>
                            <p>San Francisco</p>
                            <p>Miami</p>
                            <p>San Diego</p>
                            <p>East Bay</p>
                            <p>Long Beach</p>
                        </div>

                        <div>
                            <p>Los Angeles</p>
                            <p>Washington DC</p>
                            <p>Seattle</p>
                            <p>Portland</p>
                            <p>Nashville</p>
                        </div>

                        <div>
                            <p>New York City</p>
                            <p>Orange County</p>
                            <p>Atlanta</p>
                            <p>Charlotte</p>
                            <p>Denver</p>
                        </div>

                        <div>
                            <p>Chicago</p>
                            <p>Phoenix</p>
                            <p>Las Vegas</p>
                            <p>Sacramento</p>
                            <p>Oklahoma City</p>
                        </div>

                        <div>
                            <p>Columbus</p>
                            <p>New Mexico</p>
                            <p>Albuquerque</p>
                            <p>Sacramento</p>
                            <p>New Orleans</p>
                        </div>

                    </div>
                    </div>
                </div>


                <div className='company'>

                    <div className='about'>

                        <div className='foot-col'>
                            <h4>Company</h4>

                            <div className='foot-row'>
                                <div>
                                    <p>About us</p>
                                    <p>Team</p>
                                    <p>Careers</p>
                                    <p>Blog</p>
                                </div>

                            </div>
                        </div>

                        <div className='foot-col'>
                            <h4>Contact</h4>

                            <div className='foot-row'>
                                <div className='ride'>
                                    <p>Help & Support</p>
                                    <p>Partner with us </p>
                                    <p>Ride with us</p>
                                </div>
                            </div>
                        </div>

                        <div className='foot-col'>
                            <h4>Legal</h4>

                            <div className='foot-row'>
                                <div>
                                    <p>Terms & Conditions</p>
                                    <p>Refund & Cancellation</p>
                                    <p>Privacy Policy</p>
                                    <p>Cookie Policy</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='social'>
                        <div className='foot-col'>
                            <h5>Follow Us</h5>

                            <div className='foot-row'>
                                <div className='social-icons'>
                                    <div className='svgs'>
                                        <div>
                                            <img src={image1} alt="" />
                                        </div>
                                        <div>
                                            <img src={image2} alt="" />
                                        </div>
                                        <div>
                                            <img src={image3} alt="" />
                                        </div>
                                    </div>

                                    <div className='exclusive'>
                                        <p>Receive exclusive offers in your mailbox</p>
                                    </div>

                                    <div className='email-cont'>
                                        <img src={image4} alt="" className='email' />
                                        <input type="Email" placeholder='Enter Your email' />
                                        <button>Subscribe</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className='company'>
                    <div className='foot-col'>

                        <div className='foot-row'>
                            <div className='copywrite'>
                                <p>All rights Reserved</p>
                                <img src={image5} alt="" />
                                <p>Your Company, 2021</p>
                            </div>

                        </div>
                    </div> 

                    <div className='made'>
                        <img src={image6} alt="" />
                        <p>Themewagon</p>
                    </div>

                </div>


            </div>



        </div>

    )
}

export default Footer;