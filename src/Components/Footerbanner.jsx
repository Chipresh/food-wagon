import React from 'react'
import image1 from "../Assets/Icon (16).png"

const Footerbanner = () => {
  return (

    <div className='footer-ban'>
      <h3>Are you ready to order with the best deals?</h3>
      <button>Proceed to order <img src={image1} alt="" /></button>
    </div>
  )
}

export default Footerbanner;