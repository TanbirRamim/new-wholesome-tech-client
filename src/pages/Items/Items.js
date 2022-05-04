import React from "react";

import Item from "../Item/Item";
import useItems from "../UseItems/UseItems";

const Items = () => {
  const [items] = useItems();

  return (
    <div className="container">
      {items.map((item) => (
        <Item key={item._id} item={item}></Item>
      ))}
    </div>
  );
};

export default Items;
