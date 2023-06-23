import React, { useState } from 'react'
import MenuBarLogin from '../MenuBar/MenuBarLogin'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Register() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        debugger;
        let registerNeeded = {email, password}
        
        fetch("https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/users", {
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(registerNeeded)
        }).then((response)=>{
            toast.success('Registrado satisfactoriamente')
            navigate('/')
        }).catch(err => {
            toast.error("Hubo un error :"+err.message)
        })


    }

  return (
    <>

            <MenuBarLogin />
            <section >

                <form className="form scale-up-center" onSubmit={handleOnSubmit}>
                    <h1 class="titelLog">Registrarme</h1>
                    <input
                     required
                      value={email}
                       onChange={e=> setEmail(e.target.value)}
                        type="email" placeholder='Email' class="email form-control" />
                    
                    <input
                     required
                      value={password}
                       onChange={e=> setPassword(e.target.value)}
                        placeholder="Contraseña" class="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password"></input>
                    <button class="btn btn-light justify-content-center mt-2 ">Registrarse</button> <br></br>
                    
                </form>
                <a  class="register ml-2" href="/">Ya tengo una cuenta</a>
            </section>
        </>
  )
}

export default Register