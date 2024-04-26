import React, { useState, useEffect } from "react";
import axios from "axios";

function FuelForm() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    /*const [priceData, setPriceData] = useState({
        state:'', 
        prevOrder: false
    });*/
    const [userData, setUserData] = useState({}); 
    const [formData, setFormData] = useState({
        email: '',
        gasLocation: '',
        fuelType: '', // Only one option should be selected, so it remains as a string
        numGallons: 0,
        purchaseDate: '',
        pricePerGallon: 0,
        deliveryDate: '',
        deliveryAddress: 'City, State',
        total: 0,
    });
    const checkLoggedIn = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                const res = await axios.get("http://localhost:8080/auth/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                if (res.status === 200) {
                    setIsLoggedIn(true);
                    setUserData(res.data); 
                    console.log("User is logged in");
                    console.log("User ID:", res.data.userId); 
                    console.log("User Email:", res.data.email);
                    setFormData({
                        ...formData,
                        email: res.data.email,
                    });
                    console.log("USER EMAIL: ", res.data.email);
                }
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error("Error checking login status:", error);
        }
    };
    const handleAddressChange = async () => {
        const { success, data } = await setAddressLine1();
        if (success) {
            setFormData({
                ...formData,
                deliveryAddress: data.dataAdd,
            });
        }
    };
    /*const handleStateChange = async () => {
        console.log(formData.email);
        try {
            const res = await axios.get("http://localhost:8080/fuelForm/userState", {
                params: {
                    email: formData.email,
                },
            });
            if (res.status != 201) {
                throw new Error("Unable to retrieve user state");
            }
            const data = await res.data.userState;
            console.log(data);
            setPriceData({
                ...priceData,
                state: data,
            });
        } catch (err) {
            console.error("Error fetching user state", err);
        }
    };
    const handlePrevOrderChange = async () => {
        console.log(formData.email);
        try {
            const res = await axios.get("http://localhost:8080/fuelForm/prevOrders", {
                params: {
                    email: formData.email,
                },
            });
            if (res.status === 200) { // Check for a successful response status
                const data = await res.data.hasOrdered;
                console.log(data);
                setPriceData({
                    ...priceData,
                    prevOrder: data,
                });
            } else {
                throw new Error("Unable to retrieve users previous orders");
            }
        } catch (err) {
            console.error("Error fetching users previous orders", err);
        }
    };*/
    const handlePricingChange = async () => {
          const {success, data} = await setPricingChanges();
          if(success){
            setFormData({
                ...total,
                ...pricePerGallon, 
                total: data.total,
                pricePerGallon: data.suggestedPPG,
            })
          }
    };

    async function setPricingChanges(){
        const userEmail = formData.email;
        const reqGal = formData.email;
        console.log("Testig :3", userEmail);
        console.log("Testing gal :3", reqGal);
        try{
            const res = await axios.get("http://localhost:8080/fuelForm/pricingModule", {
                params: {
                    email: userEmail, 
                    numGallons: reqGal
                }
            });
            console.log("RES STATUS :3", res.status);
            if(res.status != 200){
                throw new Error("Unable to retrieve user email");
            }
            const data = await res.data;
            console.log(data.total);
            console.log(data.suggestedPPG);
            return { success: true, data };
        }catch(err){
            console.error("Error fetching email", err);
            return { success: false, err };
        }
    }
    async function setAddressLine1(){
        const userEmail = formData.email;
        console.log('TESTING USER EMAIL:', userEmail);
        console.log("TESTING:   ", formData.email);
        try{
            const res = await axios.get("http://localhost:8080/fuelForm/getAddress", {
                params: {
                    email: formData.email
                }
            });
            console.log("Checking RES STATUS:", res.status);
            if(res.status != 201){
                throw new Error("Unable to retrieve user email");
            }
            const data = await res.data;
            console.log(data.dataAdd);
            return { success: true, data };
        }catch(err){
            console.error("Error fetching email", err);
            return { success: false, err };
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            await checkLoggedIn(); // Wait for checkLoggedIn() to complete
            // Once logged in, update address, state, and previous order based on email
            handleAddressChange();
            //handleStateChange();
            //handlePrevOrderChange();
        };
    
        fetchData(); // Trigger fetchData() when component mounts or when formData.email changes
    }, [formData.email, isLoggedIn]);
    
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
                return 3.14;
            case 'Gasoline':
                return 2.79;
            default:
                return 0;
        }
    };

    const handleTotalChange = () => {
        const parsedNumGallons = parseFloat(formData.numGallons);
        const parsedPricePerGallon = parseFloat(formData.pricePerGallon);

        if (!isNaN(parsedNumGallons) && !isNaN(parsedPricePerGallon)) {
            const calculatedTotal = parsedNumGallons * parsedPricePerGallon;
            setFormData((prevData) => ({
                ...prevData,
                total: calculatedTotal.toFixed(2),
            }));
        }
    };
    async function registerOrder() {
        try {
            const res = await axios.post('http://localhost:8080/fuelForm/', formData);
            if (res.status !== 201) {
                throw new Error("Unable to complete order");
            }
            const data = await res.data;
            console.log(data);
            return { success: true, data };
        } catch (error) {
            console.error("Error registering order:", error);
            return { success: false, error };
        }
    }

    useEffect(() => {
        handleTotalChange(); // Automatically update total when numGallons or pricePerGallon changes
    }, [formData.numGallons, formData.pricePerGallon]);

    const handleOrder = (e) => {
        e.preventDefault(); // Prevent the form from submitting (to avoid page reload)

        // Check for empty fields
        const hasError = Object.values(formData).some(value => value === '');
        if (hasError) {
            alert("Please fill in all the fields.");
            return;
        }

        // Register the order
        registerOrder()
            .then(response => {
                if (response.success) {
                    alert("Congratulations! You successfully created your order.");
                    setFormData({
                        //email: null,
                        gasLocation: '',
                        fuelType: '',
                        numGallons: 0,
                        purchaseDate: '',
                        pricePerGallon: 0,
                        deliveryDate: '',
                        //deliveryAddress: 'City, State',
                        total: 0,
                    });
                } else {
                    alert("Failed to create order. Please try again later.");
                }
            })
            .catch(error => {
                console.error("Error registering order:", error);
                alert("An error occurred while processing your order. Please try again later.");
            });
    };
    const handleQuote = (e) => {
        e.preventDefault(); // Prevent the form from submitting (to avoid page reload)

        // Check for empty fields
        const hasError = Object.values(formData).some(value => value === '');
        if (hasError) {
            alert("Please fill in all the fields.");
            return;
        }
    };

    return (
        <main className="relative h-screen bg-cover">
            <div className="container mx-auto text-center relative flex items-center justify-center h-screen">
                <div className="py-14 px-40 max-h-full overflow-y-auto" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
                    <h1 className="text-3xl md:text-3xl mb-4">Fuel Quote Form</h1>
                    <h2 className="text-xl md:text-1xl mb-4">You can use this form to get an estimate of a fuel order & to order some fuel!</h2>
                    <div className="container text-center relative flex flex-col items-center justify-center">
                        <label className="text-xl mb-2" htmlFor="email">Email:</label>
                        {/*<input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="user email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-md p-2 h-10 text-black w-48"
    />*/}
                         {isLoggedIn ? (
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="user email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled 
                                className="rounded-md p-2 h-10 text-black w-48"
                            />
                        ) : (
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="user email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-md p-2 h-10 text-black w-48"
                            />
                        )}
                    </div>
                    <div className="container text-center relative flex flex-col items-center justify-center">
                        <label className="text-xl mb-2" htmlFor="gasLocation">Gas Location:</label>
                        <select
                            id="gasLocation"
                            name="gasLocation"
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
                        <label className="text-xl mb-2" htmlFor="fuelType">Fuel Type:</label>
                        <select
                            id="fuelType"
                            name="fuelType"
                            value={formData.fuelType}
                            onChange={handleFuelTypeChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                        >
                            <option value="Diesel">Diesel</option>
                            <option value="Gasoline">Gasoline</option>
                        </select>
                    </div>
                    <div className="container text-center relative flex flex-col items-center justify-center">
                        <label className="text-xl mb-2" htmlFor="numGallons"> Number of Gallons:</label>
                        <input
                            type="number"
                            id="numGallons"
                            name="numGallons"
                            value={formData.numGallons}
                            onChange={handleChange}
                            step="0.1"
                            placeholder="0.00"
                            className="rounded-md p-2 h-10 text-black w-48"
                        />
                    </div>
                    <div className="container text-center relative flex flex-col items-center justify-center">
                        <label className="text-xl mb-2" htmlFor="pricePerGallon"> Suggested Price/Gallon:</label>
                        <input
                            type="text"
                            id="pricePerGallon"
                            name="pricePerGallon"
                            value={formData.pricePerGallon}
                            placeholder="0.00"
                            readOnly
                            className="rounded-md p-2 h-10 text-black w-48"
                        />
                    </div>
                    <div className="container text-center relative flex flex-col items-center justify-center">
                        <label className="text-xl mb-2" htmlFor="purchaseDate">Purchase Date:</label>
                        <input
                            type="date"
                            id="purchaseDate"
                            name="purchaseDate"
                            value={formData.purchaseDate}
                            onChange={handleChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                        />
                    </div>
                    <div className="container text-center relative flex flex-col items-center justify-center">
                        <label className="text-xl mb-2" htmlFor="deliveryDate">Delivery Date:</label>
                        <input
                            type="date"
                            id="deliveryDate"
                            name="deliveryDate"
                            value={formData.deliveryDate}
                            onChange={handleChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                        />
                    </div>
                    <div className="container text-center relative flex flex-col items-center justify-center">
                        <label className="text-xl mb-2" htmlFor="deliveryAddress">Delivery Address:</label>
                        <input
                            type="text"
                            id="deliveryAddress"
                            name="deliveryAddress"
                            placeholder="temp, test"
                            value={formData.deliveryAddress}
                            onChange={handleChange}
                            className="rounded-md p-2 h-10 text-black w-48"
                        />
                    </div>
                    <div className="container text-center relative flex flex-col items-center justify-center">
                        <label className="text-xl mb-2" htmlFor="total">Total:</label>
                        <input
                            type="text"
                            id="total"
                            value={formData.total}
                            readOnly
                            className="rounded-md p-2 h-10 text-black w-48"
                        />
                    </div>
                    <div className="container text-center relative flex flex-row items-center justify-center">
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
                                marginRight: '10px',
                            }}
                            type="submit"
                            onClick={handleOrder}
                        >
                            Order
                        </button>
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
                                marginLeft: '10px',
                            }}
                            type="submit"
                            onClick={handleQuote}
                        >
                            Quote
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FuelForm;
