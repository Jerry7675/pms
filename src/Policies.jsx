import React from 'react';
import { Link } from 'react-router-dom';

function Policies() {
  return (
    <div className='w-full max-w-md mx-auto p-6 bg-gray-900 min-h-screen'>
      <h1 className='text-2xl font-bold mb-4 text-violet-300'>Policies</h1>
      <p className='text-lg mb-6 text-gray-300'>By using this application, you agree to the following policies:</p>
      
      <div className='space-y-8 text-gray-300'>
        {/* Privacy Policy */}
        <section>
          <h2 className='text-xl font-bold mb-3 text-violet-300'>1. Privacy Policy</h2>
          <div className='space-y-4'>
            <h3 className='font-semibold'>1.1 Data Collection</h3>
            <p>We collect the following data:</p>
            <ul className='list-disc list-inside ml-4'>
              <li>Personal Information: Name, contact details, date of birth</li>
              <li>Health Records: Diagnoses, prescriptions, lab results</li>
              <li>Usage Data: Login times and system interactions</li>
            </ul>
            
            <h3 className='font-semibold mt-4'>1.2 Use of Data</h3>
            <ul className='list-disc list-inside ml-4'>
              <li>Secure access to health records</li>
              <li>System functionality improvement</li>
              <li>Legal compliance under Nepal's Digital Health Strategy</li>
            </ul>
          </div>
        </section>

        {/* Terms of Service */}
        <section>
          <h2 className='text-xl font-bold mb-3 text-violet-300'>2. Terms of Service</h2>
          <div className='space-y-4'>
            <h3 className='font-semibold'>2.1 User Responsibilities</h3>
            <p>Patients:</p>
            <ul className='list-disc list-inside ml-4'>
              <li>Provide accurate health information</li>
              <li>Use privacy toggles responsibly</li>
            </ul>
            
            <h3 className='font-semibold mt-4'>2.2 Prohibited Activities</h3>
            <ul className='list-disc list-inside ml-4'>
              <li>Unauthorized access or data tampering</li>
              <li>Sharing login credentials</li>
            </ul>
          </div>
        </section>

        {/* Cookie Policy */}
        <section>
          <h2 className='text-xl font-bold mb-3 text-violet-300'>3. Cookie Policy</h2>
          <p>We use cookies for session management and user authentication. By using our service, you consent to cookie usage.</p>
        </section>

        {/* Contact Information */}
        <section className='mt-8 border-t pt-4 border-violet-300'>
          <h2 className='text-lg font-bold text-violet-300'>Contact Information</h2>
          <p className='mt-2'>For inquiries or data requests:</p>
          <p className='mt-1'>Email: sandeshchhetri5677@gmail.com</p>
          <p className='mt-1'>Last Updated: May 20, 2025</p>
        </section>
      </div>

      <div className='mt-8 text-center'>
        <Link 
          to="/" 
          className='text-violet-300 hover:text-violet-400 transition-colors'
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default Policies;