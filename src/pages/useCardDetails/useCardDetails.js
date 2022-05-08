import { useEffect, useState } from "react";

const useCardDetails = (id) => {
  const [card, setCard] = useState({});

  useEffect(() => {
    fetch(`https://blooming-eyrie-86596.herokuapp.com/cardDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setCard(data.item));
  }, [id]);
  return [card, setCard];
};
export default useCardDetails;
