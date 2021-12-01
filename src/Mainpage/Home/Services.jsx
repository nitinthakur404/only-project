import React from "react";
import Servicecard from "./Servicecard";
import "./services.css";
import { GiArcheryTarget,GiDiamondHard } from "react-icons/gi";
import {MdDescription} from 'react-icons/md'
// import {GiDiamondHard} from 'react-icons'
function Services() {
  return (
    <section className="service-Container-main">
      <article className="service-Heading-Message">
        <div className="service-Heading">
          <h1>
            Custom Furniture <br /> Built Only For You
          </h1>
        </div>
        <div className="service-Message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
      </article>
      <article className="Service-Cards">
        <Servicecard
          icons={<GiArcheryTarget />}
          heading={"Mission"}
          data={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
          }
        />
        <Servicecard
          icons={<GiDiamondHard />}
          heading={"Vision"}
          data={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
          }
        />
        <Servicecard
          icons={<MdDescription/>}
          heading={"History"}
          data={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
          }
        />  
      </article>
    </section>
  );
}

export default Services;
