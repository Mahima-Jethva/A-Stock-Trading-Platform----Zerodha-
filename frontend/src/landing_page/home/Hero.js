import React from 'react';

function Hero() {
    return ( 
        <div className = 'container p-5'>
            <div className = 'row text-center'>
                <img src = 'images/homeHero.png' alt='Hero Image' className = 'mb--10 mt-1'/>
                <h1 className = 'mt-5 fs-2'>Invest in everything</h1>
                <p className = 'fs-4 mt-2'>
                Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button className = 'pt-14 pb-20 btn btn-primary fs-16 mb-5 mt-3 btn-lg' 
                style = {{margin:"0 auto", height:"10%", width:"15%", 
                backgroundColor:"#4285f4", borderRadius:"4px"}}>
                Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;