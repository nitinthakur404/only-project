import React from "react";
import "./featuredproduct.css";
import Data from "../Data";
import { IoSearchCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
// import './Cardcompo.css'

const FeaturedProduct = () => {
  let filterShowCaseData = Data.filter((item) => { return item.showcase == true })
  console.log(filterShowCaseData, "filterShowCaseData")
  return (
    <section className="FeaturedProduct-main-container">
      <article className="FeaturedProduct-Heading">
        <h1 className="">Featured Product</h1>
      </article>
      <article className="coming-Soon-article">
        {
          filterShowCaseData.map((item, index) => {
            console.log()
            return (
              <div key={item.id}>
                <section className="container-card-featured">
                  <article className="secondDetailspage">
                    <button className="hoverbutton" type="button" onClick={() => {
                      console.log(item.id)
                    }}>
                      <Link to={`/Product/${item.id}`}>
                        <IoSearchCircle />
                      </Link>
                    </button>
                  </article>
                  <article className="CardcompoImgcontainer">

                    <img src={item.image} alt="blank"
                    />
                  </article>

                  <div className="namepricedetails">
                    <h4 className="namedetils" >{item.name}</h4>
                    <h4 className="pricedetils">${item.price}</h4>
                  </div>
                </section>
              </div>
            )
          })
        }
      </article>
      <article className="handleAllProductsection">
        <button className="handleAllProduct"><Link to='../product'> ALL  Product</Link></button>
      </article>
    </section>
  );
};
export default FeaturedProduct;
