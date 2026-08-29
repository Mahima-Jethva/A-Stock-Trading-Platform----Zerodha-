import React from "react";

function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 p-5 text-center border-top">
          <div className="col-8 p-4">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">Brokerage Calculator</h3>
            </a>
            <ul className="mt-4 text-muted fs-6" style={{textAlign : "left", lineHeight:"2.8"}}>
              <li>
                GST Tax levied by the government on the services rendered. 18%
                of ( brokerage + SEBI charges + transaction charges) SEBI
                Charges Charged at ₹10 per crore + GST by Securities and
                Exchange Board of India for regulating the markets.
              </li>

              <li>
                DP(Depository participant) charges ₹15.34 per scrip (₹3.5 CDSL
                fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading
                account ledger when stocks are sold, irrespective of quantity.
              </li>

              <li>
                Female demat account holders (as first holder) will enjoy a
                discount of ₹0.25 per transaction on the CDSL fee. Debit
                transactions of mutual funds & bonds get an additional discount
                of ₹0.25 on the CDSL fee.
              </li>

              <li>
                Pledging charges ₹30 + GST per pledge request per ISIN. AMC
                (Account maintenance charges) Free for the first year on all new
                resident individual accounts.
              </li>

              <li>
                For BSDA demat account: Zero charges if the holding value is
                less than ₹4,00,000. To learn more about BSDA, Click here For
                non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
                (90 days).
              </li>

              <li>
                Trading using 3-in-1 account with block functionality Delivery &
                MTF Brokerage: 0.5% per executed order. Intraday Brokerage:
                0.05% per executed order.
              </li>
            </ul>
          </div>
          <div className="col-4 p-4">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">Brokerage</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
