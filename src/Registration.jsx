import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreedToTerms: false
    });

    // Derived state for validation
    const passwordsMatch = formData.password === formData.confirmPassword;
    const areAllFieldsFilled = formData.email && formData.password && 
                              formData.confirmPassword && formData.name;
    const canSubmit = passwordsMatch && areAllFieldsFilled && formData.agreedToTerms;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Add API call here
    };

    const handleChange = (e) => {
        const { id, type, value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="h-screen w-screen bg-gray-900 pt-10">
            <div className="max-w-xl mx-auto bg-purple-800 text-gray-100 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit} className="flex-col space-y-4">
                    {/* Email Input */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium text-gray-200">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm block w-full py-2 sm:text-sm rounded-md bg-gray-800 px-2 border-gray-600 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 focus:outline-none"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="E-Mail Address"
                        />
                    </div>

                    {/* Password Inputs */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium text-gray-200">
                            Password <span className="text-gray-400 font-base text-sm">(Min. 6 Characters)</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow-sm block w-full py-2 bg-gray-800 px-2 sm:text-sm rounded-md border-gray-600 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 focus:outline-none"
                            value={formData.password}
                            onChange={handleChange}
                            minLength="6"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium text-gray-200">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="shadow-sm block w-full py-2 bg-gray-800 px-2 sm:text-sm rounded-md border-gray-600 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 focus:outline-none"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            minLength="6"
                            placeholder="Confirm Password"
                            required
                        />
                        {formData.confirmPassword && !passwordsMatch && (
                            <p className="text-red-500 text-sm mt-1">Passwords do not match!</p>
                        )}
                    </div>

                    {/* Name Input */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium text-gray-200">First and Last Name</label>
                        <input
                            type="text"
                            id="name"
                            className="shadow-sm block w-full py-2 sm:text-sm rounded-md bg-gray-800 px-2 border-gray-600 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 focus:outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="First and Last Name"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex flex-col space-y-2">
                        <label className="font-normal flex items-start space-x-2 text-gray-200">
                            <div>
                                <input
                                    type="checkbox"
                                    id="agreedToTerms"
                                    className="h-4 w-4 rounded border-gray-600 focus:ring-purple-500 text-purple-600"
                                    checked={formData.agreedToTerms}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                I agree to the <a href="Policies" target="_blank" className="text-purple-300 hover:text-purple-200">Privacy, Policies</a> and 
                                <a href="Policies" target="_blank" className="text-purple-300 hover:text-purple-200"> Terms</a>
                            </div>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            className={`inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ${
                                canSubmit 
                                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                    : 'bg-gray-500 cursor-not-allowed text-gray-300'
                            } w-full transition-colors`}
                            type="submit"
                            disabled={!canSubmit}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className='flex justify-center text-gray-300'><Link to="/">Already have an account? Login here</Link></div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
