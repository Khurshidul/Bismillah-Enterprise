import React from "react";
import "./Opportunities.css";
import { Image } from "react-bootstrap";
import opportunities from "../../images/works/opp.png";
interface PropTypes {}

const Opportunities: React.FC<PropTypes> = () => {
  return (
    <div className="container opp">
      <h1>Your Opportunities</h1>
      <Image className="opp-img" src={opportunities} fluid/>
    </div>
  );
};

export default Opportunities;
