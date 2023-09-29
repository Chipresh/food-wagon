import React from 'react';
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Card1 from '../Components/Card1';
import img1 from "../Assets/Image (14).png";
import img2 from "../Assets/Image (15).png";
import img3 from "../Assets/Image (16).png";
import img4 from "../Assets/Image (17).png";
import Banner2 from '../Components/Banner2';
import Slide from "../Components/Slide";
import Section from '../Components/Section';
import Item from "../Components/Item";
import image6 from "../Assets/Icon (16).png";
import Food from "../Components/Food";
import Live from '../Components/Live';
import Install from '../Components/Install';
import Order from '../Components/Order';
import Footerbanner from '../Components/Footerbanner';
import Footer from "../Components/Footer";
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Home = () => {

    const itemMapper = Item.map(each => <Section key={each.id} id={each.id} img1={each.img1} img2={each.img2} text={each.text} img3={each.img3} text1={each.text1} img4={each.img4} text4={each.text4} img5={each.img5} text3={each.text3} button={each.button} />)

    const [hamburger, setHamburger] = useState(false);


    function handleClick() {
        setHamburger(prev => !prev)
        console.log(hamburger)

    }

    function renderIcon(){
        return !hamburger ?  <RxHamburgerMenu/> : <AiOutlineClose/>
    }

    return (
        <div>

            <section>
                <div className='nav'>
                    <Navbar  handleClick= {handleClick} hamburger={hamburger}/>
                </div>
            </section>

            <section>
                <div className='banner'>
                    <Banner />
                </div>
            </section>

            <section>
                <div className='card'>
                    <Card1 img={img1} text1="15" text2="%" text3="off" text4="Greys Vage" text5
                        ="6 Days Remaining" />
                    <Card1 img={img2} text1="10" text2="%" text3="off" text4="Greys Vage" text5
                        ="6 Days Remaining" />
                    <Card1 img={img3} text1="25" text2="%" text3="off" text4="Greys Vage" text5
                        ="7 Days Remaining" />
                    <Card1 img={img4} text1="20" text2="%" text3="off" text4="Greys Vage" text5
                        ="8 Days Remaining" />
                </div>
            </section>

            <section>
                <div className='main-banner'>
                    <Banner2 />
                </div>
            </section>

            <section>
                <div className='slider'>
                    <Slide />
                </div>
            </section>

            <section>
                <div className='feature'>Featured Restaurants</div>
            </section>

            <section>
                <div className='section'>
                    {itemMapper}
                </div>
            </section>

            <section>
                <div className='view'>
                    <p>View All</p>
                    <img src={image6} alt="" />
                </div>
            </section>

            <section>
                <div className='foods'>
                    <Food />
                </div>
            </section>

            <section>
                <div className='live'>
                    <Live />
                </div>
            </section>

            <section>
                <div className='app'>
                    <Install />
                </div>
            </section>

            <section>
                <div className='main-order'>
                    <Order />
                </div>
            </section>

            <section>
                <div className='footer-img'>
                    <Footerbanner />
                </div>
            </section>

            <section>
                <div className='footer'>
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Home