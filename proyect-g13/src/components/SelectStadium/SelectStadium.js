import React from 'react'
import { useNavigate } from 'react-router-dom';


/*EXPLICACION SELECTSTADIUM
El componente SelectStadium recibe va a recibir varias propiedades como argumentos: id, name, monday, tuesday, wednesday, thursday, friday y address. Estas propiedades representan la información de una cancha que se mostrará en la interfaz de la pagina.

Dentro del componente SelectStadium, se utiliza el hook useNavigate de React Router para obtener la función navigate, que vamos a usar para redirigir al usuario a otra página al hacer clic en un botón.

El componente renderiza un contenedor (div) que muestra el nombre y la dirección de la cancha. A continuación, hay un botón con el texto "Ver Disponibilidad".

Cuando se hace clic en el botón, se ejecuta la función handleClick. Esta función utiliza la función navigate para redirigir al usuario a la página /selectday, pasando como estado un objeto con la información de la cancha: id, name, monday, tuesday, wednesday, thursday, friday. 
En resumen, este componente representa la información básica de una cancha y permite al usuario ver la disponibilidad de las canchas al hacer clic en el botón "Ver Disponibilidad".*/
  

function SelectStadium({id, name, monday, tuesday, wednesday, thursday, friday, address}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/selectday', { state: { id, name , monday, tuesday, wednesday, thursday, friday }});
  };  
  return (
    <div className='cube scale-up-center'>
        <h4>{name}</h4>
        <p>{address}</p>
        
        <button onClick={handleClick}  className='btn btn-light justify-content-center mt-2 '>Ver Disponibilidad</button>
        
    </div>
  )
} 

export default SelectStadium