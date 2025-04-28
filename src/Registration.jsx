import React, { useState } from 'react';

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
        <div className="h-screen w-screen bg-gray-800 pt-10">
            <div className="max-w-xl mx-auto bg-violet-900 text-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit} className="flex-col space-y-4">
                    {/* Email Input */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm block w-full py-2 sm:text-sm rounded-md bg-gray-900 px-2 disabled:bg-red-200 border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="E-Mail Address"
                        />
                    </div>

                    {/* Password Inputs */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium">
                            Password <span className="text-gray-200 font-base text-sm">(Min. 6 Characters)</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow-sm block w-full py-2 bg-gray-900 px-2 sm:text-sm rounded-md border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none"
                            value={formData.password}
                            onChange={handleChange}
                            minLength="6"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="shadow-sm block w-full py-2 bg-gray-900 px-2 sm:text-sm rounded-md border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            minLength="6"
                            placeholder="Confirm Password"
                            required
                        />
                        {formData.confirmPassword && !passwordsMatch && (
                            <p className="text-red-400 text-sm mt-1">Passwords do not match!</p>
                        )}
                    </div>

                    {/* Name Input */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium">First and Last Name</label>
                        <input
                            type="text"
                            id="name"
                            className="shadow-sm block w-full py-2 sm:text-sm rounded-md bg-gray-900 px-2 border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="First and Last Name"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-normal flex items-start space-x-2">
                            <div>
                                <input
                                    type="checkbox"
                                    id="agreedToTerms"
                                    className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600"
                                    checked={formData.agreedToTerms}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                I agree to the <a href="/legal/privacy" target="_blank" className="text-indigo-300 hover:text-indigo-200">Privacy Policy</a> and 
                                <a href="/legal/terms" target="_blank" className="text-indigo-300 hover:text-indigo-200"> Terms</a>
                            </div>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            className={`inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ${
                                canSubmit 
                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                    : 'bg-gray-400 cursor-not-allowed text-gray-700'
                            } w-full transition-colors`}
                            type="submit"
                            disabled={!canSubmit}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;