import React from "react";
import Navmenubar from "./Navmenubar";
import FirstUppersection from "./FirstUppersection";
import FeaturedProduct from "./FeaturedProduct";
import Services from "./Services";
import Contactus from './Contactus'
// import {} from '../product/Product'

function Home() {
  return (
    <div>

      <Navmenubar />
      <FirstUppersection />
      <FeaturedProduct />
      <Services />
      <Contactus />
    </div>
  );
}

export default Home;
