import React, { useState } from "react";
import Data from "../Data";

function Card1() {
  const [items, setitems] = useState(Data);
  return (
    <div className="container-card">
      <img
        src="./image/data/AccentChair.jpg"
        className="card-container-image"
        alt="blank"
      />
    </div>
  );
}

export default Card1;
