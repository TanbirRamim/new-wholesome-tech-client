import React from "react";
import Item from "../Item/Item";
import Items from "../Items/Items";
import useItems from "../UseItems/UseItems";

import Banner from "./banner.webp";

const Home = () => {
  const [items] = useItems();
  return (
    <div>
      <div className="m-5 d-flex align-items-center justify-content-evenly mx-auto">
        <div>
          <h1>Wholesome Tech</h1> <br />
          <h3> your </h3>
        </div>
        <div>
          <img className="img-fluid w-100% h-auto" src={Banner} alt="" />
        </div>
      </div>

      <div className="container ">
        {items.slice(0, 6).map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Home;
