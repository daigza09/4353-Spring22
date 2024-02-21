import { Link } from "react-router-dom";
import React, { useState } from 'react';

function ProfileManagement() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError('');
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError('');
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

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
    setContactNumberError('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setCityError('');
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setStateError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  return (
    <main className="min-h-screen flex items-start">
      <div className="p-6 rounded w-full sm:max-w-xl">
        <h2 className="text-4xl font-semibold text-center mb-8" style={{ fontFamily: 'Barlow, SemiBold' }}>Edit Profile</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name"
                autoComplete="off"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '250px' }}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                autoComplete="off"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '250px' }}
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
              <label htmlFor="contactNumber" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                placeholder="Enter Contact Number"
                autoComplete="off"
                name="contactNumber"
                value={contactNumber}
                onChange={handleContactNumberChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '250px' }}
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
              <label htmlFor="state" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>State</label>
              <input
                type="text"
                id="state"
                placeholder="Enter State"
                autoComplete="off"
                name="state"
                value={state}
                onChange={handleStateChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '250px' }}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-input rounded-lg block w-full h-14 text-lg"
                style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black', width: '250px' }}
              />
            </div>
          </div>
          <div className="flex justify-between">
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
        </form>
      </div>
    </main>
  );
}

export default ProfileManagement;
