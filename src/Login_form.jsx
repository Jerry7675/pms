// Login_form.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Login_form() {
  // const navigate = useNavigate()
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
    <main className="min-h-screen bg-gradient-to-r from-[#E6F7FF] via-[#FFFFFF] to-[#E6F7FF] flex items-center justify-center">
      <div className="w-96 backdrop-blur-lg bg-opacity-90 rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#5042d2] to-[#4597bd] text-black">
        <h2 className="text-2xl font-bold pb-5 text-center text-white">Welcome</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your name</label>
            <input
              type="text"
              id="name"
              className="bg-[#FFFFFF] border border-gray-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-[#1E90FF] w-full py-2.5 px-4 placeholder-gray-500"
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
              className="text-white bg-[#1E90FF] hover:bg-[#87CEFA] focus:ring-2 focus:ring-[#1E90FF] font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              SignIn
            </button>
            <div className="flex items-center text-sm text-white">
              <p>Don't have an account?</p>
              <p className="cursor-pointer ml-1 text-[#00BFFF]"><Link to="/register" className="text-[#00BFFF]
              ">Sign Up here</Link></p>
            </div>
          </div>
          <div className="text-sm">
            <p className="underline cursor-pointer ml-1 flex justify-center  text-white"><Link to="/forgot">Forgot Password?</Link></p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login_form;
