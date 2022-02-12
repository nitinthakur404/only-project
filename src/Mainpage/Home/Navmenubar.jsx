import React from "react";
import { Link } from "react-router-dom";
import "./Navmenucss.css";
import { BsFillCartFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";



function Navmenubar() {
  let addvalue = 0
  if (JSON.parse(localStorage.getItem('cart')) != null) {
    const getdata = JSON.parse(localStorage.getItem('cart'))
    // const noOfcartItem = 
    getdata.map((item) => {
      return addvalue = addvalue + item.nocartitem
    })
  }

  return (
    <div className="main-container">
      <div className="logo-img">
        <Link to="../">
          <img src="../image/logoimg1.png" alt="img"></img>
        </Link>
      </div>
      <div className="Menu-options">
        <Link className=".Menu-options-ul" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/Product">Products</Link>
      </div>

      <div className="cartshow-loginshow-section">
        <Link to='/cart'>
          <button className="cartshow-section">
            <p className="para">cart</p>
            <BsFillCartFill size="24px" />
            <div className="cartitamshow">{addvalue}</div>
          </button>
        </Link>

        <button className="login-section">
          <p className="para">login</p>
          <RiAccountCircleFill size="35px" />
        </button>
      </div>
    </div>

  );
}
export default Navmenubar;
