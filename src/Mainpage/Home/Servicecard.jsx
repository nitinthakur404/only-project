import React from "react";
import { GiArcheryTarget } from "react-icons/gi";
function Servicecard(props) {
  console.log(props);
  const { icons, heading,data } = props;
  return (
    <section className="Service-card">
      <article className="Service-card-Icon">
        <div className="GiArcheryTarget">{icons}</div>
      </article>
      <div className="card-heading">
        <h1>{heading}</h1>
      </div>
      <div className="card-message">
        <p>{data}</p>
      </div>
    </section>
  );
}

export default Servicecard;
