import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const LineChartInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://blooming-eyrie-86596.herokuapp.com/product")
      .then((data) => setData(data.data));
  }, []);
  return (
    <LineChart width={600} height={400} data={data}>
      <Line
        type="monotone"
        dataKey="quantity"
        stroke="#8884d8"
        strokeWidth={2}
      />
      <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} />
      <XAxis dataKey="month"></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </LineChart>
  );
};

export default LineChartInfo;
