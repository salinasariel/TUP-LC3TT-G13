import './App.css';


import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';

import { useState } from 'react';

const App = () => {

const [user, setUser] = useState([])

  return (
    <>
      <div className='App'>
        {
          !user.length > 0
            ? <Login setUser={setUser} />
            : <HomePage />
        }
      </div>
    </>
  );
}
export default App;