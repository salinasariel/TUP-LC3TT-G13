import React, { useState } from 'react'
import MenuBarLogin from '../MenuBar/MenuBarLogin'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

//function Register() {
   // const [email, setEmail] = useState("")
   // const [name, setName] = useState("")
   // const [password, setPassword] = useState("")
   // const navigate = useNavigate()
    
    //const handleOnSubmit = (e) =>{
       // e.preventDefault()
        //debugger;
       // let registerNeeded = {email, password}
        
       // fetch("https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/users", {
           // method:"POST",
           // headers:{'content-type':'application/json'},
           // body:JSON.stringify(registerNeeded)
      //  }).then((response)=>{
          //  toast.success('Registrado satisfactoriamente')
           // navigate('/')
       // }).catch(err => {
          //  toast.error("Hubo un error :"+err.message)
       // })


   // }

  //return (
   // <>

   //         <MenuBarLogin />
    //        <section >

   //             <form className="form scale-up-center" onSubmit={handleOnSubmit}>
   //                 <h1 class="titelLog">Registrarme</h1>
   //                 <input
   //                  required
   //                   value={email}
   //                    onChange={e=> setEmail(e.target.value)}
    //                    type="email" placeholder='Email' class="email form-control" />
                    
      //              <input
      //               required
      //                value={password}
      //                 onChange={e=> setPassword(e.target.value)}
       //                 placeholder="Contraseña" class="contrasenia form-control" aria-label="Default"                 aria-describedby="inputGroup-sizing-default" type="password"></input>
       //             <button class="btn btn-light justify-content-center mt-2 ">Registrarse</button> <br></br>
         //           <a  class="register ml-2" href="/">Ya tengo una cuenta</a>
       //         </form>
                
       //     </section>
      //  </>
 // )
//}

//import React, { useState } from 'react';

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordError2, setPasswordError2] = useState('');
  const [passwordExito, setPasswordExito] = useState('')
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const [role, setRole] = useState ('')

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    debugger;
     let registerNeeded = {email, password,role}
        
       fetch("https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/users", {
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(registerNeeded)
        }).then((response)=>{
            toast.success('Registrado satisfactoriamente')
            navigate('/')
        }).catch(err => {
          //  toast.error("Hubo un error :"+err.message)
        })


    // Validar la contraseña
    if (password.length < 6 ) {
      setPasswordError('La contraseña no puede tener menos de 6 caracteres');
      return;
    }
    if (password.length > 20 ) {
        setPasswordError2('La contraseña no puede tener mas de 20 caracteres');
        return;
      }
      
    if (password !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }

    if (!role && role ==='') {
        setPasswordError('Por favor, selecciona tu rol');
        return;
      }

      else if (password.length >=6 && password.length <= 20 ) {
        setPasswordExito('Registrado Correctamente!');
        return;

      }


    // Continuar con la lógica de registro si las validaciones son exitosas
    // ...
  };

  return (

    <>

            <MenuBarLogin />
            <section >

         <form className="form scale-up-center" onSubmit={handleOnSubmit}>

         <div>
                    <h1 class="titelLog">Registrarme</h1>
                    <input
                    required
                      value={email}
                       onChange={e=> setEmail(e.target.value)}
                        type="email" placeholder='Email' class="email form-control"
                    />
         </div>
            
        <div>
            <label htmlFor="password"></label>
            <input className='form-control" aria-label'
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder='Contraseña'  class="paswordd form-control"
            />
        </div>
         
          
           
          
          
        
        <div>
        <label htmlFor="confirmPassword"></label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder='Confirmar Contraseña:'  class="password form-control"
        />

        <div>
        <label htmlFor="role" className='justify-content-end'></label>
        <select id="role" className='btn btn-light justify-content-center mt-3' value={role} onChange={handleRoleChange}>
          <option value="">Seleccionar rol</option>
          <option value='2'>Dueño</option>
          <option value='3'>Usuario</option>
        </select>
      </div>

      </div>
      {passwordError && <div>{passwordError}</div>}
      {passwordError2 && <div>{passwordError2}</div>}
      {passwordExito && <div>{passwordExito}</div>}
      <button class="btn btn-light justify-content-center mt-3 " type="submit">Registrar</button>
    </form>
    </section>

    </>
    
    
  );
};

export default Register;


