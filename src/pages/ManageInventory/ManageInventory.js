import React from "react";
import useItems from "../UseItems/UseItems";
import { useTable } from "react-table";

const ManageInventory = () => {
  const [items] = useItems();
  return (
    <div
      className="w-50 mx-auto  
     "
    >
      {items.map((item) => (
        <div key={item._id}>
          <h6>Product: {item.name}</h6>
          <h6> Id: {item._id}</h6>
          <h6>Quantity:{item.quantity}</h6>
          <h6></h6>
        </div>
      ))}
    </div>
  );
};

export default ManageInventory;
