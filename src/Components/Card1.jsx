import React from 'react'

const Card1 = (props) => {
    const { img, text1, text2, text3, text4, text5 } = props

    return (
        <div className='card-1'>

            <img src={img} alt="" />

            <div className='small-card'>
                <h2>{text1}</h2>
                <sup>{text2}</sup>
                <sub>{text3}</sub>
            </div>

            <p className='grey'>{text4}</p>

            <div className='days-discount'>
                <p>{text5}</p>
            </div>

        </div>
    )
}

export default Card1