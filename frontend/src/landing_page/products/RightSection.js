import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <hr className="my-0 mt-5 text-muted" />
       
        <div className="col-6 p-5 mt-5">
          <h1
            style={{
              fontSize: "2.3rem",
              fontWeight: "normal",
              marginTop: "18%",
            }}
          >
            {productName}
          </h1>
          <p
            className="text-muted poppins"
            style={{ fontSize: "1.1rem", marginTop: "10px" }}
          >
            {productDescription}
          </p>
          <div className="mt-3">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
