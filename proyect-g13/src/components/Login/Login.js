import "./Login.css"

import { useState } from "react"


export function Login({setUser}){
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
        
        <section >

            <form className="form scale-up-center"
            onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input placeholder="Usuario" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text"
                value={name}
                onChange={e => setName(e.target.value)}></input>
                <input placeholder="Contraseña" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}></input>
                <button class="btn btn-light">Login</button>
                <a href="">Prefiero registrarme.</a>
            </form>
            {error && <p className="mesageError scale-up-center">Todos los campos son obligatorios</p>}
        </section>
    )
}
export default Login;