import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const navigateToDetail = (id) => {
    navigate(`/cardDetails/${id}`);
  };
  const {
    _id,
    name,
    image,
    short_description,
    price,
    quantity,
    supplier_name,
  } = item;
  // fluid  g-5 col-sm-12 col-md-6 col-lg-4
  return (
    <div className=" container   ">
      <Card className="  " style={{ width: "18rem" }}>
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
          <Button onClick={() => navigateToDetail(_id)} variant="primary">
            Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
