import { Link } from "react-router-dom";
import React, { useState } from "react";
import Data from "../assets/data.json";

function History() {
  const [data, setData] = useState(Data);
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default History;
