import Login_form from './Login_form';
import { Routes, Route } from 'react-router-dom'
import Registration from './Registration';
import Forgot from './Forgot';
import Otp from './Otp';
import Policies from './Policies';
import Dashboard from './Dashboard'
import Management_login from './Management_login'
function App() {

  
  return (
    
    <div className='flex flex-col justify-center'>
      
        <Routes>    
      <Route path="/" element={<Login_form />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Management_login" element={<Management_login/>} />

    </Routes>
    </div>
    
  );
}

export default App;