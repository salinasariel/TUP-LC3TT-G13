import React from 'react'
import { useState, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar'
import OwnerStadiumControl from '../OwnerStadiumControl/OwnerStadiumControl'

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
  //const StadiumList = stadiums.map(item =>(
  //    <option key="item.id" onClick={() => handleStadium(item.id)}>{item.name}</option>
  //))
  const StadiumList = stadiums.map((v) => {
    return <OwnerStadiumControl name={v.name} address={v.address} id={v.id} monday={v.monday} tuesday={v.tuesday} wednesday={v.wednesday} thursday={v.thursday} friday={v.friday} />
  })
  return (
    <div>
      <MenuBar />
      <div className="backplate scale-up-center">

        <h3>Panel de dueños.</h3>
        <h5>Administrar mis canchas</h5>
        <p>Recuerde que los dias en color rojo se encuentran reservados. Toque para cancelar la reserva o toque los dias en verde para impedir que alguien reserve ese dia. ADVERTENCIA: En caso de cancelar una reserva deberá avisar al cliente.</p>
        {StadiumList}

        <p>ADVERTENCIA: La suguiente funcion habilitara o desabilitara todos los turnos en todas las canchas de su establecimiento. Procure tener cuidado ya que puede cancelar turnos ya otorgados.</p>
        <button className='btn btn-success'>Habilitar dias</button>
        <button className='btn btn-danger'>Bloquear dias</button>

      </div>
    </div>
  )
}

export default OwnerPanel