import React from 'react'

const Section = ({ img1, img2, text, img3, text1, img4, text4, img5, text3, button }) => {

    return (
        <div className='section-items'>
            <img src={img1} alt="" className='map-imgs' />

            <div className='fast2'>
                <div className='off'>
                    <img src={img2} alt="" />
                    <p>{text}</p>
                </div>

                <div className='fast'>
                    <img src={img3} alt="" />
                    <p>{text1}</p>
                </div>
            </div>

            <div className='square'>
                <img src={img4} alt="" />
                <div className='stars' >
                    <div>
                        <h4>{text4}</h4>
                    </div>
                    <div className='num'>
                    <img src={img5} alt="" />
                    <p>{text3}</p>
                    </div>
                </div>
            </div>
            <div className='open'>{button}</div>
        </div>
    )
}

export default Section;