import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Data from "../assets/data.json";
import axios from "axios";

function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("http://localhost:8080/history/");
        if (Array.isArray(response.data)) {
          setData(response.data); // Setting data to response data from the backend
          console.log(response.data);
          console.log("Data fetched successfully");
        } else {
          console.error("Data received from backend is not an array:");
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching history:", error);
        console.log("Full response from backend:", error.response); // Log full response
      }
    };

    fetchHistory(); // Call fetchHistory when the component mounts
  }, []);

  return (
    <main>
      <h1
        className="text-3xl relative left-24 top-12 font-SemiBold"
        style={{ fontFamily: "Barlow, SemiBold" }}
      >
        History of past purchases
      </h1>
      <div className="flex items-center justify-center mt-20">
        <table className="w-11/12 border-collapse">
          <thead className="border-solid border-2 border-gray bg-white text-left">
            <tr>
              <th className="py-2 px-5 text-lg text-black">Purchase Date</th>
              <th className="py-2 px-5 text-lg text-black">Email</th>
              <th className="py-2 px-5 text-lg text-black">Amount</th>
              <th className="py-2 px-5 text-lg text-black">Item</th>
              <th className="py-2 px-5 text-lg text-black">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {data.map((current, index) => (
              <tr
                key={index}
                className="border-solid border-2 border-gray bg-white text-left hover:bg-gray-100 dark:hover:bg-gray-200"
              >
                <td className="py-4 px-5 text-lg text-black">
                  {current.purchaseDate}
                </td>
                <td className="py-4 px-5 text-lg text-black">
                  {current.email}
                </td>
                <td className="py-4 px-5 text-lg text-black">
                  {current.numGallons} gallons
                </td>
                <td className="py-4 px-5 text-lg text-black">
                  {current.fuelType}
                </td>
                <td className="py-4 px-5 text-lg text-black">
                  ${current.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default History;
