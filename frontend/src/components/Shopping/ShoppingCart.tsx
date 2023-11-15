import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Offcanvas, Row, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../uitilities/formatCurrency";
import { useQuery } from "react-query";
import fetchData from "../FetchData/fetchData";
import { Imaterials } from "../Materials/Materials";
import CartItem from "./CartItem";

interface PropTypes {
  isOpen: boolean;
  cartItem: CarttItem;
}
type orderType = {
  customerName: string;
  address: string;
  email: string;
  phone: number;
};
const initialStateOrder = {
  customerName: "",
  address: "",
  email: "",
  phone: 0,
};
type CarttItem = {
  id: string;
  quantity: number;
};
const ShoppingCart: React.FC<PropTypes> = ({ isOpen, cartItem }) => {
  const { data } = useQuery("materials", () =>
    fetchData("https://bismillah-enterprise-zeta.vercel.app/materials"),
  );
  const { closeCart, items } = useShoppingCart();

  const item = data.find((i: Imaterials) => i._id === cartItem.id);

  const textInput = useRef<any>(null);
  const [order, setOrder] = useState<orderType>(initialStateOrder);

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setOrder({ ...order, [name]: value });
  };

  const handlePayment = () => {
    fetch("https://bismillah-enterprise-zeta.vercel.app/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        orderItems: [
          {
            id: cartItem.id,
            customerName: order.customerName,
            address: order.address,
            email: order.email,
            phone: order.phone,
            productName: item.materialName,
            price: item.price,
            quantity: cartItem.quantity,
          },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        console.log(url);
        window.location = url;
      })
      .catch((e) => {
        console.log(e.error);
      });
  };

  return (
    <Offcanvas  style={{overflow:"scroll"}} show={isOpen} onHide={closeCart} placement="end" height="100">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Feel Free To Shop</Offcanvas.Title>
      </Offcanvas.Header>
      <form onSubmit={handlePayment}>
        <Offcanvas.Body>
          <Stack gap={3}>
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                items.reduce((total, cartItem) => {
                  const item = data.find(
                    (item: Imaterials) => item._id === cartItem.id,
                  );
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0),
              )}
            </div>
          </Stack>
          <br />
          <br />
          <div className="container">
            <Row>
              <h5>Order Your Needs</h5>

              <Col>
                <div className="form-group">
                  <label htmlFor="customerName">Customer Name:</label>
                  <input
                    type="text"
                    id="customerName"
                    className="form-control"
                    name="customerName"
                    value={order.customerName}
                    ref={textInput}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    name="address"
                    value={order.address}
                    ref={textInput}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={order.email}
                    ref={textInput}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    name="phone"
                    value={order.phone}
                    ref={textInput}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Col>
            </Row>
          </div>
          <Button onClick={() => handlePayment()}>Confirm Order</Button>
        </Offcanvas.Body>
      </form>
    </Offcanvas>
  );
};

export default ShoppingCart;
