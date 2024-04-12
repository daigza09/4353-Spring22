import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileManagement() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    userLocation: '',
    zipcodeNumber: '',
  });
  const [isEditable, setIsEditable] = useState({
    fullName: false,
    address1: false,
    address2: false,
    city: false,
    userLocation: false,
    zipcodeNumber: false,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          // redirect to login if user is not authenticated
          window.location.href = '/login';
          return;
        }
        const response = await axios.get('http://localhost:8080/auth/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSaveChanges = async (field) => {
  // validating user input
  if (
    user.fullName.length > 50 ||
    user.address1.length > 100 ||
    user.address2.length > 100 ||
    user.city.length > 100 ||
    user.zipcodeNumber.length > 9 ||
    user.zipcodeNumber.length < 5 ||
    user.fullName === '' ||
    user.address1 === '' ||
    user.city === '' ||
    user.userLocation === ''
  ) {
    alert('Please make sure all required fields are filled out correctly.');
    return;
  }

    try {
      await axios.put(`http://localhost:8080/profileManagement/api/users/${user.email}`, user); 
      setIsEditable({ ...isEditable, [field]: false });
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  const handleEditClick = (field) => {
    setIsEditable({ ...isEditable, [field]: true });
  };

  const handleCancel = (field) => {
    setIsEditable({ ...isEditable, [field]: false });
  };

  const renderField = (label, name, type = 'text', isSelect = false, options = []) => {
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
            {renderField('Address 1', 'address1')}
            {renderField('Address 2', 'address2')}
            {renderField('City', 'city')}
            {renderField('State', 'userLocation', 'select', true, [
              { value: '', label: 'Select a state' },
              { value: 'TX-1', label: 'TX' },
              { value: 'FL-1', label: 'FL' },
              { value: 'NY-1', label: 'NY' },
            ])}
            {renderField('Zipcode', 'zipcodeNumber', 'text')}
          </div>
        </form>
      </div>
    </main>
  );
}

export default ProfileManagement;

