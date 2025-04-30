import React from 'react';
import { Link } from 'react-router-dom';

function Policies() {
  return (
    <div className='w-full mx-auto p-12 bg-gray-900 min-h-screen'>
      <h1 className='text-4xl font-extrabold mb-6 text-violet-300'>Policies</h1>
      <p className='text-xl mb-8 text-gray-300'>By using this application, you agree to the following policies:</p>
      
      <div className='space-y-12 text-gray-300'>
        {/* Privacy Policy */}
        <section>
          <h2 className='text-3xl font-bold mb-4 text-violet-300'>1. Privacy Policy</h2>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>1.1 Data Collection</h3>
            <p className='text-lg'>We collect the following data:</p>
            <ul className='list-disc list-inside ml-6 text-lg'>
              <li>Personal Information: Name, contact details, date of birth</li>
              <li>Health Records: Diagnoses, prescriptions, lab results</li>
              <li>Usage Data: Login times and system interactions</li>
            </ul>
            
            <h3 className='text-2xl font-semibold mt-6'>1.2 Use of Data</h3>
            <ul className='list-disc list-inside ml-6 text-lg'>
              <li>Secure access to health records</li>
              <li>System functionality improvement</li>
              <li>Legal compliance under Nepal's Digital Health Strategy</li>
            </ul>
          </div>
        </section>

        {/* Terms of Service */}
        <section>
          <h2 className='text-3xl font-bold mb-4 text-violet-300'>2. Terms of Service</h2>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>2.1 User Responsibilities</h3>
            <p className='text-lg'>Patients:</p>
            <ul className='list-disc list-inside ml-6 text-lg'>
              <li>Provide accurate health information</li>
              <li>Use privacy toggles responsibly</li>
            </ul>
            
            <h3 className='text-2xl font-semibold mt-6'>2.2 Prohibited Activities</h3>
            <ul className='list-disc list-inside ml-6 text-lg'>
              <li>Unauthorized access or data tampering</li>
              <li>Sharing login credentials</li>
            </ul>
          </div>
        </section>

        {/* Cookie Policy */}
        <section>
          <h2 className='text-3xl font-bold mb-4 text-violet-300'>3. Cookie Policy</h2>
          <p className='text-lg'>We use cookies for session management and user authentication. By using our service, you consent to cookie usage.</p>
        </section>

        {/* Contact Information */}
        <section className='mt-12 border-t pt-6 border-violet-300'>
          <h2 className='text-2xl font-bold text-violet-300'>Contact Information</h2>
          <p className='mt-4 text-lg'>For inquiries or data requests:</p>
          <p className='mt-2 text-lg'>Email: sandeshchhetri5677@gmail.com</p>
          <p className='mt-2 text-lg'>Last Updated: May 20, 2025</p>
        </section>
      </div>

      <div className='mt-12 text-center'>
        <Link 
          to="/" 
          className='text-violet-300 hover:text-violet-400 active:text-violet-500 transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95 text-lg font-medium'
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default Policies;
