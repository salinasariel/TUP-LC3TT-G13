import React from 'react'
import { useState, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar'
import OwnerStadiumControl from '../OwnerStadiumControl/OwnerStadiumControl'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

/* EXPLICACION COMPONENTE OWNERPANEL
Al principio del componente, se importan las dependencias necesarias y se declaran los estados iniciales utilizando el hook useState. También se utiliza el hook useEffect para realizar una llamada a la API y obtener la información de los estadios.

El método 'getData' se utiliza para realizar la llamada a la API y obtener los datos de las canchas. Los datos se almacenan en el estado 'stadiums' utilizando la función 'setStadiums'.

El método handleStadium se utiliza para manejar el evento de clic en una cancha. Imprime el ID de la cancha seleccionada y actualiza el estado stadiumId con dicho ID.

El componente OwnerPanel obtiene la ubicación actual utilizando el hook useLocation. Se extraen los datos de ownerdata y admin de la ubicación actual.

Se renderiza una lista de canchas utilizando el método map en el array 'stadiums'. La lista de canchas se filtra según el valor de ownerdata y se crea un componente OwnerStadiumControl para cada cancha.

El componente muestra un formulario para agregar nuevos canchas. Cuando se envía el formulario, se realiza una llamada a la API utilizando el método axios.post para crear una nueva cancha.

Finalmente, se muestra un botón para navegar al panel de administrador si admin es true.*/

const OwnerPanel = () => {

  const [stadiums, setStadiums] = useState([])
  const [stadiumId, setStadiumId] = useState();
  useEffect(() => {
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
 

  const location = useLocation();
  const { ownerdata, admin } = location.state || {};

  const StadiumListAdmin = stadiums.map((v) => {
    if (ownerdata === "admin") {
      return <OwnerStadiumControl name={v.name} address={v.address} id={v.id} monday={v.monday} tuesday={v.tuesday} wednesday={v.wednesday} thursday={v.thursday} friday={v.friday} />
    }
  })

  const navigate = useNavigate();
  let ownerdatas = ownerdata.toString()
  const StadiumList = stadiums
    .filter(stadium => stadium.ownerid === ownerdatas)
    .map((v) => {
      return <OwnerStadiumControl name={v.name} address={v.address} id={v.id} monday={v.monday} tuesday={v.tuesday} wednesday={v.wednesday} thursday={v.thursday} friday={v.friday} />
    })

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium',
        {
          name,
          address,
          ownerid: ownerdatas
        }
      );
      window.location.reload();
      console.log('Estadio creado:', response.data);
      
    } catch (error) {
      console.error('Error al crear el estadio:', error);
    }
  };
  
    const goToAdmin = () => {
        navigate('/adminpanel');
      };  
  return (
    <div>
      <MenuBar />
      <div className='backplate scale-up-center'>
        <h1>Panel de dueños.</h1>
        <h5>Identificación: {ownerdata}</h5>
      </div>
      
      
      <div className="backplate scale-up-center">


        <h5>Administrar mis canchas</h5>
        <p>Recuerde que los dias en color rojo se encuentran reservados. Toque para cancelar la reserva o toque los dias en verde para impedir que alguien reserve ese dia. ADVERTENCIA: En caso de cancelar una reserva deberá avisar al cliente.</p>
        
        {StadiumList}
        {StadiumListAdmin}
        
        

      </div>
      <div className="backplate scale-up-center">
        <h3>Agregar canchas</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <input className='usuario_estilo inputowner'
              type="text"
              placeholder='Nombre de la cancha'
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address"></label>
            <input className='usuario_estilo inputowner'
              type="text"
              placeholder='Direccion'
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="btn btn-success" type="submit">Crear Estadio</button>
        </form>
        <p>Recuerde que para eliminar un estadio deberá comunicarse con un administrador.</p>
        {admin && (<button onClick={goToAdmin} className='btn btn-danger justify-content-center mt-2 ' href='/adminpanel' >Admin Panel</button>)}
      </div>

    </div>
  )
}

export default OwnerPanel