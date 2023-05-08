import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import Login from './components/Login/Login';

import { useState } from 'react';

function App() {
const [user, setUser] = useState([])

  return (
    <div className='App'>
      {
        !user.length > 0
          ? <Login setUser={setUser} />
          : <MenuBar />
      }
    </div>
  );
}

export default App;
