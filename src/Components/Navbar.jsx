import React from 'react';
import image1 from "../Assets/Logo.png";
import image2 from "../Assets/map-marker-alt.png";
import image3 from "../Assets/Search.png";
import image4 from "../Assets/user.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = ({ handleClick, hamburger }) => {

    function renderIcon() {
        return !hamburger ? <RxHamburgerMenu onClick={handleClick} className='links' /> : <AiOutlineClose onClick={handleClick} className='close' />
    }
    return (
        <>
            <div className='topnav'>
                <div className='logo-div'>
                    <img src={image1} alt="logo" className='logo' />
                </div>
                
                <div className='deliver'>
                    <h4>Deliver to:</h4>
                    <img src={image2} alt="" />
                    <p>Current Location</p>
                    <h4>Mohammedpur Bus Stand,Dhaka</h4>
                </div>
                <div className='search'>
                    <div className='search-icon'>
                        <img src={image3} alt="" />
                        <input type="text" placeholder='Search food' />
                    </div >
                    <div className='login'>
                        <img src={image4} alt="" />
                        <button>Login</button>
                    </div>
                </div>

            </div>

            <div className='mobnav'>
                <div>
                    <img src={image1} alt="" className='logo-mob' />
                </div>

                <div>
                    {renderIcon()}
                </div>

            </div>

            {hamburger && <div>
                    <ul className='ordered-list'>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                           Contact
                        </li>
                        <li>
                           Login
                        </li>
                        <li>
                          Location
                        </li>
                    </ul>
                </div >
                }
        </>
    )
}
export default Navbar