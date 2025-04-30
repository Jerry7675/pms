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
        <div className="h-screen w-screen"  style={{ background: 'linear-gradient(to bottom, #E6F7FF, #FFFFFF, #E6F7FF)' }}>
            <div className="max-w-xl mx-auto my-8 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10" 
                 style={{ background: 'linear-gradient(to bottom, #5042d2, #4597bd)', color: '#FFFFFF' }}>
                <form onSubmit={handleSubmit} className="flex-col space-y-4">
                    {/* Email Input */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium" style={{ color: '#FFFFFF' }}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm block w-full py-2 sm:text-sm rounded-md px-2 border focus:outline-none"
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderColor: '#D1D5DB',
                                color: '#000000',
                                placeholderColor: '#808080',
                                focusRing: '#1E90FF',
                                focusBorderColor: '#1E90FF'
                            }}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="E-Mail Address"
                        />
                    </div>

                    {/* Password Inputs */}
                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium" style={{ color: '#FFFFFF' }}>
                            Password <span className="font-base text-sm text-gray-200">(Min. 6 Characters)</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow-sm block w-full py-2 sm:text-sm rounded-md px-2 border focus:outline-none"
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderColor: '#D1D5DB',
                                color: '#000000',
                                placeholderColor: '#808080',
                                focusRing: '#1E90FF',
                                focusBorderColor: '#1E90FF'
                            }}
                            value={formData.password}
                            onChange={handleChange}
                            minLength="6"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="block font-medium" style={{ color: '#FFFFFF' }}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="shadow-sm block w-full py-2 sm:text-sm rounded-md px-2 border focus:outline-none"
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderColor: '#D1D5DB',
                                color: '#000000',
                                placeholderColor: '#808080',
                                focusRing: '#1E90FF',
                                focusBorderColor: '#1E90FF'
                            }}
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
                        <label className="block font-medium" style={{ color: '#FFFFFF' }}>First and Last Name</label>
                        <input
                            type="text"
                            id="name"
                            className="shadow-sm block w-full py-2 sm:text-sm rounded-md px-2 border focus:outline-none"
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderColor: '#D1D5DB',
                                color: '#000000',
                                placeholderColor: '#808080',
                                focusRing: '#1E90FF',
                                focusBorderColor: '#1E90FF'
                            }}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="First and Last Name"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex flex-col space-y-2">
                        <label className="font-normal flex items-start space-x-2" style={{ color: '#FFFFFF' }}>
                            <div>
                                <input
                                    type="checkbox"
                                    id="agreedToTerms"
                                    className="h-4 w-4 rounded border focus:ring text-purple-600"
                                    style={{
                                        borderColor: '#D1D5DB',
                                        focusRing: '#1E90FF'
                                    }}
                                    checked={formData.agreedToTerms}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                I agree to the <a href="Policies" target="_blank" style={{ color: '#0047AB' }}>Privacy, Policies</a> and 
                                <a href="Policies" target="_blank" style={{ color: '#0047AB' }}> Terms</a>
                            </div>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            className={`inline-flex items-center justify-center px-4 py-2.5 border text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 w-full transition-colors`}
                            style={{
                                backgroundColor: canSubmit ? '#1E90FF' : '#D1D5DB',
                                color: '#FFFFFF',
                                hoverBackgroundColor: canSubmit ? '#87CEFA' : '#D1D5DB',
                                cursor: canSubmit ? 'pointer' : 'not-allowed'
                            }}
                            type="submit"
                            disabled={!canSubmit}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className='flex justify-center' style={{ color: '#808080' }}>
                        <Link to="/" style={{ color: '#0047AB' }}>Already have an account? Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
