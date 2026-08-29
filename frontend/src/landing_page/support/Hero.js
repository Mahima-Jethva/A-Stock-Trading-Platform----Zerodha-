import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ textDecoration: "none", color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="p-5" id="supportWrapper">
        <div className="col-6 ">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input placeholder="Eg.How to I activate F&O, why is my order getting rejected" />
          <br />
          <a href="" style={{ color: "white" }} className="p-3">
            Track account opening
          </a>
          <a href="" style={{ color: "white" }} className="p-3">
            Track segment activation
          </a>
          <a href="" style={{ color: "white" }} className="p-3">
            Intraday margins
          </a>
          <a href="" style={{ color: "white" }} className="p-3">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-3" style={{marginLeft : "90px"}}>
          <h4>Featured</h4>
          <ol>
            <li>
            <a href="" style={{ color: "white" }} className="p-3">
              Current Takeovers and Delisting - January 2026
            </a>
            </li>
            <li>
            <a href="" style={{ color: "white" }} className="p-3">
              Latest Intraday leverages - MIS & CO
            </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
