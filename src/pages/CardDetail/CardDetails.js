import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  // const [card, setCard] = useState({});
  // const { _id, name, price } = card
  useEffect(() => {
    fetch(`http://localhost:5000/cardDetails/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.item));
  }, [id]);

  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src="#" alt="Card image" />
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

export default CardDetails;
