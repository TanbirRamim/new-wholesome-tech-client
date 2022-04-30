import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";

const Item = ({ props }) => {
  const { name, image } = props.item;
  //_id, name, image, short description, price, quantity, supplier name
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h1>desh desh</h1>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
