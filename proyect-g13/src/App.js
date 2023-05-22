import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './App.css';

import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Protected from "./components/routes/Protected";
import NotFoundd from './components/routes/NotFoundd';


function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)


const loginHandler = () => {
  setIsLoggedIn(true)
}

const logoutHandler = () => {
  setIsLoggedIn(false)
}

const router = createBrowserRouter([
  {
  path:"/login",
  Element: <Login onLogin={loginHandler}/>
},
{
  path:"/home",
  Element: (
    <Protected isSignedIn={isLoggedIn}>
      <HomePage onLogout={logoutHandler} />
    </Protected>
  ),
},
{
  path:"*",
  Element: <NotFoundd />
},
])

  return <RouterProvider router={router} />
  
};

export default App;
