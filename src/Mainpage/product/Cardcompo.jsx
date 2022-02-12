import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import './Cardcompo.css'
// import CompleterDetails from "./CompleterDetails";
import Data from '../Data'


const cardSearchFilters = (value, inputgetdata) => {
  const searchItem = value.filter((item) => {
    if (inputgetdata == undefined) {
      return item
    }
    else if (item.name.toLowerCase().includes(inputgetdata.toLowerCase())) {
      return item
    }
  })

  if (searchItem.length == 0) {
    return <h4  >sorry record not found</h4>
  }

  else {
    return (
      <>
        {
          searchItem.map((item, index) => {
            return (
              <div key={item.id}>
                <section className="container-card">
                  <article className="secondDetailspage">
                    <button className="hoverbutton" type="button" onClick={() => {

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
                    <h4 className="pricedetils">${(item.price).toLocaleString('en-IN')}</h4>
                  </div>
                </section>
              </div>
            )
          })
        }
      </>
    )
  }


}


function Cardcompo(props) {

  if (props.value == undefined || props.value.length == 0) {

    return <>
      <h4> sorry record not found</h4>
    </>
  }
  else {
    return <>
      {cardSearchFilters(props.value, props.inputgetdata)}
    </>
  }

}

export default Cardcompo;
