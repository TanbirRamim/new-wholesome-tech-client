import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ cards }) => {
  const {
    _id,
    name,
    image,
    short_description,
    price,
    quantity,
    supplier_name,
  } = cards;
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            blablabla
            {/* {short_description.length < 30
              ? short_description
              : short_description.slice(0, 80) + "..."} */}
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Cards;
