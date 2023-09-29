import React from 'react'
import Slider from "react-slick";
import image1 from "../Assets/Rectangle 336 (2).png";
import image2 from "../Assets/Rectangle 336 (3).png";
import image3 from "../Assets/Rectangle 336 (4).png";
import image4 from "../Assets/Rectangle 336 (5).png";
import image5 from "../Assets/Rectangle 336 (6).png";
import image6 from '../Assets/map-marker-alt.png';
import image7 from "../Assets/Icon (15).png"
import image8 from "../Assets/Icon (16).png"


const Slide = () => {

    return (
        <div className='slide'>

                <h2>Popular items</h2>

            <div className='carousel'>

                <div className='arrow'>
                    <img src={image7} alt="" />
                </div>

                <div>
                    <img src={image1} alt="" className='imgs' />
                    <h4>Cheese Burger</h4>
                    <div className='arena'>
                        <img src={image6} alt="" />
                        <h4>Burger Arena</h4>
                    </div>
                    <h5>$3.88</h5>
                    <button className='btnn'>Order Now</button>
                </div>

                <div>
                    <img src={image2} alt="" className='imgs' />
                    <h4>Toffe’s Cake</h4>
                    <div className='arena'>
                        <img src={image6} alt="" />
                        <h4>Top Sticks</h4>
                    </div>
                    <h5>$4.00</h5>
                    <button className='btnn'>Order Now</button>
                </div>

                <div>
                    <img src={image3} alt="" className='imgs' />
                    <h4>Dancake</h4>
                    <div className='arena'>
                        <img src={image6} alt="" />
                        <h4>Cake World</h4>
                    </div>
                    <h5>$1.99</h5>
                    <button className='btnn'>Order Now</button>
                </div>

                <div>
                    <img src={image4} alt="" className='imgs' />
                    <h4>Crispy Sandwitch</h4>
                    <div className='arena'>
                        <img src={image6} alt="" />
                        <h4>Fastfood Dine</h4>
                    </div>
                    <h5>$3.00</h5>
                    <button className='btnn'>Order Now</button>
                </div>

                <div>
                    <img src={image5} alt="" className='imgs' />
                    <h4>Thai  Soup</h4>
                    <div className='arena'>
                        <img src={image6} alt="" />
                        <h4>Foody man</h4>
                    </div>
                    <h5>$2.79</h5>
                    <button className='btnn'>Order Now</button>
                </div>

                <div className='arrow'>
                    <img src={image8} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Slide