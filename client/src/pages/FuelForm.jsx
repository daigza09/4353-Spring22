import React, { useState } from "react";

function FuelForm() {
    const [gasLocation, setGasLocation] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [numGallons, setNumGallons] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [pricePerGallon, setPricePerGallon] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');

    const handleGasLocationChange = (e) => {
        setGasLocation(e.target.value);
    };
    const handleFuelTypeChange = (e) => {
        setFuelType(e.target.value);

        if(e.target.value ==='Diesel'){
            setPricePerGallon('3.14');
        } else if(e.target.value ==='Gasoline'){
            setPricePerGallon('2.79');
        } else{
            setPricePerGallon('');
        }
    };
    const handleNumGallonsChange = (e) => {
        setNumGallons(e.target.value);
    };
    const handlePurchaseDateChange = (e) => {
        setPurchaseDate(e.target.value);
    };
    const handleDeliveryDateChange = (e) => {
        setDeliveryDate(e.target.value);
    };
    const handleDeliveryAddressChange = (e) => {
        setDeliveryAddress(e.target.value);
    };

    return (
    <main className="flex flex-col items-center justify-center h-screen bg-cover">
        <div className="flex flex-col items-left">
            <label htmlFor="gasLocation">Gas Location:</label>
            <select
                id="gasLocation"
                value={gasLocation}
                onChange={handleGasLocationChange}
                style={{ borderRadius: '8px', padding: '8px', height: '40px', color: 'black', width: '200px' }}
            >
                <option value="01-TX">01-TX</option>
                <option value="02-FL">02-FL</option>
                <option value="03-NY">03-NY</option>
                {/* Add more options as needed */}
            </select>
        </div>
        <div className="flex flex-col items-left">
            <label htmlFor="fuelType">Fuel Type:</label>
            <select
                id="fuelType"
                value={fuelType}
                onChange={handleFuelTypeChange}
                style={{ borderRadius: '8px', padding: '8px', height: '40px', color: 'black', width: '200px' }}
            >
                <option value="Diesel">Diesel</option>
                <option value="Gasoline">Gasoline</option>
                {/* Add more options as needed */}
            </select>
        </div>
        <div className="flex flex-col items-left">
            <label htmlFor="numGallons"> Number of Gallons</label>
            <input
                type="number"
                id="numGallons"
                value={numGallons}
                onChange={handleNumGallonsChange}
                step="0.1" // Allows increments of 0.1 (decimal)
                style={{ borderRadius: '8px', padding: '8px', height: '40px', color: 'black', width: '200px' }}
            />
        </div>
        <div className="flex flex-col items-left">
            <label htmlFor="pricePerGallon"> Price Per Gallon</label>
            <input
                type="text"
                id="pricePerGallon"
                value={pricePerGallon}
                readOnly
                style={{ borderRadius: '8px', padding: '8px', height: '40px', color: 'black', width: '200px' }}
            />
        </div>
        <div className="flex flex-col items-left">
            <label htmlFor="purchaseDate">Purchase Date:</label>
            <input
                type="date"
                id="purchaseDate"
                value={purchaseDate}
                onChange={handlePurchaseDateChange}
                style={{ borderRadius: '8px', padding: '8px', height: '40px', color: 'black', width: '200px' }}
            />
        </div>
        <div className="flex flex-col items-left">
            <label htmlFor="deliveryDate">Delivery Date:</label>
            <input
                type="date"
                id="deliveryDate"
                value={deliveryDate}
                onChange={handleDeliveryDateChange}
                style={{ borderRadius: '8px', padding: '8px', height: '40px', color: 'black', width: '200px' }}
            />
        </div>
        <div className="flex flex-col items-left">
            <label htmlFor="deliveryAddress">Delivery Address:</label>
            <input
                type="text"
                id="deliveryAddress"
                value={deliveryAddress}
                onChange={handleDeliveryAddressChange}
                style={{ borderRadius: '8px', padding: '8px', height: '40px', color: 'black', width: '200px' }}
            />
        </div>
        <div className="flex flex-col items-left">Total</div>
        <div>Order Button</div>
    </main>
  );
}

export default FuelForm;
