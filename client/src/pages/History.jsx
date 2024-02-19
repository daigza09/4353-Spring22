import { Link } from "react-router-dom";
import React, { useState } from "react";
import Data from "../assets/data.json";

function History() {
  const [data, setData] = useState(Data);
  return (
    <main>
      <h1>Testing page</h1>
      <div className="flex items-center justify-center">
        <table className="w-11/12 border-collapse">
          <thead className="border-solid border-2 border-gray bg-white text-left">
            <th className="py-2 px-5 text-lg">Delivery Date</th>
            <th className="py-2 px-5 text-lg">Amount</th>
            <th className="py-2 px-5 text-lg">Item</th>
            <th className="py-2 px-5 text-lg">Gallons Requested</th>
          </thead>
          <tbody>
            {data.map((current) => (
              <tr className="border-solid border-2 border-gray bg-white text-left">
                <td className="py-4 px-5 text-lg">{current.DeliveryDate}</td>
                <td className="py-4 px-5 text-lg">${current.Amount}</td>
                <td className="py-4 px-5 text-lg">{current.Item}</td>
                <td className="py-4 px-5 text-lg">
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
