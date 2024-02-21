import React, { useState, useEffect } from "react";

function FuelForm() {
    const [formData, setFormData] = useState({
        gasLocation: '',
        fuelType: '',
        numGallons: '',
        purchaseDate: '',
        pricePerGallon: '',
        deliveryDate: '',
        deliveryAddress: '',
        total: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFuelTypeChange = (e) => {
        const selectedFuelType = e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            fuelType: selectedFuelType,
            pricePerGallon: getInitialPricePerGallon(selectedFuelType),
        }));
    };

    const getInitialPricePerGallon = (fuelType) => {
        switch (fuelType) {
            case 'Diesel':
                return '3.14';
            case 'Gasoline':
                return '2.79';
            default:
                return '';
        }
    };

    const handleTotalChange = () => {
        const parsedNumGallons = parseFloat(formData.numGallons);
        const parsedPricePerGallon = parseFloat(formData.pricePerGallon);

        if (isNaN(parsedNumGallons) || isNaN(parsedPricePerGallon)) {
            setFormData((prevData) => ({
                ...prevData,
                total: '0.00',
            }));
        } else {
            const calculatedTotal = parsedNumGallons * parsedPricePerGallon;
            setFormData((prevData) => ({
                ...prevData,
                total: calculatedTotal.toFixed(2),
            }));
        }
    };

    useEffect(() => {
        handleTotalChange(); // Automatically update total when numGallons or pricePerGallon changes
    }, [formData.numGallons, formData.pricePerGallon]);

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
                        value={formData.gasLocation}
                        onChange={handleChange}
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
                        value={formData.fuelType}
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
                            value={formData.numGallons}
                            onChange={handleChange}
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
                            value={formData.pricePerGallon}
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
                           value={formData.purchaseDate}
                           onChange={handleChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="deliveryDate">Delivery Date:</label>
                        <input
                            type="date"
                            id="deliveryDate"
                            value={formData.deliveryDate}
                            onChange={handleChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                    />
                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label  className = "text-xl mb-2" htmlFor="deliveryAddress">Delivery Address:</label>
                        <input
                            type="text"
                            id="deliveryAddress"
                            placeholder="Street, City, State, ZIP"
                            value={formData.deliveryAddress}
                            onChange={handleChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                        />

                </div>
                <div className="container text-center relative flex flex-col items-center justify-center">
                    <label className = "text-xl mb-2" htmlFor="total">Total:</label>
                        <input
                            type="text"
                            id="total"
                            value={formData.total}
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