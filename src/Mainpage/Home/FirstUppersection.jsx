import React from "react";
import "./firstUppersection.css";

function FirstUppersection() {
  return (
    <section className="first_container_main">
      <article className="container_first">
        <h1 className="container_first_heading">
          Design Your <br />
          Comfort Zone
        </h1>
        <p className="container_first_para"> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
        <button  className='container_first_button'>
        <a href='../product'>Shop Now</a></button>
      </article> 

      <article className="container_second">
      <img className="First_container_img" src="./image/chair.png" alt="logoimg"></img>
    <div className="back_Square"></div>
       </article>
    </section>
  );

}
export default FirstUppersection;
