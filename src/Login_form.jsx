import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Login_form() {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <main className="max-h-screen bg-gradient-to-r from-[#7d8b67a0] via-[#43876b] to-[#3dbbcb] flex items-center justify-center">
      <div className='flex items-center justify-center h-screen'>
      <div className="w-96 backdrop-blur-lg bg-opacity-90 rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#047485] to-[#67afba] text-black">
        <h2 className="text-2xl font-bold pb-5 text-center text-white">Welcome</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your name</label>
            <input
              type="text"
              id="name"
              className="bg-[#ffffff] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4 placeholder-gray-500"
              placeholder="Sandesh Poudel Chhetri"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-[#FFFFFF] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4 placeholder-gray-500"
              placeholder="Yourmail@gmail.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
            <input
              type="password"
              id="password"
              className="bg-[#FFFFFF] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4"
              placeholder="*********"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="text-white bg-[#1E90FF] hover:bg-[#87CEFA] focus:ring-4 focus:ring-[#4dc7e2] font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              SignIn
            </button>
            <div className="flex items-center text-sm">
              <p className="text-white">Don't have an account?</p>
              <Link 
                to="/register" 
                className="ml-1 text-white hover:text-blue-500 underline"
              >
                Sign Up here
              </Link>
            </div>
          </div>
          
          <div className="text-sm">
            <Link 
              to="/forgot" 
              className="flex justify-center text-blue-700 hover:text-blue-600 underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        </div>
      </div>
      
    </main>
  );
}

export default Login_form;
