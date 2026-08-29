import React from "react";
// import { MoveRight } from 'lucide-react';

function Hero() {
  return (
    <div className="container">
      <div className="text-center mt-5 p-5">
        <h3>Technology</h3>
        <h3 className="text-muted mt-3 fs-5">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration:   "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
