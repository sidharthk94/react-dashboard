import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as CharthJS} from "chart.js/auto"
import "./LineChart.css"

const LineChart = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/graph");
        console.log(response.data, "kkkkkkkkkkkk");
        setData(response.data);

        setChartData({
          labels: response.data.map((values) => values?.x),
          datasets: [
            {
              label: "",
              data: response.data.map((values) => values?.y),
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    getData();
  }, []);

  return (
    <div className='lineChart'>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
