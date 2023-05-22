import "./Login.css"
import MenuBarLogin from "../MenuBar/MenuBarLogin";
import react from "react"
import { useState } from "react"
import { Button } from "react-bootstrap"

const Login = ({ setUser }) => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const[error, setError] = useState(false)
        
    
    const handleSubmit = (e) => {
        e.preventDefault()
    
        if(name === "" || password === ""){
            setError(true)
            return
        }
    
        setError(false)
    
        setUser([name])
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
                    <button class="btn btn-light justify-content-center mt-2 ">Login</button>
                    <a  class="register ml-2" href="">Registrarme.</a>
                </form>
                {error && <p className="mesageError scale-up-center">Todos los campos son obligatorios</p>}
            </section>
        </>
    );
};
export default Login;