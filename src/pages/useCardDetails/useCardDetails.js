import { useEffect, useState } from "react";

const useCardDetails = (id) => {
  const [card, setCard] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/cardDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setCard(data.item));
  }, [id]);
  return [card];
};
export default useCardDetails;
