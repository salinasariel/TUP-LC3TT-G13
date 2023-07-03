import React from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const AdminStadiumControl = ({ id, name, monday, tuesday, wednesday, thursday, friday, address }) => {
    const navigate = useNavigate();

    const deleteStadium = async () => {
        try {
            const response = await axios.delete(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${id}`);
            console.log(response.data); 
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='cube scale-up-center'>
            <h4>{name}</h4>
            <p>{address}</p>
            <button onClick={deleteStadium} className='btn btn-danger justify-content-center mt-2 '>Eliminar</button>

        </div>
    )
};

export default AdminStadiumControl