import { Link } from "react-router-dom";
import React, { useState } from 'react';
import MenuBar from "../MenuBar/MenuBar";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



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
            
            {monday ? (<button onClick={() => okReserve("lunes")} className="btn btn-success">LUNES</button>) : (<button disabled className="btn btn-danger">LUNES</button>)}
            {tuesday ? (<button onClick={() => okReserve("martes")} className="btn btn-success">MARTES</button>) : (<button disabled className="btn btn-danger">MARTES</button>)}
            {wednesday ? (<button onClick={() => okReserve("miercoles")} className="btn btn-success">MIERCOLES</button>) : (<button onClick={() => okReserve("miercoles")} disabled className="btn btn-danger">MIERCOLES</button>)}
            {thursday ? (<button onClick={() => okReserve("jueves")} className="btn btn-success">JUEVES</button>) : (<button disabled className="btn btn-danger">JUEVES</button>)}
            {friday ? (<button onClick={() => okReserve("viernes")} className="btn btn-success">VIERNES</button>) : (<button disabled className="btn btn-danger">VIERNES</button>)}
            <br></br><button onClick={handleClick} className='btn btn-secondary justify-content-center mt-2 ' href='/homepage' >Regresar</button>

        </div>
        </>
        
        
    )
}
export default SelectDay;