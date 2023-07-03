import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminStadiumControl from '../AdminStadiumControl/AdminStadiumControl';

/*EXPLICACION COMPONENTE ADMINPANEL 
El componente AdminPanel es un componente funcional que representa el panel de administrador. Este componente utiliza varios hooks de React, como useState, useEffect y useNavigate de React Router, para gestionar el estado y la navegación.

En el inicio del componente, se define una variable ownerdata con el valor "admin", Luego, se utiliza el hook useNavigate para obtener la función 'navigate', que se utiliza para navegar a diferentes rutas.

La función 'goToOwner' se utiliza para navegar a la página del panel de dueño (/ownerpanel) y pasa los datos ownerdata y admin como estado de la ubicación.

La función goToUser se utiliza para navegar a la página de inicio (/homepage) y pasa el estado admin como true.

Las constantes updatedDayTrue y updatedDayFalse representan los valores de actualización para los días de la semana. updatedDayTrue establece todos los días en true y updatedDayFalse los establece en false.

Las funciones allowAllDays y cancelAllDays utilizan la biblioteca Axios para realizar solicitudes PUT a una API ficticia. Estas funciones obtienen todos los recursos (establecimientos) de la API y los actualizan según los valores de updatedDayTrue y updatedDayFalse, respectivamente. También estas funciones muestran mensajes de éxito o error utilizando la biblioteca Toastify.

El estado 'stadiums'se inicializa como un array vacío utilizando el hook useState. Este estado se utiliza para almacenar los datos de los establecimientos obtenidos de la API.

El useEffect se utiliza para llamar a la función getData al cargar el componente. Esta función realiza una solicitud GET a la API y actualiza el estado 'stadiums' con los datos obtenidos.

La función handleStadium se utiliza para manejar el evento de clic en un establecimiento. Actualmente, muestra el ID del establecimiento/canchita en la consola.

El componente StadiumList es un mapeo del estado stadiums que crea componentes AdminStadiumControl para cada cancha. Se pasan varias propiedades, como el nombre, la dirección y los días de la semana, al componente AdminStadiumControl.

En el renderizado del componente, mostramos un encabezado y dos botones para cambiar entre las vistas de usuario y dueño. despues, se muestran dos botones para habilitar o bloquear todos los días de la semana.

Después, se muestra una sección para eliminar canchas, donde se renderiza el componente StadiumList.

 y Finalmente, se muestra un componente ToastContainer de la biblioteca Toastify para mostrar los mensajes de éxito o error.

En resumen, el código representa un panel de administrador con funcionalidades para habilitar o bloquear días de la semana para todos los establecimientos, así como una lista de establecimientos con la opción de eliminarlos. También proporciona botones para cambiar entre las vistas de usuario y dueño.*/

const AdminPanel= () => {
  const ownerdata = "admin";
  const navigate = useNavigate();
  const goToOwner = () => {
    navigate('/ownerpanel',{state:{ownerdata: ownerdata, admin: true}});
  };
  const goToUser = () => {
    navigate('/homepage',{state:{admin: true}});
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
  const setStadiumId = useState();
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
  const StadiumList = stadiums.map((v) => {
    return <AdminStadiumControl name={v.name} address={v.address} id={v.id} monday={v.monday} tuesday={v.tuesday} wednesday={v.wednesday} thursday={v.thursday} friday={v.friday} />
  })


  return (
    <div>
      <MenuBar />
      <div className="backplate scale-up-center">

        <h3>Panel de administrador.</h3>
        <button onClick={goToUser} className='btn btn-warning'>Vista de Usuario</button>
        <button onClick={goToOwner} className='btn btn-warning'>Vista de Dueño</button>

         <br></br>

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