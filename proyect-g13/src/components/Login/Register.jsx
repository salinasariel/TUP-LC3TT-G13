import React, { useRef, useState } from 'react'
import MenuBarLogin from '../MenuBar/MenuBarLogin'
import { useNavigate } from 'react-router-dom'

/*EXPLICACION DEL COMPONENTE REGISTER
 definimos un componente de función Register que utiliza React Hooks para manejar el estado de diferentes variables, como password, confirmPassword, email y role.

Hay tres funciones handlePasswordChange, handleConfirmPasswordChange y handleRoleChange que se utilizan para actualizar los valores de estado correspondientes cuando hay cambios en los campos de contraseña, confirmación de contraseña y rol, respectivamente.

La función handleOnSubmit se ejecuta cuando se envía el formulario. Primero, realiza una validación llamando a handleValidation(). Si la validación es exitosa, se crea un objeto registerNeeded con los valores de email, password y role. Luego, se realiza una solicitud POST a una API utilizando fetch, enviando el objeto registerNeeded como datos. Si la solicitud es exitosa, se muestra una alerta de "Registrado satisfactoriamente" y se navega hacia la página principal. Si hay un error, se muestra una alerta con el mensaje de error.

La función handleValidation realiza algunas validaciones en los campos de contraseña y rol. Si alguna validación no se cumple, se establece la variable result en false y se muestra una alerta correspondiente. Al final, devuelve el valor de result, que se utiliza en handleOnSubmit para determinar si se puede enviar el formulario.

El componente Register devuelve JSX, que representa el formulario de registro. Hay campos de entrada para el correo electrónico, contraseña, confirmación de contraseña y selección de rol. Al enviar el formulario, se llama a handleOnSubmit. También se utiliza el enlace de navegación de useNavigate de React Router para redirigir al usuario a la página principal después del registro. */
const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const [role, setRole] = useState ('')
  const roleRef = useRef(null)

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
    if (handleValidation()) {
      let registerNeeded = {email, password,role}
        
       fetch("https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/users", {
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(registerNeeded)
        }).then((response)=>{
          alert('Registrado satisfactoriamente')
            navigate('/')
        }).catch(err => {
          alert("Hubo un error :"+err.message)
        })

    };

    
    
  };

  const handleValidation = () =>{
    let result = true
    if(password.length < 6 || password.length > 20  ) {
      result = false
      alert('La contraseña no puede tener menos de 6 caracteres y mas de 20');
    };     
    if (password !== confirmPassword) {
      result = false
      alert('Las contraseñas no coinciden');
    };
    if (role !== "2" && role !== "3") {
      result = false
      roleRef.current.focus()
      alert("Seleccione un rol")
    };
    return result
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
          placeholder='Confirmar Contraseña:'  class="password form-control"/>

      <div>
        <label htmlFor="role" className='justify-content-end'></label>
        <select ref={roleRef} id="role" className='btn btn-light justify-content-center mt-3' value={role} onChange={handleRoleChange}>
          <option>Seleccione Rol</option>
          <option value='2'>Usuario</option>
          <option value='3'>Dueño</option>
        </select>
      </div>

      </div>
      <button class="btn btn-light justify-content-center mt-3 " type="submit">Registrar</button>
    </form>
    </section>

    </>
    
  );
};

export default Register;


