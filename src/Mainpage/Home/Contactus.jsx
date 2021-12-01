import React from "react";
import Footer from "./Footer.jsx";
import "./contactus.css";
function Contactus() {
  return (<>
    <section className="Contactus-section">
      <article className="left-section">
        <h1 className="left-section-h1">Join our newsletter and get 20% off</h1>
        <p className="left-section-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
      </article>
      <article className="right-section">
        <input placeholder="Enter Email" type="email" className="input-box"></input>
        <button className="handle-input-box">
          <a href="">Subscribe</a>
        </button>
      </article>
    </section>
        <div className="footer">
          <Footer />
        </div>
        </>
  );
}

export default Contactus;
