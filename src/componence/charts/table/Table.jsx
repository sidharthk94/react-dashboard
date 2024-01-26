import React, { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/api/table");
      console.log(response.data, "ooooooooooooo");
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="tableMain">
      <table className="table">
        <thead>
          <tr>
            <th className="id" style={{height:"5px"}}>Id</th>
            <th className="name" style={{height:"5px"}}>Name</th>
            <th className="quantity" style={{height:"5px"}}>Quantity</th>
            <th className="price" style={{height:"5px"}}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((value,index) => (
            <tr key={index}>
              <td className="id" style={{height:"5px"}}>{value.id}</td>
              <td className="name" style={{height:"5px"}}>{value.name}</td>
              <td  className="quantity" style={{height:"5px"}}>{value.quantity}</td>
              <td className="price" style={{height:"5px"}}>{value.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
