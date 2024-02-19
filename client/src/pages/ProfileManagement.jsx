import { Link } from "react-router-dom";

function ProfileManagement() {
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
                className="form-input rounded-lg block w-full h-14 text-lg" 
                style={{ fontFamily: 'Barlow, SemiBold' }}
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
                className="form-input rounded-lg block w-full h-14 text-lg" 
                style={{ fontFamily: 'Barlow, SemiBold' }}
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
                    className="form-input rounded-lg block w-full h-14 text-lg"
                    style={{ fontFamily: 'Barlow, SemiBold' }}
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
                className="form-input rounded-lg block w-full h-14 text-lg" 
                style={{ fontFamily: 'Barlow, SemiBold' }}
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
                className="form-input rounded-lg block w-full h-14 text-lg" 
                style={{ fontFamily: 'Barlow, SemiBold' }}
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
                className="form-input rounded-lg block w-full h-14 text-lg" 
                style={{ fontFamily: 'Barlow, SemiBold' }}
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
                className="form-input rounded-lg block w-full h-14 text-lg" 
                style={{ fontFamily: 'Barlow, SemiBold' }}
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
                className="form-input rounded-lg block w-full h-14 text-lg" 
                style={{ fontFamily: 'Barlow, SemiBold' }}
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
                className="form-input rounded-lg block w-full h-14 text-lg" 
                style={{ fontFamily: 'Barlow, SemiBold' }}
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




