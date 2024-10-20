import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 8168035828">
                  +91 8168035828
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">QuickCart</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6"/>
                </span>
                /
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link>
                  <img src="images/compare.svg" alt="" /></Link>
                  <p></p>
                </div>
                <div>
                  <Link>
                  <img src="" alt="" /></Link>
                  <p></p>
                </div>
                <div>
                  <Link>
                  <img src="" alt="" /></Link>
                  <p></p>
                </div>
                <div>
                  <Link>
                  <img src="" alt="" /></Link>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
