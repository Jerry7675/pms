import React from 'react'
import { useState } from 'react';


const Dashboard = () => {
  return (
    <div >
      <ul className='flex text-lg font-semibold text-gray-700 bg-gray-100 p-4 space-x-4'>
        Home
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
     </div>
  )
}

export default Dashboard;