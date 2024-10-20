import React from "react";
import { Link } from "react-router-dom";
import mainbanner from "../images/images/main-banner-1.jpg";
import catbanner from "../images/images/catbanner-01.jpg"


const Home = () => {
  return (
    <>
      <section className="home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src={mainbanner}
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
            <div className="small-banner position-relative p-3">
                <img
                  src={catbanner}
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
