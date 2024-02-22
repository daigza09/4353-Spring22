import { Link } from "react-router-dom";
import React, { useState } from 'react';

function ProfileManagement() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [zipcodeNumber, setZipcodeNumber] = useState('');
  const [city, setCity] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [password, setPassword] = useState('');


  const handleFullNameChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 50) {
      alert("Full Name should be less than 50 characters");
    } else {
      setFullName(inputValue);
      setFullNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleAddress1Change = (e) => {
    setAddress1(e.target.value);
    setAddress1Error('');
  };

  const handleAddress2Change = (e) => {
    setAddress2(e.target.value);
    setAddress2Error('');
  };

  const handleZipcodeNumberChange = (e) => {
    setZipcodeNumber(e.target.value);
    setZipcodeNumberError('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setCityError('');
  };
 
  const handleUserLocationChange = (e) => {
    setUserLocation(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleUserClick = () => {
    if (
      !fullName || 
      !email ||
      !address1 ||
      !address2 ||
      !zipcodeNumber ||
      !city ||
      !userLocation 
    ) {
      alert('Please fill out all the fields before exiting the page.'); 
    } else {
      alert('Successfully Saved!'); 
    }
  }

  return (
    <main className="min-h-screen flex items-start">
      <div className="p-6 rounded w-full sm:max-w-xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8" style={{ fontFamily: 'Barlow, SemiBold' }}>Edit Profile</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Full Name"
                autoComplete="off"
                name="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '528px' }}
              />
            </div>
            <div className="md:col-span-2">
                <label htmlFor="email" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-input rounded-lg block w-full h-14 text-lg"
                    style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '528px' }}
                />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address1" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>Address 1</label>
              <input
                type="text"
                id="address1"
                placeholder="Enter Address 1"
                autoComplete="off"
                name="address1"
                value={address1}
                onChange={handleAddress1Change}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '528px' }}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address2" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>Address 2</label>
              <input
                type="text"
                id="address2"
                placeholder="Enter Address 2"
                autoComplete="off"
                name="address2"
                value={address2}
                onChange={handleAddress2Change}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '528px' }}
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>City</label>
              <input
                type="text"
                id="city"
                placeholder="Enter City"
                autoComplete="off"
                name="city"
                value={city}
                onChange={handleCityChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '250px' }}
              />
            </div>
            <div>
            <label htmlFor="zipcodeNumber" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>Zipcode</label>
              <input
                type="tel"
                id="zipcodeNumber"
                placeholder="Enter Zipcode"
                autoComplete="off"
                name="zipcodeNumber"
                value={zipcodeNumber}
                onChange={handleZipcodeNumberChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '250px' }}
              />
            </div>
            <div>
              <label htmlFor="userLocation" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>State</label>
              <select
                id="userLocation"
                value={userLocation}
                onChange={handleUserLocationChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '250px' }}
                >
                  <option value="01-TX">01-TX</option>
                  <option value="02-FL">02-FL</option>
                  <option value="03-NY">03-NY</option>
                </select>
           
            </div>
          </div>
        </form>
        <div className="flex justify-between" style={{ marginTop: '2rem' }}> {/* Adjusted margin-top */}
          <button
            type="submit"
            className="w-1/3 bg-teal-900 text-white rounded-lg py-4 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}
          >
            Save Changes
          </button>
          <button
            type="cancel"
            className="w-1/3 bg-teal-900 text-white rounded-lg py-4 mr-4 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProfileManagement;
