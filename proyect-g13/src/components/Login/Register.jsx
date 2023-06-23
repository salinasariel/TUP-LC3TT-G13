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
        let registerNeeded = {email, name, password}
        
        fetch("ahttps://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/users", {
            method:"POST",
            headers:{'conten-type':'application/json'},
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
                    <h1 class="titelLog">Iniciar Sesion</h1>
                    <input
                     required
                      value={email}
                       onChange={e=> setEmail(e.target.value)}
                        type="email" placeholder='Email' class="email form-control" />
                    <input required
                     value={name}
                      onChange={e=> setName(e.target.value)}
                       placeholder="Usuario" class="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text"></input>
                    <input
                     required
                      value={password}
                       onChange={e=> setPassword(e.target.value)}
                        placeholder="Contraseña" class="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password"></input>
                    <button class="btn btn-light justify-content-center mt-2 ">Registrarse</button> <br></br>
                    <a  class="register ml-2" href="/login">Ya tengo una cuenta</a>
                </form>
            </section>
        </>
  )
}

export default Register