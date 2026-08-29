import React from "react";
// import Navbar from '../Navbar';
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
// import Footer from '../Footer';

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/images/kite.png"
        productName="Kite"
        productDescription="Kite is a powerful trading platform that offers a seamless experience for traders of all levels.Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account.Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <LeftSection
        imageURL="/images/varsity.png"
        productName="Varsity"
        productDescription="The ultimate platform for learning investing and trading. Get access to a vast library of educational resources, interactive courses, and expert insights."
        googlePlay=""
        appStore=""
      />
      <p className="text-muted poppins text-center mt-5" style={{ fontSize: "1.2rem"}}>
        Want to know more about our technology stack? Check out the <a href="https://zerodha.tech" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
