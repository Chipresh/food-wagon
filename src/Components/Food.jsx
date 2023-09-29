import React from 'react';
import image1 from "../Assets/Icon (17).png";
import image2 from "../Assets/Icon (15).png";
import image3 from "../Assets/Icon (16).png";
import image4 from "../Assets/Image (8).png";
import image5 from "../Assets/Image (9).png";
import image6 from "../Assets/Image (32).png";
import image7 from "../Assets/Image (33).png";
import image8 from "../Assets/Image (34).png";
import image9 from '../Assets/Image (35).png';


const Food = () => {
    return (
        <div className='food'>

            <div className='food-item'>
                <div>
                    <h3>Search by Food</h3>
                </div>
                <div className='alls'>
                    <p>View All</p>
                    <img src={image1} alt="" />
                    <div className='arrs'>
                        <img src={image2} alt="" />
                    </div>
                    <div className='arrs'>
                        <img src={image3} alt="" />
                    </div>
                </div>
            </div>

            <div className='imgs-food'>
                <div>
                    <img src={image4} alt="" />
                    <p>Pizza</p>
                </div>
                <div>
                    <img src={image5} alt="" />
                    <p>Burger</p>
                </div>
                <div>
                    <img src={image6} alt="" />
                    <p>Noodles</p>
                    </div>
                    <div>
                    <img src={image7} alt="" />
                    <p>Sub-sandiwch</p>
                    </div>
                    <div>
                    <img src={image8} alt="" />
                    <p>Chowmein</p>
                    </div>
                    <div>
                    <img src={image9} alt="" />
                    <p>Steak</p>
                    </div>
                </div>
            </div>
            )
}

            export default Food;