import React, { useState, useEffect } from "react";

function FuelForm() {
    const [gasLocation, setGasLocation] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [numGallons, setNumGallons] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [pricePerGallon, setPricePerGallon] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [total, setTotal] = useState('');

    const handleGasLocationChange = (e) => {
        setGasLocation(e.target.value);
    };
    const handleFuelTypeChange = (e) => {
        setFuelType(e.target.value);

        if (e.target.value === 'Diesel') {
            setPricePerGallon('3.14');
        } else if (e.target.value === 'Gasoline') {
            setPricePerGallon('2.79');
        } else {
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
    const handleTotalChange = () => {
        if (isNaN(parseFloat(numGallons)) || isNaN(parseFloat(pricePerGallon))) {
            setTotal('0.00');
        } else {
            const calculatedTotal = parseFloat(numGallons) * parseFloat(pricePerGallon);
            setTotal(calculatedTotal.toFixed(2));
        }
    };
    useEffect(() => {
        handleTotalChange(); // Automatically update total when numGallons or pricePerGallon changes
    }, [numGallons, pricePerGallon]);

    return (
        <div className="flex h-screen flex-col">
            {/* Left side */}
            <div className="flex-1 p-8">
                <div className="flex flex-col items-center">
                    <label htmlFor="gasLocation">Gas Location:</label>
                    <select
                        id="gasLocation"
                        value={gasLocation}
                        onChange={handleGasLocationChange}
                        className="rounded-md p-2 h-10 text-black w-48"
                    >
                        <option value="01-TX">01-TX</option>
                        <option value="02-FL">02-FL</option>
                        <option value="03-NY">03-NY</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="fuelType">Fuel Type:</label>
                    <select
                        id="fuelType"
                        value={fuelType}
                        onChange={handleFuelTypeChange}
                        className="rounded-md p-2 h-10 text-black w-48"
                    >
                        <option value="Diesel">Diesel</option>
                        <option value="Gasoline">Gasoline</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="numGallons"> Number of Gallons</label>
                    <input
                        type="number"
                        id="numGallons"
                        value={numGallons}
                        onChange={handleNumGallonsChange}
                        step="0.1"
                        className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="pricePerGallon"> Price Per Gallon</label>
                    <input
                        type="text"
                        id="pricePerGallon"
                        value={pricePerGallon}
                        readOnly
                        className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
            </div>
            {/* Right side */}
            <div className="flex-1 p-8">
                <div className="flex flex-col items-center">
                    <label htmlFor="purchaseDate">Purchase Date:</label>
                    <input
                        type="date"
                        id="purchaseDate"
                        value={purchaseDate}
                        onChange={handlePurchaseDateChange}
                        className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="deliveryDate">Delivery Date:</label>
                    <input
                        type="date"
                        id="deliveryDate"
                        value={deliveryDate}
                        onChange={handleDeliveryDateChange}
                        className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="deliveryAddress">Delivery Address:</label>
                    <input
                        type="text"
                        id="deliveryAddress"
                        value={deliveryAddress}
                        onChange={handleDeliveryAddressChange}
                        className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="flex flex-col items-center" style={{ marginBottom: '8px' }}>
                    <label htmlFor="total">Total:</label>
                    <input
                        type="text"
                        id="total"
                        value={total}
                        readOnly
                        className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
            </div>
            {/* Centered button beneath the two divs */}
            <div className="flex justify-center mt-4">
                <button
                    style={{
                        borderRadius: '8px',
                        padding: '12px',
                        height: '50px',
                        color: 'white',
                        backgroundColor: '#02353c',
                        border: 'none',
                        cursor: 'pointer',
                        width: '200px',
                    }}
                >
                    Order
                </button>
            </div>
        </div>
    );
}

export default FuelForm;
