import { Link } from "react-router-dom";
import React, { useState } from "react";
function FuelForm(){
    const [gasLocation, setGasLocation] = useState('');

    const handleGasLocationChange = (e) => {
        setGasLocation(e.target.value);
    };
    return(
        <main className="flex flex-col items-center justify-center h-screen bg-cover">
            <div className = "flex flex-col items-left">
            <label htmlFor="gasLocation">Gas Location:</label>
            <input
                type="text"
                id="gasLocation"
                value={gasLocation}
                onChange={handleGasLocationChange}
            />
            </div>
            <div>Fuel Type</div>
            <div>Number of Gallons</div>
            <div>Purchase Date</div>
            <div>Delivery Address</div>
            <div>Delivery Date</div>
            <div>Price Per Gallon</div>
            <div>Total</div>
            <div>Order Button</div>
        </main>
    );
}
export default FuelForm;