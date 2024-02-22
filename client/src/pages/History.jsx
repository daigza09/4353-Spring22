import { Link } from "react-router-dom";
import React, { useState } from "react";
import Data from "../assets/data.json";

function History() {
  const [data, setData] = useState(Data);
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
              <th className="py-2 px-5 text-lg text-black">Delivery Date</th>
              <th className="py-2 px-5 text-lg text-black">Amount</th>
              <th className="py-2 px-5 text-lg text-black">Item</th>
              <th className="py-2 px-5 text-lg text-black">
                Gallons Requested
              </th>
              <th className="py-2 px-5 text-lg text-black">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {data.map((current, index) => (
              <tr
                key={index}
                className="border-solid border-2 border-gray bg-white text-left hover:bg-gray-100 dark:hover:bg-gray-200"
              >
                <td className="py-4 px-5 text-lg text-black">
                  {current.DeliveryDate}
                </td>
                <td className="py-4 px-5 text-lg text-black">
                  ${current.Amount}
                </td>
                <td className="py-4 px-5 text-lg text-black">{current.Item}</td>
                <td className="py-4 px-5 text-lg text-black">
                  {current.GallonsRequested}
                </td>
                <td
                  className="py-4 px-5 mt-3 text-lg text-black relative"
                  style={{
                    backgroundColor:
                      current.Transaction === "Completed"
                        ? "#18C964"
                        : current.Transaction === "Failed"
                        ? "#f58493"
                        : "transparent",
                    color:
                      current.Transaction === "Completed"
                        ? "#12A150"
                        : current.Transaction === "Failed"
                        ? "#F31260"
                        : "inherit",
                    border: `2px solid ${
                      current.Transaction === "Completed"
                        ? "#18C964"
                        : "#f58493"
                    }`,
                    borderRadius: "9999px",
                    width: "100px", // Adjust the width of the oval as needed
                    height: "20px", // Adjust the height of the oval as needed
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {current.Transaction}
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
