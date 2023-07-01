import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useNavigate } from 'react-router-dom';

function OkReserve() {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/homepage');
  };
  return (
    
    <div>
      <MenuBar/>
      <div className="backplate scale-up-center">
      
      <h1>Reserva confirmada.</h1>
      <p>Gracias por utilizar nuestra plataforma.</p>
      <button onClick={handleClick} className='btn btn-secondary justify-content-center mt-2 ' href='/homepage' >Regresar</button>
      
      

      </div>
    </div>
    
  )
}

export default OkReserve