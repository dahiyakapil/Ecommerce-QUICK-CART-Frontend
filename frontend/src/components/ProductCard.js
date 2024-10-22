import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import watch from "../images/images/watch.jpg";
import watch2 from "../images/images/watch-2.webp";
import prodcompare from "../images/images/prodcompare.svg";
import view from "../images/images/view.svg";
import addCart from "../images/images/add-cart.svg";
import wishlist from "../images/images/wish.svg";


const ProductCard = (props) => {
  const {grid} =props;
  let location = useLocation();
  return (

    <>
     <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src={wishlist} alt="" /></Link>
        </div>
        <div className="product-image">
          <img src={watch} alt="product image"  className="img-fluid"/>
          <img src={watch2} alt="product image" className="img-fluid"/>

          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Vybrix Magnetic Power Bank Wireless Charging
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src={prodcompare} alt="prod compare" /></Link>
                    <Link><img src={view} alt="view" /></Link>
                    <Link><img src={addCart} alt="add to cart" /></Link>
                </div>
            </div>
      </div>
    </div>

    <div className={`${location.pathname == "/store" ?`gr-${grid}`: "col-3"}`}>
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src={wishlist} alt="" /></Link>
        </div>
        <div className="product-image">
          <img src={watch} alt="product image"  className="img-fluid"/>
          <img src={watch2} alt="product image" className="img-fluid"/>

          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Vybrix Magnetic Power Bank Wireless Charging
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src={prodcompare} alt="prod compare" /></Link>
                    <Link><img src={view} alt="view" /></Link>
                    <Link><img src={addCart} alt="add to cart" /></Link>
                </div>
            </div>
      </div>
    </div>
    </>
   
    
  );
};

export default ProductCard;
