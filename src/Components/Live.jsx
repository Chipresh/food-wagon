import React from 'react';
import image1 from "../Assets/Icon.png";
import image2 from "../Assets/Icon (1).png";
import image3 from "../Assets/Icon (2).png";

const Live = () => {
    return (
        <div className='track'>

            <div className='track-2'>
                <div>
                    <img src={image1} alt="" />
                    <p className='daily'>Daily Discounts</p>
                </div>
                
                <div>
                    <img src={image2} alt="" />
                    <p className='daily'>Live Tracing</p>
                </div>
            
                <div >
                    <img src={image3} alt="" />
                    <p className='daily'>Quick Delivery</p>
                </div>
            </div>

        </div>
    )
}

export default Live