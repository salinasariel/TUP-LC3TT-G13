import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import Login from './components/Login/Login';



import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';

function App() {
const [user, setUser] = useState([])

  return (
    <div className='App'>
      {
        !user.length > 0
          ? <Login setUser={setUser} />
          : <HomePage />
      }
    </div>
  );
}

export default App;
