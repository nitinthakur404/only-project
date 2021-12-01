import React from "react";
import "./featuredproduct.css";
const FeaturedProduct = () => {
  return (
    <section className="FeaturedProduct-main-container">
      
      <article className="FeaturedProduct-Heading">
        <h1 className="">Featured Product</h1>
        <div className="blank-underline"></div>
      </article>

      <article className="coming-Soon-article">
        <h1 className="Coming-soon"> Comming Soon</h1>
        <p>We'r Currently working on creating This feature</p>
      <button className="handleAllProduct"> ALL  Product</button>
      </article>
      
    </section>
  );
};
export default FeaturedProduct;
