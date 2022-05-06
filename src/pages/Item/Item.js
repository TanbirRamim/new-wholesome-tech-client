import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Item/Item.css";

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
    <div className=" col d-flex justify-content-center  bg-black item-card  ">
      <Card className="  ">
        <Card.Img className="img-setup  mx-auto" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {short_description.length < 30
              ? short_description
              : short_description.slice(0, 80) + "..."}
            <br />
            price: {price}
            <br />
            quantity: {quantity}
            <br />
            supplier name: {supplier_name}
          </Card.Text>
          <Button onClick={() => navigateToDetail(_id)} variant="outline-dark">
            Manage
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
