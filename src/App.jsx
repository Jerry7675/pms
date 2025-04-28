import Login_form from './Login_form';
import Registration from './Registration';
import Forgot from './Forgot';
function App() {

  
  return (
    <div className='flex flex-col justify-center'>
    <Login_form />
    <Registration />
    <Forgot />
    </div>
    
  );
}

export default App;