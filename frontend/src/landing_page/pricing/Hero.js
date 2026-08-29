import React from "react";

function Hero() {
  return (
    <div className="container">
      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <h1 className="fs-2 text-center">Charges</h1>
        <p className="text-center fs-4" style={{ color: "grey" }}>
          {" "}
          List of all charges and taxes.
        </p>
      </div>

      <div className="row">
        <div className="col-4 p-5">
          <img src="/images/pricing-eq.svg" alt="Equity Charges" />
          <h3 className="text-center">Free Equity Delivery</h3>
          <p className="text-muted text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/images/other-trades.svg" alt="Other Trades" />
          <h3 className="text-center">Other Trades</h3>
          <p className="text-muted text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/images/pricing0.svg" alt="Pricing 0" />
          <h3 className="text-center">Free Direct MF</h3>
          <p className="text-muted text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
