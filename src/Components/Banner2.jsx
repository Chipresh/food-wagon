import React from 'react';
import image1 from '../Assets/Icon (3).png';
import image2 from "../Assets/menu 2.png";
import image3 from "../Assets/Invoice.png";
import image4 from "../Assets/donut 1.png"

const Banner2 = () => {
    return (
        <div className='banner2'>

            <h2>How does it work</h2>

            <div className='bann'>
                
                <div>
                    <img src={image1} alt="" />
                    <h3>Select location</h3>
                    <p>Choose the location where your food will be delivered.</p>
                </div>
                <div>
                    <img src={image2} alt="" />
                    <h3>Choose order</h3>
                    <p>Check over hundreds of menus to pick your favorite food</p>
                </div>
                <div>
                    <img src={image3} alt="" />
                    <h3>Pay advanced</h3>
                    <p>It's quick, safe, and simple. Select several methods of payment</p>
                </div>
                <div>
                    <img src={image4} alt="" />
                    <h3>Enjoy meals</h3>
                    <p>Food is made and delivered directly to your home.</p>
                </div>

            </div>

        </div>
    )
}

export default Banner2