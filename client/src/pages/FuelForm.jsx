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
        <main className="relative h-screen bg-cover">
            <div className="container mx-auto text-center relative flex items-center justify-center h-screen">
            <div className="py-14 px-40  max-h-full overflow-y-auto">
                <h1 className = "text-3xl md:text-3xl mb-4"> Fuel Quote Order Form</h1>
                <h2 className = "text-xl md:text-1xl mb-4">Caption</h2>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="gasLocation">Gas Location:</label>
                    <select
                        id="gasLocation"
                        value={gasLocation}
                        onChange={handleGasLocationChange}
                        className="rounded-md p-2 h-10 text-black w-48"
                    >
                        <option value="01-TX">01-TX</option>
                        <option value="02-FL">02-FL</option>
                        <option value="03-NY">03-NY</option>
                    </select>
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="fuelType">Fuel Type:</label>
                    <select
                        id="fuelType"
                        value={fuelType}
                        onChange={handleFuelTypeChange}
                        className="rounded-md p-2 h-10 text-black w-48"
                    >
                   <option value="Diesel">Diesel</option>
                   <option value="Gasoline">Gasoline</option>
                   </select>
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="numGallons"> Number of Gallons:</label>
                        <input
                            type="number"
                            id="numGallons"
                            value={numGallons}
                            onChange={handleNumGallonsChange}
                            step="0.1"
                            placeholder="0.00"
                            className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="pricePerGallon"> Price Per Gallon:</label>
                        <input
                            type="text"
                            id="pricePerGallon"
                            value={pricePerGallon}
                            placeholder="0.00"
                            readOnly
                            className="rounded-md p-2 h-10 text-black w-48"
                        />
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="purchaseDate">Purchase Date:</label>
                        <input
                            type="date"
                            id="purchaseDate"
                           value={purchaseDate}
                           onChange={handlePurchaseDateChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="deliveryDate">Delivery Date:</label>
                        <input
                            type="date"
                            id="deliveryDate"
                            value={deliveryDate}
                            onChange={handleDeliveryDateChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label  className = "text-xl mb-2" htmlFor="deliveryAddress">Delivery Address:</label>
                        <input
                            type="text"
                            id="deliveryAddress"
                            placeholder="Street, City, State, ZIP"
                            value={deliveryAddress}
                            onChange={handleDeliveryAddressChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                        />

                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="total">Total:</label>
                        <input
                            type="text"
                            id="total"
                            value={total}
                            readOnly
                            className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
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
                        marginTop: '20px',
                    }}
                >
                    Order
                </button>
                </div>
                </div>
            </div>
            </main>
    );
}

export default FuelForm;