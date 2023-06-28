 import "./Login.css"
// import MenuBarLogin from "../MenuBar/MenuBarLogin";
// import react , { useEffect } from "react"
// import { useState } from "react"
// import { Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';


// const Login = () => {
    
//     const [name, setName] = useState("")
//     const [password, setPassword] = useState("")
//     const navigate = useNavigate()

    
//     const url = new URL('https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/users');
//     url.searchParams.append('email', name);
    
//     useEffect(()=>{
     
//         sessionStorage.clear()
//     }, []);
    
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if(validated()){
//             fetch(url , {
//                method: 'GET',
//                headers: {'content-type':'application/json'},
//             })
//             .then(response => {
//                 return response.json()})
//             .then(result => {                
//                 if (Object.keys(result).length===0) {
//                     toast.error('Ingrese un usuario existente')
//                 }else{
//                     if(result.password ===password){
//                         toast.success('Usuario valido')
//                         sessionStorage.setItem('usuario', name)
//                         navigate('/homepage')
//                     }else{
//                         toast.error('Ingrese un credenciales validas')
//                     }
//                 }
//             })
//             .catch(error => {
//                 toast.error("Error al logearse :"+error.message)
//             })
//         }

//     }
//     const validated = () => {
//         let result = true
//         if (name === "" || name === null) {
//             result = false
//             toast.warning("Intruduzca su nombre de usuario")
//         }if (password === "" || password === null) {
//             result = false
//             toast.warning("Intruduzca su contrasenia de usuario")
            
//         }
//         return result
//     }
//     return(
//         <>

//             <MenuBarLogin />
//             <section >

//                 <form className="form scale-up-center"
//                 onSubmit={handleSubmit}>
//                     <h1 class="titelLog">Iniciar Sesion</h1>
//                     <input placeholder="Usuario" class="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text"
//                     value={name}
//                     onChange={e => setName(e.target.value)}></input>
//                     <input placeholder="Contraseña" class="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password"
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}></input>
//                     <button class="btn btn-light justify-content-center mt-2 ">Login</button> <br></br>
//                     <a  class="register ml-2" href="/register">Registrarme.</a>
//                 </form>
//             </section>
//         </>
//     );
// };
// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import MenuBarLogin from "../MenuBar/MenuBarLogin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
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
          setLoginStatus('Inicio de sesión exitoso');
          navigate('/homepage')
          return;
        }
        
      }

      setLoginStatus('Credenciales incorrectas');
    } catch (error) {
      console.log(error);
      setLoginStatus('Error al realizar el inicio de sesión');
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

        <p>{loginStatus}</p>
        <a  class="" href="/register">Registrarme.</a>
      </div>
      
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;