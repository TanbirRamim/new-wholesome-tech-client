import React from "react";
import Item from "../Item/Item";
import Items from "../Items/Items";
import useItems from "../UseItems/UseItems";
import Typewriter from "typewriter-effect";

import Banner from "./banner.webp";

const Home = () => {
  const [items] = useItems();
  return (
    <div>
      <div className="m-5 d-flex align-items-center justify-content-evenly mx-auto">
        <div>
          <h1>Wholesome Tech</h1> <br />
          <h1 className="mt-10">
            <Typewriter
              options={{
                strings: [
                  " Your ultimate path",
                  " lifetime service",
                  " unlimited gadgets",
                  " quality products ",
                  " Trust is our thing",
                  " believe in us",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString()
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </h1>
        </div>
        <div>
          <img className="img-fluid w-100% h-auto" src={Banner} alt="" />
        </div>
      </div>

      <div className=" row d-flex justify-content-center ">
        {items.slice(0, 6).map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Home;
