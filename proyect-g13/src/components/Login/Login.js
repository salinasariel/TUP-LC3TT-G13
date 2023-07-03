import "./Login.css"
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import MenuBarLogin from "../MenuBar/MenuBarLogin";
import { toast, ToastContainer } from "react-toastify";

/* EXPLICACION COMPONENTE LOGIN
definimos un componente de función llamado Login utilizando React Hooks. En este componente, se manejan los estados de email y password.

Las funciones handleEmailChange y handlePasswordChange se utilizan para actualizar los valores de estado correspondientes cuando hay cambios en los campos de correo electrónico y contraseña, respectivamente.

La función handleLogin se ejecuta cuando se envía el formulario de inicio de sesión. Primero, se previene el comportamiento predeterminado del evento de envío. Luego, se realiza una solicitud GET a una API utilizando Axios para obtener una lista de usuarios.

Después de obtener la lista de usuarios, se recorre cada usuario y se verifica si las credenciales de correo electrónico y contraseña coinciden con alguna de las entradas de la lista. Si se encuentra una coincidencia, se realiza una redirección a diferentes rutas según el rol del usuario utilizando useNavigate de React Router.

Si el rol es "3", el usuario es redirigido a la página /homepage. Si el rol es "2", el usuario es redirigido a la página /ownerpanel. Si el rol es "1", el usuario es redirigido a la página /adminpanel. Si no hay una coincidencia de credenciales, se muestra una alerta de "Credenciales incorrectas".

En caso de cualquier error durante el proceso de inicio de sesión, se muestra una alerta de "Error al realizar el inicio de sesión".

El componente Login devuelve JSX que representa el formulario de inicio de sesión. Hay campos de entrada para el correo electrónico y la contraseña. Al enviar el formulario, se llama a la función handleLogin. También se muestra un enlace para registrarse. */

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

      toast.warn('Credenciales incorrectas', {position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",});
    } catch (error) {
      console.log(error);
      toast.warn('Error al realizar el inicio de sesión', {position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",});
    }
  };
  const goRegister =()=>{
    navigate('/register')
  }

  return (
    <div className="login">
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
        <button class="btn btn-secondary justify-content-center mt-3 " onClick={goRegister}>Registrarme</button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
