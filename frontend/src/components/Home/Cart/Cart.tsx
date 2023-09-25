import React from "react";
import "./Cart.css";
import { Col, Image, Row } from "react-bootstrap";
import cart from "../../../images/banner/cart.png";
interface PropTypes {}

const Cart: React.FC<PropTypes> = () => {
  return (
    <Row className="row">
      <h1 className="why-should">In Short About Us</h1>
      <Col xs={10} sm={10} md={5} lg={5} className="mb-2 cart">
        <h3>Welcome To</h3>
        <h1>K & K Painting</h1>
        <p>
          Falcon Solution Ltd is a Green & Sustainable Solutions for Industrial,
          Commercial and Residential Flooring & Construction Chemicals Company.
          We are dealing with all types of Construction Chemicals like
          Waterproofing Solution, Floor Hardener, Fair Face Plaster, Epoxy Floor
          Chating and all types of Industrial, Commercial & Residential Flooring
          system like PU Flooring, Epoxy Flooring, Metallic Flooring,
          Self-leveling Epoxy Flooring, 3D epoxy Flooring, Vinyl Flooring,
          Polished Concrete etc. We genuinely care about our customers; our
          intention is to provide the highest level of service and the highest
          quality products and the best ever technical support in the industry.
          You count on the professionals at PU Flooring in Bangladesh, Epoxy
          Flooring in Bangladesh, Vinyl Flooring in Bangladesh, Polished
          Concrete in Bangladesh, Floor Hardener in Bangladesh, Waterproofing in
        </p>
      </Col>

      <Col xs={10} sm={10} md={6} lg={6} className="cart-img">
        <Image src={cart} fluid />
      </Col>
    </Row>
  );
};

export default Cart;
