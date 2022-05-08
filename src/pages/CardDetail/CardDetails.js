import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useCardDetails from "../useCardDetails/useCardDetails";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useCardDetails(id);
  const handleDelivered = async () => {
    let deliver = 1;
    let quantityParse = parseInt(card.quantity);
    let quantity = quantityParse - deliver;
    const cardInfo = {
      supplier: card.supplier_name,
      price: card.price,
      description: card.short_description,
      image: card.image,
      name: card.name,
      quantity: quantity,
    };
    const url = `http://localhost:5000/cardDetails/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(cardInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCard(cardInfo);
      });
  };

  return (
    <Card className="bg-dark text-white container card-manage d-flex  align-items-center flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row">
      <Card.Img className="img-pack " src={card.image} alt="Card image" />
      <div className="p-2">
        <Card.Title className="mt-2">{card.name}</Card.Title>
        <br />
        <Card.Text>{card.short_description}</Card.Text>
        <Card.Text>
          <h5>id: {id}</h5>
        </Card.Text>
        <Card.Text>
          <h5> price: {card.price}</h5>
        </Card.Text>
        <Card.Text>
          <h5>supplier: {card.supplier_name}</h5>
        </Card.Text>
        <Card.Text>
          <h5>Quantity: {card.quantity}</h5>
        </Card.Text>
        <Card.Text>
          <h5>Sold: {card.sold ? card.sold : "NO"}</h5>
        </Card.Text>
        <Button onClick={handleDelivered} variant="outline-secondary">
          Delivered
        </Button>
        <br />
        <br />
        <div className="input-group  mb-3">
          <input
            required
            type="number"
            className="form-control custom-input-size"
            placeholder="Positive number only"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Restock
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardDetails;
