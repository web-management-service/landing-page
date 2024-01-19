import React from 'react';
import hero from '../assets/Hero.png';

function Hero(){
    return(
        <div id='hero'>
            <img src={hero} alt="hero banner" style={{width:'100%'}} />
        </div>
    )
}

export default Hero;