import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Management_login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    managementEmail: '',
    managementPassword: '',
    patientEmail: '',
    patientPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otp");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  return (
    <main className="max-h-screen bg-gradient-to-r from-[#7d8b67a0] via-[#43876b] to-[#3dbbcb] flex items-center justify-center">
      <div className='flex items-center justify-center h-screen'>
        <div className="w-96 backdrop-blur-lg bg-opacity-90 rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#047485] to-[#67afba] text-black">
          <h2 className="text-2xl font-bold pb-5 text-center text-white">Welcome</h2>
          <form onSubmit={handleSubmit}>
            {/* Patient Name Input */}
            <div className="mb-4">
              <label htmlFor="patientName" className="block mb-2 text-sm font-medium text-white">Patient name</label>
              <input
                type="text"
                id="patientName"
                className="bg-[#ffffff] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4 placeholder-gray-500"
                placeholder="Sandesh Poudel Chhetri"
                required
                value={formData.patientName}
                onChange={handleChange}
              />
            </div>

            {/* Management Email Input */}
            <div className="mb-4">
              <label htmlFor="managementEmail" className="block mb-2 text-sm font-medium text-white">Management email</label>
              <input
                type="email"
                id="managementEmail"
                className="bg-[#FFFFFF] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4 placeholder-gray-500"
                placeholder="Yourmail@gmail.com"
                required
                value={formData.managementEmail}
                onChange={handleChange}
              />
            </div>

            {/* Management Password Input */}
            <div className="mb-4">
              <label htmlFor="managementPassword" className="block mb-2 text-sm font-medium text-white">Management password</label>
              <input
                type="password"
                id="managementPassword"
                className="bg-[#FFFFFF] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4"
                placeholder="*********"
                required
                value={formData.managementPassword}
                onChange={handleChange}
              />
            </div>

            {/* Patient Email Input */}
            <div className="mb-4">
              <label htmlFor="patientEmail" className="block mb-2 text-sm font-medium text-white">Patient email</label>
              <input
                type="email"
                id="patientEmail"
                className="bg-[#FFFFFF] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4 placeholder-gray-500"
                placeholder="Yourmail@gmail.com"
                required
                value={formData.patientEmail}
                onChange={handleChange}
              />
            </div>

            {/* Patient Password Input */}
            <div className="mb-4">
              <label htmlFor="patientPassword" className="block mb-2 text-sm font-medium text-white">Patient password</label>
              <input
                type="password"
                id="patientPassword"
                className="bg-[#FFFFFF] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4"
                placeholder="*********"
                required
                value={formData.patientPassword}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                disabled={!isFormValid}
                className="text-white bg-[#1E90FF] hover:bg-[#87CEFA] flex items-center justify-between focus:ring-4 focus:ring-[#4dc7e2] font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Management_login;