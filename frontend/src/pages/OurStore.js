import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Shop By Categories
                    </h3>
                    <div>
                         <ul className="ps-0">
                            <li>Watch</li>
                            <li>Tv</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                         </ul>
                    </div>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                       Filter By
                    </h3>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Product Tags
                    </h3>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Random Products
                    </h3>
                </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
