import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FinishReserve() {
  const location = useLocation();
    const { name, day} = location.state;
  return (
    <>
        <MenuBar/> 
        <div className="backplate">
           
            <h3>Reserva confirmada.</h3>
            <p>Usted reservo para el establecimiento {name}  el dia {day && day}.</p>
            
            

        </div>
    </>
  )
}

export default FinishReserve