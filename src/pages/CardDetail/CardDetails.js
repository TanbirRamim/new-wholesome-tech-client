import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/cardDetails/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.item));
  }, [id]);

  return (
    <div>
      <h1>id: {id}</h1>
    </div>
  );
};

export default CardDetails;
