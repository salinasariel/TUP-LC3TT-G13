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
        <section>

            <form className="form"
            onSubmit={handleSubmit}>
                <h1>login</h1>
                <input type="text"
                value={name}
                onChange={e => setName(e.target.value)}></input>
                <input type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}></input>
                <button>Login</button>
            </form>
            {error && <p>todos los campos son obligatorios</p>}
        </section>
    )
}
export default Login;