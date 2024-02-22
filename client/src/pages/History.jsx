import { Link } from "react-router-dom";
import React, { useState } from "react";
import Data from "../assets/data.json";

function History() {
  const [data, setData] = useState(Data);
  console.log(Data);
  return (
    <main>
      <div className="flex items-center justify-center">
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
                className="border-solid border-2 border-gray bg-white text-left"
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
                  className="py-4 px-5 text-lg text-black relative rounded-full"
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
