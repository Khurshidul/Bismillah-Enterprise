import React, { useRef, useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useQuery } from "react-query";
import fetchData from "../FetchData/fetchData";
import { Imaterials } from "../Materials/Materials";
import { formatCurrency } from "../../uitilities/formatCurrency";
import { Button, Stack } from "react-bootstrap";

interface PropTypes {
  id: string;
  quantity: number;
}

const CartItem: React.FC<PropTypes> = ({ id, quantity }) => {
  const { data } = useQuery("materials", () =>
    fetchData("http://localhost:5000/materials"),
  );
  const { removeItems } = useShoppingCart();
  const item = data.find((i: Imaterials) => i._id === id);
  if (item == null) return null;

  return (
    <div>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center">
        <img
          src={item.img}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.materialName}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeItems(item._id)}>
          &times;
        </Button>
      </Stack>
    </div>
  );
};

export default CartItem;
