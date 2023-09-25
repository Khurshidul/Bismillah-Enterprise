import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";
interface PropTypes {
  work: any;
}

const Product: React.FC<PropTypes> = ({ work }) => {
  const { image, work_title, team, description } = work;
  return (
    <Card
      className="project-card"
      style={{ width: "18rem", backgroundColor: "rgba(100, 148, 237, 0.591)" }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{work_title}</Card.Title>
        <h6>{team}</h6>
        <Card.Text className="description">{description}</Card.Text>
        <Button variant="outline-light">See More...</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
