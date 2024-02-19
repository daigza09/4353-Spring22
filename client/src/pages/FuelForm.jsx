import { Link } from "react-router-dom";
import React, { useState } from "react";
function FuelForm(){
    return(
        <main className = "relative h-screen bg-cover">
            <div>Gas Location</div>
            <div>Fuel Type</div>
            <div>Number of Gallons</div>
            <div>Purchase Date</div>
            <div>Delivery Address</div>
            <div>Delivery Date</div>
            <div>Price Per Gallon</div>
            <div>Total</div>
            <div></div>
        </main>
    );
}
export default FuelForm;