import React from "react";

function LeftSection({
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
        <hr className="my-0 mt-3 text-muted" />
        <div className="col-6 mt-5">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1
            className="mt-5"
            style={{ fontSize: "2.3rem", fontWeight: "normal" }}
          >
            {productName}
          </h1>
          <p className="text-muted poppins" style={{ fontSize: "1.2rem" }}>
            {productDescription}
          </p>
          <div className="mt-5">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "96px" }}
            >
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
              />
            </a>
            <a href={appStore}>
              <img
                src="/images/appStoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
        {/* <hr className="mt-5 p-3"/> */}
      </div>
    </div>
  );
}

export default LeftSection;
