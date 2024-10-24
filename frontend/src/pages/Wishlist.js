import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import cross from "../images/images/cross.svg";
import watch from "../images/images/watch.jpg"
const Wishlist = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title={"Contact Us"} />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="cross position-absolute img-fluid"
                />
                <div className="wishlist-card-image">
                    <img src={watch} alt="" className="img-fluid w-100"/>
                </div>
                <div className="py-3">
                <h5 className="title">Lenovo Tab M9 Tablet 4 GB RAM 64 GB</h5>
                <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
