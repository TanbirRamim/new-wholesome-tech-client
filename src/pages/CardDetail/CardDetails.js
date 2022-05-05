import React, { useEffect, useState } from "react";

// import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import Cards from "../Cards/Cards";
import useCardDetails from "../useCardDetails/useCardDetails";

const CardDetails = () => {
  const { id } = useParams();
  const [card] = useCardDetails(id);
  // const cardId = card.id;
  // console.log(cardId);
  // console.log(card);
  // card.filter(c=>c._id==id)
  return (
    <div className="container">
      <h2>id: {id}</h2>
      {/* {
        card.filter(card=> card.id==id
      } */}
    </div>
  );
};

export default CardDetails;
