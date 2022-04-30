import React from "react";

import Banner from "./banner.webp";

const Home = () => {
  return (
    <div className="m-5 d-flex align-items-center justify-content-evenly mx-auto">
      <div>
        <h1>Wholesome Tech</h1> <br />
        <h3> your </h3>
      </div>
      <div>
        <img className="img-fluid w-100% h-auto" src={Banner} alt="" />
      </div>
    </div>
  );
};

export default Home;
