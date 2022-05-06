import React, { useEffect, useState } from "react";

// import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
// import Cards from "../Cards/Cards";
// import useCardDetails from "../useCardDetails/useCardDetails";

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/cardDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, [id]);
  // const [card] = useCardDetails(id);
  // const cardId = card.id;
  // console.log(cardId);
  // console.log(card);
  // card.filter(c=>c._id==id)
  return (
    <div className="container">
      <h2>id: {id}</h2>
      <p>name: {card.item.name}</p>
      {/* {
        card.filter(card=> card.id==id
      } */}
    </div>
  );
};

export default CardDetails;
