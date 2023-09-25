import React, { useState } from "react";
import "./Material.css";
import { Imaterials } from "../../Materials/Materials";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { formatCurrency } from "../../../uitilities/formatCurrency";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
interface PropTypes {
  material: Imaterials;
}

const Material: React.FC<PropTypes> = ({ material }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItems,
  } = useShoppingCart();
  const quantity = getItemQuantity(material._id);
  return (
    <>
      <Card className="materials-card" style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={material.img} />
        <Card.Body>
          <Card.Title>{material.materialName}</Card.Title>
          <Row>
            <Col>
              <h5 className="price">{formatCurrency(material.price)}</h5>
            </Col>
          </Row>
          <div>
            {quantity === 0 ? (
              <Button
                className="mt-2"
                onClick={() => increaseCartQuantity(material._id)}>
                Add To Cart
              </Button>
            ) : (
              <div>
                <div className="product-quantity">
                  <div>
                    <Button onClick={() => decreaseCartQuantity(material._id)}>
                      -
                    </Button>
                  </div>
                  <div>
                    <span className="quan">{quantity} in Cart</span>
                  </div>
                  <div>
                    <Button onClick={() => increaseCartQuantity(material._id)}>
                      +
                    </Button>
                  </div>
                </div>
                <div className="remove" style={{ gap: ".5rem" }}>
                  <Button
                    variant="danger"
                    onClick={() => removeItems(material._id)}>
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Material;
