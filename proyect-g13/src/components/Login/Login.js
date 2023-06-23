import "./Login.css"
import MenuBarLogin from "../MenuBar/MenuBarLogin";
import react, { useEffect } from "react"
import { useState } from "react"
import { Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
        
    useEffect(()=>{
        sessionStorage.clear()
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validated()){
            fetch("https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/"+name, {
               method: 'GET',
               headers: {'content-type':'application/json'}
            })
            .then(response => {
                return response.json()})
            .then(result => {
                if (Object.keys(result).length===0) {
                    toast.error('Ingrese un usuario existente')
                }else{
                    if(result.password ===password){
                        toast.succes('Usuario valido')
                        sessionStorage.setItem('usuario', name)
                        navigate('/homepage')
                    }else{
                        toast.error('Ingrese un credenciales validas')
                    }
                }
            })
            .catch(err => {
                toast.err("Error al logearse :"+err.message)
            })
        }

    }
    const validated = () => {
        let result = true
        if (name === "" || name === null) {
            result = false
            toast.warning("Intruduzca su nombre de usuario")
        }if (password === "" || password === null) {
            result = false
            toast.warning("Intruduzca su contrasenia de usuario")
        }
        return result
    }
    return(
        <>

            <MenuBarLogin />
            <section >

                <form className="form scale-up-center"
                onSubmit={handleSubmit}>
                    <h1 class="titelLog">Iniciar Sesion</h1>
                    <input placeholder="Usuario" class="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}></input>
                    <input placeholder="Contraseña" class="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>
                    <button class="btn btn-light justify-content-center mt-2 ">Login</button> <br></br>
                    <a  class="register ml-2" href="/register">Registrarme.</a>
                </form>
            </section>
        </>
    );
};
export default Login;