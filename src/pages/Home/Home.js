import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import useItems from "../UseItems/UseItems";
import Typewriter from "typewriter-effect";

import Banner from "./banner.webp";
import { Button, NavLink } from "react-bootstrap";
import Loading from "../Authentication/Loading/Loading";
import CountUpSection from "../CountUp/CountUpSection";
import BarChartInfo from "../BarChart/BarChartInfo";
import LineChartInfo from "../LineChartInfo/LineChartInfo";

const Home = () => {
  const [items] = useItems();
  if (items == 0) {
    <Loading></Loading>;
  }
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
      <div className="mt-4 mb-5">
        <NavLink to="/manageInventory">
          <Button variant="outline-dark"> Manage Inventories</Button>
        </NavLink>
      </div>
      <div className="container d-flex justify-evenly flex-sm-column flex-md-column flex-lg-row">
        <BarChartInfo></BarChartInfo>
        <LineChartInfo></LineChartInfo>
      </div>
      <div className="container">
        <CountUpSection></CountUpSection>
      </div>
    </div>
  );
};

export default Home;
