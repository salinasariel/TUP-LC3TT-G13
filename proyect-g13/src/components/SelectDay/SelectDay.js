//import { Link } from "react-router-dom";
//import React, { useState } from 'react';
import MenuBar from "../MenuBar/MenuBar";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/*EXPLICACION SELECTDAY
 SelectDay define un componente de función llamado SelectDay.

importamos useLocation y useNavigate de React Router para acceder a la ubicación actual y para navegar entre las páginas.

Usamos useLocation para obtener los datos pasados a través de la ubicación actual. Se desestructuran las propiedades id, name, monday, tuesday, wednesday y friday del estado de ubicación.

La función handleClick se ejecuta cuando se hace clic en el botón "Regresar". y esta Utiliza la función navigate para redirigir al usuario a la página principal ("/homepage").

La función okReserve se ejecuta cuando se hace clic en un botón de reserva de día. y esta Utiliza la función navigate para redirigir al usuario a la página "finishreserve" y pasa el estado { id, name, day } como datos de ubicación.

El componente SelectDay devuelve un JSX que representa la selección de un día de reserva.


tenemos los botones de reserva para cada día disponible. Si el día está disponible (según los datos obtenidos), se muestra un botón habilitado que al hacer clic llama a la función okReserve con el nombre del día. Si el día no está disponible, se muestra un botón deshabilitado.

Al final, tenemos un botón "Regresar" que al hacer clic llama a la función handleClick para redirigir al usuario a la página principal. */

const SelectDay = () => {

    const location = useLocation();
    const { id, name, monday, tuesday, wednesday, thursday, friday, } = location.state;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/homepage');
      };  
      const okReserve = (day) => {
        navigate('/finishreserve', { state: { id, name, day}});
      };  
   
    return(
        <>
        <MenuBar/> 
        <div className="backplate scale-up-center">
           
            <h3>Reservar en {name}</h3>
            <p>Por favor seleccione el dia que desea reservar </p>
            
            {monday ? (<button onClick={() => okReserve("monday")} className="btn btn-success">LUNES</button>) : (<button disabled className="btn btn-danger">LUNES</button>)}
            {tuesday ? (<button onClick={() => okReserve("tuesday")} className="btn btn-success">MARTES</button>) : (<button disabled className="btn btn-danger">MARTES</button>)}
            {wednesday ? (<button onClick={() => okReserve("wednesday")} className="btn btn-success">MIERCOLES</button>) : (<button onClick={() => okReserve("miercoles")} disabled className="btn btn-danger">MIERCOLES</button>)}
            {thursday ? (<button onClick={() => okReserve("thursday")} className="btn btn-success">JUEVES</button>) : (<button disabled className="btn btn-danger">JUEVES</button>)}
            {friday ? (<button onClick={() => okReserve("friday")} className="btn btn-success">VIERNES</button>) : (<button disabled className="btn btn-danger">VIERNES</button>)}
            <br></br><button onClick={handleClick} className='btn btn-secondary justify-content-center mt-2 ' href='/homepage' >Regresar</button>

        </div>
        </>
        
        
    )
}
export default SelectDay;