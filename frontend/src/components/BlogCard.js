import React from "react";
import { Link } from "react-router-dom";
//Images
import blog1 from "../images/images/blog-1.jpg";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog1} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">21 Oct, 2024</p>
        <h5 className="title">
          The Ultimate Guide to Marketing Strategies to Improve Sales
        </h5>
        <p className="desc">
          Many things about electronic devices your kids don't want
        </p>
        <Link className="button" to="">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
