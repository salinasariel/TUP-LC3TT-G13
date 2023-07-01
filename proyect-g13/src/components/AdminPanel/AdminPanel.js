import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminPanel() {
 
  const navigate = useNavigate();
  const goToOwner = () => {
    navigate('/ownerpanel');
  };
  const goToUser = () => {
    navigate('/homepage');
  };
  
  const updatedDayTrue = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true 
  };
  const allowAllDays = async () => {
    try {
      const response = await axios.get('https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium'); 
      const resources = response.data; 
  
      for (const resource of resources) {
        
        await axios.put(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${resource.id}`, updatedDayTrue);
        console.log(`Recurso ${resource.id} actualizado`);
      }
      alert('correcto');
      console.log('¡Todos los recursos han sido actualizados!');
    } catch (error) {
      console.error('Error al actualizar los recursos:', error);
    }
  };

  const updatedDayFalse = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false 
  };
  const cancelAllDays = async () => {
    try {
      const response = await axios.get('https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium'); 
      const resources = response.data;
  
      for (const resource of resources) {
        
        await axios.put(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${resource.id}`, updatedDayFalse);
        console.log(`Recurso ${resource.id} actualizado`);
      }
      alert('correcto');
      console.log('¡Todos los recursos han sido actualizados!');
    } catch (error) {
      console.error('Error al actualizar los recursos:', error);
    }
  };
 
  
  
  return (
    <div>
      <MenuBar />
      <div className="backplate scale-up-center">
           
            <h3>Panel de administrador.</h3>
            <button onClick={goToUser} className='btn btn-warning'>Vista de Usuario</button>
            <button onClick={goToOwner} className='btn btn-warning'>Vista de Dueño</button> <br></br>
            <button onClick={allowAllDays} className='btn btn-success'>Habilitar dias</button>
            <button onClick={cancelAllDays} className='btn btn-danger'>Bloquear dias</button>
            
        </div>
    </div>
  )
}

export default AdminPanel