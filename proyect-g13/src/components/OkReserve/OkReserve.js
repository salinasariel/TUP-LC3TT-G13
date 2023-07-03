import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useNavigate } from 'react-router-dom';

/*EXPLICACION COMPONENTE OKRESERVE

Creamos una función llamada OkReserve.

Dentro de la función okReserve, se utiliza el useNavigate de React para acceder a la función de navegación.

La función handleClick se ejecuta cuando se hace clic en el botón. Utiliza la función navigate para redirigir al usuario a la página /homepage.

El componente OkReserve devuelve un JSX que representa la confirmación de reserva. Se muestra un mensaje de "Reserva confirmada" y un agradecimiento por utilizar la plataforma. También tenemos el botón "Regresar" que, al hacer clic, llama a la función handleClick para redirigir al usuario a nuestra pagina principal.

Se utiliza el componente MenuBar para mostrar la barra de menú en la parte superior de la página.*/ 

const OkReserve= () => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/homepage',{state:{admin: false}});
  };
  return (
    
    <div>
      <MenuBar/>
      <div className="backplate scale-up-center">
      <h1>Reserva Confirmada.</h1>
      <p>Gracias por utilizar nuestra Plataforma.</p>
      <button onClick={handleClick} className='btn btn-secondary justify-content-center mt-2 ' href='/homepage' >Regresar</button>
      </div>
    </div>
    
  )
};

export default OkReserve