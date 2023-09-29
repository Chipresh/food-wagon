import React from 'react'
import image1 from "../Assets/Image Base.png"
import image2 from "../Assets/Icon (4).png"
import image3 from "../Assets/Icon (5).png"
import image4 from "../Assets/Icon (6).png"
import image5 from "../Assets/Icon (7).png"
// import image4 

const Banner = () => {
    return (
        <div className='banner1'>
            <div className='current'>

                <div className='mob-base'>
                    <img src={image1} alt="" />
                </div>

                <div className='ban'>
                    <h1>Are you Starving?</h1>

                    <p>Within a few clicks, find meals that are accessible near you</p>
                </div>
                <div className='bg-white'>

                    <div className='deliver'>
                        <div className='rgb'>
                            <img src={image2} alt="" className='pick' />
                            <p>Delivery</p>
                        </div>
                        <div className='pickup-1'>
                            <img src={image3} alt="" className='pick' />
                            <p className='pickup'>Pickup</p>
                        </div>
                    </div>
                    <div className='location'>
                        <div className='location-1'>
                            <img src={image5} alt="" className='img5' />
                            <input type="text" placeholder='Enter Your Address' />
                        </div>
                        <div className='find-food'>
                            <img src={image4} alt="" />
                            <input type="text" placeholder='Find food' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='base-img'>
                <img src={image1} alt="" />
            </div>

        </div>
    )
}

export default Banner