import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://blooming-eyrie-86596.herokuapp.com/product")
      .then((data) => setData(data.data));
  }, []);
  return (
    <BarChart
      className=""
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#8884d8" />
      <Bar dataKey="quantity" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartInfo;
