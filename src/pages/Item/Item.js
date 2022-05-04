import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    image,
    short_description,
    price,
    quantity,
    supplier_name,
  } = item;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {short_description}
            <br />
            price: {price}
            <br />
            quantity: {quantity}
            <br />
            supplier name: {supplier_name}
          </Card.Text>
          <Button
            onClick={() => navigate(`/cardDetails/${_id}`)}
            variant="primary"
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
