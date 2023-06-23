import React from 'react'
import './SelectStadium.css'
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


  

function SelectStadium({id, name, monday, tuesday, wednesday, thursday, friday, address}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/selectday', { state: { id, name , monday, tuesday, wednesday, thursday, friday }});
  };  
  return (
    <div className='cube'>
        <h4>{name}</h4>
        <p>{address}</p>
        
        <button onClick={handleClick}  className='btn btn-light justify-content-center mt-2 '>Ver Disponibilidad</button>
        
    </div>
  )
} 

export default SelectStadium