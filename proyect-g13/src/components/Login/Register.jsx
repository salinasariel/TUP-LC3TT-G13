import React, { useRef, useState } from 'react'
import MenuBarLogin from '../MenuBar/MenuBarLogin'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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

    }

    
    
  };

  const handleValidation = () =>{
    let result = true
    if(password.length < 6 || password.length > 20  ) {
      result = false
      alert('La contraseña no puede tener menos de 6 caracteres y mas de 20');
    }      
    if (password !== confirmPassword) {
      result = false
      alert('Las contraseñas no coinciden');
    }
    if (role !== "2" && role !== "3") {
      result = false
      roleRef.current.focus()
      alert("Seleccione un rol")
    }
    return result
  }


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


