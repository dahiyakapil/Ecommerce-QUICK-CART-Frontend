import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import mainbanner from "../images/images/main-banner-1.jpg";
import catbanner01 from "../images/images/catbanner-01.jpg";
import catbanner02 from "../images/images/catbanner-02.jpg";
import catbanner03 from "../images/images/catbanner-03.jpg";
import catbanner04 from "../images/images/catbanner-04.jpg";
import service from "../images/images/service.png";
import service02 from "../images/images/service-02.png";
import service03 from "../images/images/service-03.png";
import service04 from "../images/images/service-04.png";
import service05 from "../images/images/service-05.png";
import camera from "../images/images/camera.jpg";
import tv from "../images/images/tv.jpg";
import watch from "../images/images/watch.jpg";
import headphone from "../images/images/headphone.jpg";
import laptop from "../images/images/laptop.jpg";
import homeapp from "../images/images/homeapp.jpg";
import speaker from "../images/images/speaker.jpg";
import brand1 from "../images/images/brand-01.png"
import brand2 from "../images/images/brand-02.png"
import brand3 from "../images/images/brand-03.png"
import brand4 from "../images/images/brand-04.png"
import brand5 from "../images/images/brand-05.png"
import brand6 from "../images/images/brand-06.png"
import brand7 from "../images/images/brand-07.png"
import brand8 from "../images/images/brand-08.png"
import BlogCard from "../components/BlogCard";


const Home = () => {
  return (
    <>
      <section className="home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
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
              <div className="d-flex gap-10 flex-wrap  justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src={catbanner01}
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Best Sale</h5>
                    <p>
                      From $1699.00 <br /> or $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src={catbanner02}
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest <br />
                      band styles and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src={catbanner03}
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $599 or <br />
                      $49.91/mo. for 12 mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catbanner04}
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback & <br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src={service} alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service02} alt="service" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service03} alt="service" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service04} alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service05} alt="service" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="ro">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
              <Marquee>
                <div className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>
               
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4}alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5}alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6}alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7}alt="brand" />
                  </div>
                </div>
                <div className="mx-4 w-25">
                    <img src={brand8}alt="brand" />
                  </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
           <BlogCard />
           <BlogCard />
           <BlogCard />
           <BlogCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Out Latest Blogs</h3>
            </div>
           <BlogCard />
           <BlogCard />
           <BlogCard />
           <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
