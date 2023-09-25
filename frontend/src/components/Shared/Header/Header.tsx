import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import vr from "../../../images/logo.png";
import useFirebase, { auth } from "../../../hooks/useFirebase";
import "./Header.css";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
interface PropTypes {}
const Header: React.FC<PropTypes> = () => {
  let time = new Date().toLocaleTimeString();
  const [bdTime, setBdTime] = useState<any>(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setBdTime(time);
  };
  setInterval(updateTime, 1000);
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Row className="top-nav-part pt-2">
      <Col lg={11} md={11} xs={9} sm={9} className="nav-menu">
        <Nav.Link as={Link} to="/">
          <img id="logo" src={vr} alt="" />
        </Nav.Link>
        <Navbar.Brand id="brand" href="/">
          K & K <span>Painting</span>
        </Navbar.Brand>
      </Col>
      {cartQuantity > 0 && (
        <Col lg={1} md={1} xs={3} sm={3}>
          <button className="circle" onClick={openCart}>
            <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
          </button>
          <div className="count-shoppings">
            <small>{cartQuantity}</small>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default Header;
