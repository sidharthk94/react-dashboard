import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as CharthJS} from "chart.js/auto"
import "./PieChart.css"

const PieChart = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor:[]
      },
    ],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/pie-chart");
        console.log(response.data, "mmmmmmmmmm");
        setData(response.data);

        setChartData({
          labels: response.data.map((values) => values?.label),
          datasets: [
            {
              label: "",
              data: response.data.map((values) => values?.value),
              backgroundColor:[
                "#98ff98",
                "#a9ffa9",
                "#b8f8b8",
                "#c9f6c9",
                "#c9f6c9b9"
              ]
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
    <div className='pieChart'>
      <Pie data={chartData} />
    </div>
  );
};

export default  PieChart;
