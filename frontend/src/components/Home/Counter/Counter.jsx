import React, { useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faTruckRampBox } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [countON, setCountON] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountON(true)}
      onExit={() => setCountON(false)}>
      <div className="counter">
        <h3>
          <FontAwesomeIcon className="count-icons" icon={faListCheck} />
          {countON && <CountUp start={0} end={50} duration={3} delay={0} />}
          +
          <br />
          Complete Projects
        </h3>
        <h3>
          <FontAwesomeIcon className="count-icons" icon={faFaceSmile} />
          {countON && <CountUp start={0} end={20} duration={3} delay={0} />}
          +
          <br />
          Client In List
        </h3>
        <h3>
          <FontAwesomeIcon className="count-icons" icon={faHandshake} />
          {countON && <CountUp start={0} end={3} duration={3} delay={0} />}
          +
          <br />
          Year Of Experience
        </h3>
        <h3>
          <FontAwesomeIcon className="count-icons" icon={faTruckRampBox} />
          {countON && <CountUp start={0} end={85} duration={2} delay={0} />}
          %
          <br />
          On Time Delivery
        </h3>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
