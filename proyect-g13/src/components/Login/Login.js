import { useNavigate } from "react-router-dom"
import MenuBar from "../MenuBar/MenuBar"
import "./Login.css"

import { useRef, useState } from "react"


export function Login({onLogin}){
const [name, setName] = useState("")
const[errors, setErrors] = useState([
    {text: "Nombre no completado", isError: false},
    {text: "password no completado", isError: false}
])

const nameRef = useRef(null)
const passwordRef = useRef(null)

const navigation = useNavigate()

const nameHandler = (e) => {
    setName(e.target.value)
    }
    
const singInHandler = () => {
    if(name.length === 0){
        nameRef.current.focus();
        nameRef.current.style.borderColor = "red";
        nameRef.current.style.outLine = "none";
        const newErrors = [...errors];
        newErrors[0].isError = true;
        setErrors(newErrors);
        return;
    }
    if(passwordRef.current.value.length === 0){
        passwordRef.current.focus();
        const newErrors = [...errors];
        newErrors[1].isError = true;
        setErrors(newErrors);
        return;
    }
}

    onLogin();
    navigation("/home");


    return (
        <MenuBar/>,
       <div className="login-container">
        <div className="login-box">
            <h4 className={`${name.length === 0 && "red-text"}`}>  
               !Reserva tu turno ya!
            </h4>
            <div classname="input-container">
                <input
                    className="input-control"
                    placeholder="Email"
                    type="email"
                    onChange={nameHandler} 
                    value={name}
                    ref={nameRef} 
                />       
            </div>
            {errors[0].isError && <p>{errors[0].text}</p>}
            <div className="input-container">
                <input
                className="input-control"
                placeholder="Password"
                type="password"
                ref={passwordRef}
                />
            </div>
            {errors[1].isError && <p>{errors[1].text}</p>}
            <button onClick={singInHandler} className="signin-button" type="button">
                Iniciar Sesion
            </button>

        </div>
        
       </div>
    );

};
 export default Login;