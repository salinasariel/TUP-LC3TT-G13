import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FinishReserve() {
  const location = useLocation();
  const { id, name, day } = location.state;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/homepage');
  };
  const okReserve = () => {
    const idModify = id; // Reemplaza 'ID_DEL_OBJETO' con el ID correspondiente
    const dayModify = '{day}';
    const successMessage = 'Su reserva fue exitosa, establecimiento {name} el dia {day}.'
    const errorMessage = 'Su reserva tuvo un error. Intente nuevamente.';
    const updatedDay = {
      [day]: false // Utiliza corchetes para indicar una clave dinámica
    };
  
    // Realiza la solicitud PUT al endpoint adecuado con el objeto modificado
    axios.put(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${idModify}`, updatedDay)
      .then(response => {
        // La solicitud se realizó con éxito
        console.log(response.data); // Puedes mostrar o utilizar la respuesta según tus necesidades
        navigate('/okreserve', { massege: {successMessage}});
      })
      .catch(error => {
        // Ocurrió un error al realizar la solicitud
        console.error(error);
        navigate('/okreserve', { message: {errorMessage}});
      });
    
  };

  return (
    <>
      <MenuBar />
      <div className="backplate scale-up-center">

        <h3>Confirmar su reserva.</h3>
        <p>¿Desea reservar en el establecimiento {name} para el dia {day}?.</p>

        <button onClick={okReserve} className='btn btn-success'>Confirmar</button>
        <button onClick={handleClick} className='btn btn-secondary justify-content-center mt-2 ' href='/homepage' >Regresar</button>

      </div>
    </>
  )
}

export default FinishReserve