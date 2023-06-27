import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function FinishReserve() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/homepage');
  };  
  const okReserve = (day) => {
    navigate('/finishreserve', { state: { id, name, day}});
  }; 
  const location = useLocation();
    const {id, name, day} = location.state;
  return (
    <>
        <MenuBar/> 
        <div className="backplate scale-up-center">
           
            <h3>Confirmar su reserva.</h3>
            <p>¿Desea reservar en el establecimiento {name} para el dia {day && day}?.</p>
            
            <button onClick={okReserve} className='btn btn-success'>Confirmar</button>
            <button onClick={handleClick} className='btn btn-secondary justify-content-center mt-2 ' href='/homepage' >Regresar</button>

        </div>
    </>
  )
}

export default FinishReserve