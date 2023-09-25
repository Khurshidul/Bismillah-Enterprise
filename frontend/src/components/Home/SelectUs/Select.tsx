import React from "react";
import "./Select.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
interface PropTypes {}

const Select: React.FC<PropTypes> = () => {
  return (
    <div className="select">
      <h1>Why Choose us</h1>
      <div className="select-us">
        <div className="query">
          <FontAwesomeIcon className="select-icons" icon={faHandshake} />
          <br />
          <h4>Commitment</h4>
          <p>
            Customer satisfaction is very important to us. We believe that
            trust, honesty, and communication are key to building long-life
            relationship. We are sincerely focused on building long-term
            relationships with every client.
          </p>
        </div>
        <div className="query">
          <FontAwesomeIcon className="select-icons" icon={faThumbsUp} />
          <br />
          <h4>BEST QUALITY</h4>
          <p>
            Customer satisfaction is very important to us. We believe that
            trust, honesty, and communication are key to building long-life
            relationship. We are sincerely focused on building long-term
            relationships with every client.
          </p>
        </div>
        <div className="query">
          <FontAwesomeIcon className="select-icons" icon={faPersonBiking} />
          <br />
          <h4>SERVICES</h4>
          <p>
            Customer satisfaction is very important to us. We believe that
            trust, honesty, and communication are key to building long-life
            relationship. We are sincerely focused on building long-term
            relationships with every client.
          </p>
        </div>
        <div className="query">
          <FontAwesomeIcon className="select-icons" icon={faCrosshairs} />
          <br />
          <h4>VISION</h4>
          <p>
            Customer satisfaction is very important to us. We believe that
            trust, honesty, and communication are key to building long-life
            relationship. We are sincerely focused on building long-term
            relationships with every client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Select;
