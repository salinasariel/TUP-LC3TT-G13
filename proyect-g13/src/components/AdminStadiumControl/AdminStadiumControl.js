import React, { useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const AdminStadiumControl = ({ id, name, monday, tuesday, wednesday, thursday, friday, address }) => {
    const [nameS, setNameS] = useState(name)
    const [addressS, setAdderssS] = useState(name)
    const navigate = useNavigate()

    const deleteStadium = async () => {
        try {
            const response = await axios.delete(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${id}`);
            console.log(response.data); 
            setNameS(null)
            setAdderssS(null)
        } catch (error) {
            console.error(error);
        }
    };

    const navtoAdmin = () =>{
        navigate('/')
    }
    return (
        <div className='cube scale-up-center'>
            <h4>{nameS}</h4>
            <p>{addressS}</p>
            {nameS ? <button onClick={deleteStadium} className='btn btn-danger justify-content-center mt-2 '>Eliminar</button> : <button className='btn btn-danger justify-content-center mt-2 ' onClick={navtoAdmin}>Ir al login</button>}

        </div>
    )
};

export default AdminStadiumControl