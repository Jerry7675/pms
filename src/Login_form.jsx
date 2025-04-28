// Login_form.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'




function Login_form() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault(); // This prevents page refresh
    // Add your form submission logic here
    console.log('Form data:', formData);
    // You can add API call here
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold pb-5">Welcome</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
            <input
              type="text"
              id="name"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="Sandesh Poudel Chhetri"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="Yourmail@gmail.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
           
              type="submit"
              className="text-white bg-violet-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-500 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              SignIn
            </button>
            <div className="flex items-center text-sm">
              <p>Don't have an account?</p>
              <p className="underline cursor-pointer ml-1"><Link to="/register">Sign Up here</Link></p>
            </div>
          </div>
          <div className=" text-sm">
              <p className="underline cursor-pointer ml-1 flex justify-center"><Link to="/forgot">Forgot Password?</Link></p>
            </div>
        </form>
      </div>
      
      
    </main>
  );
}

export default Login_form;