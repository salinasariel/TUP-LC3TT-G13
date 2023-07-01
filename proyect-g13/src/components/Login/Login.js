import "./Login.css"
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import React, { useState } from 'react';
import axios from 'axios';
import MenuBarLogin from "../MenuBar/MenuBarLogin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/users');
      const users = response.data;

      for (const user of users) {
        if (user.email === email && user.password === password) {
          
          if(user.role ==="3"){
            navigate('/homepage')
            return
          }
          if(user.role ==="2"){
            navigate('/ownerpanel')
            return
          }
          if(user.role ==="1"){
            navigate('/adminpanel')
            return
          }
          alert('Inicio de sesión exitoso');
          return;
        }
        
        
      }

      alert('Credenciales incorrectas');
    } catch (error) {
      console.log(error);
      alert('Error al realizar el inicio de sesión');
    }
  };

  return (
    <div>
      <MenuBarLogin />
      <div className="form scale-up-center">
        <h1 class="titelLog">Iniciar sesión</h1>
        <p>Ingrese sus credenciales para continuar.</p>
        <form  onSubmit={handleLogin}>
          <div>
            
            <input placeholder="Usuario" class="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="email" value={email} onChange={handleEmailChange} required />
          </div>
          
          <div>
            
            <input placeholder="Contraseña" class="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button class="btn btn-success justify-content-center mt-2 " type="submit">Iniciar sesión</button>
        </form>
        <a  class="" href="/register">Registrarme.</a>
      </div>
      
    </div>
  );
};

export default Login;
