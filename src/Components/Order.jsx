import React from 'react'

import image4 from "../Assets/Icon (16).png"

const Order = () => {
    return (
        <div className='order'>

            <div className='box-items'>

                <div className='box'>
                    <h4 className='head'>Best deals<h4 className='cripsy'>Crispy</h4> </h4>
                    <h4 className='cripsy'>
                        Sandwiches</h4>
                    <p>Enjoy the large size of sandwiches. Complete
                        perfect slice of sandwiches.</p>
                    <button >Proceed to order <img src={image4} alt="" /></button>
                </div>
                <div className='box-img'>
                    
                </div>
            </div>

            <div className='box-items'>
                <div className='box-img1'>
                    
                </div>
                <div className='box'>
                    <h4 className='head'>Celebrate  parties
                        with </h4><h4 className='cripsy'>Fried Chicken</h4>
                    <p>Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                        best deals for fried chicken.</p>
                    <button className=''>Proceed to order <img src={image4} alt="" /></button>
                </div>

            </div> 

             <div className='box-items'>
            <div className='box'>
                    <h4 className='head'>Wanna eat hot
                        & spicy </h4><h4 className='cripsy'>Pizza?</h4>
                    <p>Pair up with a friend and enjoy the
                        hot and crispy pizza pops. Try it
                        with the best deals.</p>
                    <button>Proceed to order <img src={image4} alt="" /></button>
                </div>
                <div className='box-img2'>
                    
                </div> 
                

            </div> 



        </div>
    )
}

export default Order