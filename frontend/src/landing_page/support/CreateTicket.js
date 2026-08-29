import React from "react";

function CreateTicket() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mb-5 mt-5">
          <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
          <div className="col-4 p-3 mt-5">
            <h4>
              <i class="fa fa-plus-circle p-3" aria-hidden="true"></i>
              Account Opening
            </h4>
            <a href="" style={{textDecoration : "none"}}>Resident individual</a><br/>
            <a href="" style={{textDecoration : "none"}}>Offline account opening</a><br/>
            <a href="" style={{textDecoration : "none"}}>Company, Partnership and HUF Account</a><br/>
            <a href="" style={{textDecoration : "none"}}>Opening</a><br/>
            <a href="" style={{textDecoration : "none"}}>Zerodha IDFC FIRST Bank 3-in-1</a><br/>
            <a href="" style={{textDecoration : "none"}}>Getting started</a><br/>
          </div>

          <div className="col-4 p-3 mt-5">
            <h4>
              <i class="fa fa-user-o p-3" aria-hidden="true"></i>
              Your Zerodha account
            </h4>
            <a href="" style={{textDecoration : "none"}}>Your Profile</a><br/>
            <a href="" style={{textDecoration : "none"}}>Account Modification</a><br/>
            <a href="" style={{textDecoration : "none"}}>Client master report(CMR) and Depository</a><br/>
            <a href="" style={{textDecoration : "none"}}>Nomination</a><br/>
            <a href="" style={{textDecoration : "none"}}>Transfer</a><br/>
            <a href="" style={{textDecoration : "none"}}>Getting started</a><br/>
          </div>

          <div className="col-4 p-3 mt-5">
            <h4>
              <i class="fa fa-plus-circle p-3" aria-hidden="true"></i>
              Kite
            </h4>
            <a href="" style={{textDecoration : "none"}}>IPO</a><br/>
            <a href="" style={{textDecoration : "none"}}>Trading FAQs</a><br/>
            <a href="" style={{textDecoration : "none"}}>Margin Trading Facility(MTFS)</a><br/>
            <a href="" style={{textDecoration : "none"}}>Chats and orders</a><br/>
            <a href="" style={{textDecoration : "none"}}>Alerts and Nudges</a><br/>
            <a href="" style={{textDecoration : "none"}}>General</a><br/>
          </div>

          <div className="row p-3 mt-5">

            <div className="col-4">
              <h4>
                <i class="fa fa-inr p-3" aria-hidden="true"></i>
                Funds
              </h4>
              <a href="" style={{textDecoration : "none"}}>Add money</a><br/>
              <a href="" style={{textDecoration : "none"}}>Withdraw Money</a><br/>
              <a href="" style={{textDecoration : "none"}}>Add bank accounts</a><br/>
              <a href="" style={{textDecoration : "none"}}>eMandates</a><br/>
            </div>


            <div className="col-4">
              <h4>
                <i class="fa fa-circle-thin p-3" aria-hidden="true"></i>
                Console
              </h4>
              <a href="" style={{textDecoration : "none"}}>Portfolio</a><br/>
              <a href="" style={{textDecoration : "none"}}>Corporate actions</a><br/>
              <a href="" style={{textDecoration : "none"}}>Funds Statement</a><br/>
              <a href="" style={{textDecoration : "none"}}>Report</a><br/>
              <a href="" style={{textDecoration : "none"}}>Profile</a><br/>
              <a href="" style={{textDecoration : "none"}}>Segments</a><br/>
            </div>


            <div className="col-4">
              <h4>
                <i class="fa fa-circle-o-notch p-3" aria-hidden="true"></i>
                Coin
              </h4>
              <a href="" style={{textDecoration : "none"}}>Mutual Funds</a><br/>
              <a href="" style={{textDecoration : "none"}}>National Pension Scheme(NPS)</a><br/>
              <a href="" style={{textDecoration : "none"}}>Fixed Deposit(FD)</a><br/>
              <a href="" style={{textDecoration : "none"}}>Features on Coin</a><br/>
              <a href="" style={{textDecoration : "none"}}>Payments and orders</a><br/>
              <a href="" style={{textDecoration : "none"}}>Coin</a><br/>   
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
