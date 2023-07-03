import { createContext, useState } from 'react';
import './App.css';
import AppRouter from './components/routes/AppRouter'
import ReactSwitch from 'react-switch';
export const ThemeContext = createContext(null)


const App = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () =>{
    setTheme((curr)=>(curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <AppRouter/>
        <div className='switch'>
          <label>{theme === "light" ? "Light mode" : "Dark mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
      </div>
    </ThemeContext.Provider>
    
    
  );
}

export default App;