import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('01 - TX'); 
    const [zipcode, setZipcode] = useState(''); 
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleAddressLine1Change = (e) => {
        setAddressLine1(e.target.value);
    };

    const handleAddressLine2Change = (e) => {
        setAddressLine2(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const handleZipcodeChange = (e) => { 
        setZipcode(e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!email || !password || !fullName || !addressLine1 || !city || !state || !zipcode) { 
            alert('Please fill out all the fields before proceeding.');
            return;
        }
    
        try {
            const emailCheckResponse = await axios.get(`http://localhost:8080/signup/check-email/${email}`);
            if (emailCheckResponse.data.exists) {
                alert('Email is already in use. Please choose a different email.');
                return;
            }
    
            const response = await axios.post('http://localhost:8080/signup/', {
                email,
                password,
                fullName,
                addressLine1,
                addressLine2,
                city,
                state,
                zipcode, 
            });
    
            console.log(response.data);
            alert('Successfully Signed Up!');
        } catch (error) {
            console.error('Signup error:', error.response.data.error);
            alert('Error signing up. Please try again later.');
        }
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
            <div className="p-4 rounded" style={{ width: '50%', minWidth: '100px', maxWidth: '500px', position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h2 className="text-white mb-3" style={{ marginTop: '-80px', fontSize: '24px' }}><strong>REGISTRATION</strong></h2>
                <p className="text-white mb-5">
                    Have an account, <a href="/login" className="text-white">Sign In</a>
                </p>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="email" className="text-white mb-2">
                            <strong>Email</strong>
                        </label>
                        <div className="position-relative">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="form-control rounded-pill"
                                style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                            />
                            {emailError && <span className="text-danger">{emailError}</span>}
                        </div>
                    </div>
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="password" className="text-white mb-2">
                            <strong>Password</strong>
                        </label>
                        <div className="position-relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-control rounded-pill"
                                style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                            />
                            {password && (
                                <button
                                    type="button"
                                    className="btn btn-link text-black"
                                    onClick={handleTogglePassword}
                                    style={{ position: 'absolute', top: '65%', right: '10px', transform: 'translateY(-50%)' }}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            )}
                            {passwordError && <span className="text-danger">{passwordError}</span>}
                        </div>
                    </div>
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="fullName" className="text-white mb-2">
                            <strong>Full Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            name="fullName"
                            value={fullName}
                            onChange={handleFullNameChange}
                            className="form-control rounded-pill"
                            style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                        />
                    </div>
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="addressLine1" className="text-white mb-2">
                            <strong>Address Line 1</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Address Line 1"
                            name="addressLine1"
                            value={addressLine1}
                            onChange={handleAddressLine1Change}
                            className="form-control rounded-pill"
                            style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                        />
                    </div>
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="addressLine2" className="text-white mb-2">
                            <strong>Address Line 2</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Address Line 2"
                            name="addressLine2"
                            value={addressLine2}
                            onChange={handleAddressLine2Change}
                            className="form-control rounded-pill"
                            style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                        />
                    </div>
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="city" className="text-white mb-2">
                            <strong>City</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter City"
                            name="city"
                            value={city}
                            onChange={handleCityChange}
                            className="form-control rounded-pill"
                            style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                        />
                    </div>
                    
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="state" className="text-white mb-2">
                            <strong>State</strong>
                        </label>
                        <select
                            name="state"
                            value={state}
                            onChange={handleStateChange}
                            className="form-control rounded-pill"
                            style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                        >
                            <option value="01 - TX">01 - TX</option>
                            <option value="02 - FL">02 - FL</option>
                            <option value="03 - NY">03 - NY</option>
                        </select>
                    </div>

                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="zipCode" className="text-white mb-2">
                            <strong>Zip Code</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Zip Code"
                            name="zipCode"
                            value={zipcode} 
                            onChange={handleZipcodeChange} 
                            className="form-control rounded-pill"
                            style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                        />
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input rounded-circle" type="checkbox" value="" id="rememberMe" />
                            <label className="form-check-label text-white" htmlFor="rememberMe" style={{ marginLeft: '5px', marginRight: '200px' }}>
                                Remember Me
                            </label>
                            <Link to="/forgot-password" className="text-white" style={{ marginLeft: '5px' }}>
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success rounded-pill mb-3" style={{ height: '50px', width: '100%', borderRadius: '25px', backgroundColor: '#02363d', marginTop: '40px', color: '#fff' }}>
                        Sign Up
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Signup;









