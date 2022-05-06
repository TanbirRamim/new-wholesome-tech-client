import React from "react";
import Item from "../Item/Item";
import useItems from "../UseItems/UseItems";
import "../Items/Items.css";

const Items = () => {
  const [items] = useItems();

  return (
    <div
      className=" m-2  row justify-content-center
     "
    >
      {items.map((item) => (
        <Item key={item._id} item={item}></Item>
      ))}
    </div>
  );
};

export default Items;
