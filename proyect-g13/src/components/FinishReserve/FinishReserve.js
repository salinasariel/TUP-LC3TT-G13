import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/*EXPLICACION DEL FINISHRESERVE
El componente FinishReserve nos muestra un formulario para confirmar una reserva en un establecimiento. Este Comienza importando los hooks necesarios y define las variables de estado utilizando useLocation y useNavigate. Luego, se definen las funciones handleClick y okReserve.

La función handleClick redirige al usuario de vuelta a la página de inicio. La función okReserve se ejecuta cuando el usuario hace clic en el botón "Confirmar". Dentro de esta función, se realiza una solicitud HTTP PUT utilizando la librería Axios. La solicitud PUT actualiza el estado del día de reserva en el servidor simulado a false, indicando que el día ya no está disponible para reservas.

Si la solicitud PUT se completa con éxito, el componente navega a la página "/okreserve" con un mensaje de éxito. En caso de que ocurra un error durante la solicitud PUT, el componente navega a la misma página pero con un mensaje de error.

En el bloque de retorno, se muestra el formulario de confirmación de reserva, que incluye el nombre del establecimiento y el día seleccionado. Los botones "Confirmar" y "Regresar" llaman a las funciones correspondientes al hacer clic. */

function FinishReserve()  {
  const location = useLocation();
  const { id, name, day } = location.state;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/homepage');
  };
  const okReserve = () => {
    const idModify = id; 
    //const dayModify = '{day}';
    const successMessage = 'Su reserva fue exitosa, establecimiento {name} el dia {day}.'
    const errorMessage = 'Su reserva tuvo un error. Intente nuevamente.';
    const updatedDay = {
      [day]: false 
    };
  
    axios.put(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${idModify}`, updatedDay)
      .then(response => {
        console.log(response.data); 
        navigate('/okreserve', { massege: {successMessage}});
      })
      .catch(error => {
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