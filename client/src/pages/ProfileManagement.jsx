import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileManagement() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const [isEditable, setIsEditable] = useState({
    fullName: false,
    addressLine1: false,
    addressLine2: false,
    city: false,
    state: false,
    zipcode: false,
  });

  const checkLoggedIn = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        const response = await axios.get("http://localhost:8080/auth/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.status === 200) {
          const userData = response.data;
          setUser({
            fullName: userData.fullName || '',
            email: userData.email || '',
            addressLine1: userData.addressLine1 || '',
            addressLine2: userData.addressLine2 || '',
            city: userData.city || '',
            state: userData.state || '',
            zipcode: userData.zipcode || '',
          });
          handleUserChange(userData.email); // this is where fetch user would be 
        }
      } else {
        // if no access token, consider the user not logged in
        console.log('user not logged in!');
        window.location.href = '/login';

      }
    } catch (error) {
      console.error('Error fetching user:', error);
      console.log('Error Response:', error.response);
    }
  };
  
  useEffect(() => {
    checkLoggedIn();
  }, []);

  const handleUserChange = async (email) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/info`, {
        params: { email: email }
      });
      if (response.status === 201) {
        const useData = response.data.user;
        setUser(prevState => ({
          ...prevState,
          fullName: useData.fullName,
          addressLine1: useData.addressLine1,
          addressLine2: useData.addressLine2,
          city: useData.city,
          state: useData.state,
          zipcode: useData.zipcode,
        }));
        console.log(useData.fullName)
      }
    } catch (error) {
      console.error('Error fetching user  info:', error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };
  const handleSaveChanges = async (field) => {
    const fieldValue = user[field];
    const fieldValidations = {
      fullName: fieldValue.length > 50 || fieldValue === '',
      addressLine1: fieldValue.length > 100 || fieldValue === '',
      addressLine2: fieldValue.length > 100,
      city: fieldValue.length > 100 || fieldValue === '',
      state: fieldValue === '',
      zipcode: fieldValue.length > 9 || fieldValue.length < 5,
    };
  
    if (fieldValidations[field]) {
      alert('Please make sure the field is filled out correctly.');
      return;
    }
  
    try {
      const response = await axios.put(`http://localhost:8080/profileManagement/api/users/${user.email}`, {
        [field]: fieldValue // Send only the updated field
      });
      if (response.status === 200) {
        console.log('User updated successfully');
        setIsEditable(prevIsEditable => ({
          ...prevIsEditable,
          [field]: false
        }));
      } else {
        console.error('Failed to update user:', response.status);
        console.log('Response:', response.data); // log the server's response data
      }
    } catch ( error ) {
      console.error('Error saving changes:', error);
      if (error.response) {
        console.log('Error Response:', error.response.data); // detailed error information
      }
    }
  };

  const handleEditClick = (field) => {
    setIsEditable({ ...isEditable, [field]: true });
  };

  const handleCancel = (field) => {
    setIsEditable({ ...isEditable, [field]: false });
  };

  const renderField = (label, name, type = 'text', isSelect = false, options = []) => {
    console.log('Rendering Field:', name, user[name]);
    return (
      <div>
        <label htmlFor={name} className="block text-gray-800 text-lg" style={{ fontFamily: 'Barlow, SemiBold' }}>{label}</label>
        <div className="flex">
          {isSelect ? (
            <select
              id={name}
              name={name}
              value={user[name]}
              onChange={handleInputChange}
              disabled={!isEditable[name]}
              className={`form-select rounded-lg block w-full h-14 text-lg ${isEditable[name] ? 'bg-white' : 'bg-gray-200'}`}
              style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black' }}
            >
              {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              id={name}
              name={name}
              value={user[name]}
              onChange={handleInputChange}
              readOnly={!isEditable[name]}
              className={`form-input rounded-lg block w-full h-14 text-lg ${isEditable[name] ? 'bg-white' : 'bg-gray-200'}`}
              style={{ borderRadius: '10px', padding: '8px', height: '55px', color: 'black' }}
            />
          )}
          {isEditable[name] ? (
            <>
              <button className="ml-2 bg-teal-900 text-white rounded-lg px-4" onClick={() => handleSaveChanges(name)}>Save</button>
              <button className="ml-2 bg-gray-600 text-white rounded-lg px-4" onClick={() => handleCancel(name)}>Cancel</button>
            </>
          ) : (
            <button className="ml-2 bg-teal-900 text-white rounded-lg px-4" onClick={() => handleEditClick(name)}>Edit</button>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen flex items-start">
      <div className="p-6 rounded w-full sm:max-w-xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8" style={{ fontFamily: 'Barlow, SemiBold' }}>Edit Profile</h2>
        <form className="space-y-6">
          <div className="flex flex-col gap-6">
            {renderField('Full Name', 'fullName')}
            {renderField('Email', 'email')}
            {renderField('Address 1', 'addressLine1')}
            {renderField('Address 2', 'addressLine2')}
            {renderField('City', 'city')}
            {renderField('State', 'state', 'select', true, [
              { value: '', label: 'Select a state' },
              { value: 'TX-1', label: '01- TX' },
              { value: 'FL-1', label: '02 - FL' },
              { value: 'NY-1', label: '03 - NY' },
            ])}
            {renderField('Zipcode', 'zipcode', 'text')}
          </div>
        </form>
      </div>
    </main>
  );
}

export default ProfileManagement;
