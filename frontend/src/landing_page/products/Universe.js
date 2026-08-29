import React from "react";

function Universe({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 p-5" style={{marginTop:'50px'}}>
      <div className="row text-center text-muted text-5xl poppins">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even
        further with our partner platforms</p>
      
        <div className="col-4 p-3 ">
          <img src="/images/zerodhafundhouse.png" style={{width:'50%', height:'40%'}}/>
          <p className="text-12 text-light-grey p-3 poppins ">
            Our asset management venture
            <br/>
            that is creating simple and
            transparent index
            <br/>
            funds to help you to save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="/images/sensibull-logo.svg" style={{width:'50%', height:'40%'}}/>
          <p className="text-light-grey poppins text-center text-12 mt-3">
            Options trading platform that lets you
            <br/>
            create strategies, analyse positions, and examine 
            <br/>
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="/images/tijoriimg.svg" style={{width:'50%', height:'40%'}}/>
          <p className="text-light-grey poppins text-center text-12 mt-3">
            Investment research platform 
            <br/>
            that offers detailed insights on stocks
            <br/>
            sectors, supply chain, and more.
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="/images/streakLogo.png" style={{width:'50%', height:'40%'}}/>
          {/* <p className=" poppins text-center mt-3 text-light-grey text-12">
            Our asset management venture, that is creating simple and
            transparent index funds to help you to save for your goals.
          </p> */}
          <p className="text-12 text-light-grey p-3 poppins ">
            Systematic investment platform
            <br/>
            that allows you to create and backtest
            <br/>
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="/images/smallcaseLogo.png" style={{width:'50%', height:'40%'}}/>
          <p className="text-light-grey poppins text-center text-12 mt-3">
            Thematic investing platform
            <br/>
            that helps you invest in divesified
            <br/>
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="/images/ditto-logo.png" style={{width:'50%', height:'40%'}}/>
          <p className="text-light-grey poppins text-center text-12 mt-3">
            Personalised advice to life
            <br/>
            and health insurance.No spam
            <br/>
            and no mis-selling.
          </p>
        </div>
        
        <button className = 'pt-14 pb-20 btn btn-primary fs-16 mb-3 mt-5 btn-lg' 
        style = {{margin:"0 auto", height:"10%", width:"15%", 
        backgroundColor:"#4285f4", borderRadius:"4px"}}>
        Sign up for free</button>
        
      </div>
    </div>
  );
  
}

export default Universe;