import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminStadiumControl from '../AdminStadiumControl/AdminStadiumControl';

const AdminPanel= () => {

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
      toast.success('Dias habilitados.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
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
      toast.success('Dias desabilitados', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log('¡Todos los recursos han sido actualizados!');
    } catch (error) {
      console.error('Error al actualizar los recursos:', error);
    }
  };
  const [stadiums, setStadiums]= useState([])
  const [stadiumId,setStadiumId] = useState();
  useEffect(() =>{
    //console.log('useEffect')
    getData()
    
}, []);
  const getData = async () => {
    const data = await fetch('https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium')
    const ourStadiums = await data.json()
    //console.log(ourStadiums)
    setStadiums(ourStadiums)
  }

  const handleStadium = (id) => {
    console.log(id)
    setStadiumId(id);
  }
  //const StadiumList = stadiums.map(item =>(
  //    <option key="item.id" onClick={() => handleStadium(item.id)}>{item.name}</option>
  //))
  const StadiumList = stadiums.map((v) => {
    return <AdminStadiumControl name={v.name} address={v.address} id={v.id} monday={v.monday} tuesday={v.tuesday} wednesday={v.wednesday} thursday={v.thursday} friday={v.friday} />
  })


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
      <div>
        
      </div>
      <div className="backplate scale-up-center">
        <h4>Eliminar canchas.</h4>
        {StadiumList}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default AdminPanel