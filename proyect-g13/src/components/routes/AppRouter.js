import React, {useState} from 'react'
import { BrowserRouter ,Switch, Link, Route, Routes } from 'react-router-dom'

import Login from '../Login/Login'
import HomePage from '../HomePage/HomePage'
import SelectDay from '../SelectDay/SelectDay'

const AppRouter = () => {
  const [user, setUser] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login setUser={setUser}/>} />
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/selectday' element={<SelectDay/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter