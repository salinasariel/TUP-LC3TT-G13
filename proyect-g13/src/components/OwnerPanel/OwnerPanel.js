import React from 'react'
import MenuBar from '../MenuBar/MenuBar'

function OwnerPanel() {
  return (
    <div>
      <MenuBar />
      <div className="backplate scale-up-center">
           
            <h3>Panel de dueños.</h3>
            <p>Aqui podra administar los turnos otorgados en su establecimiento.</p>
            <button  className='btn btn-warning'>Administrar mis canchas</button><br></br>

            <p>ADVERTENCIA: La suguiente funcion habilitara o desabilitara todos los turnos en todas las canchas de su establecimiento. Procure tener cuidado ya que puede cancelar turnos ya otorgados.</p>
            <button  className='btn btn-success'>Habilitar dias</button>
            <button  className='btn btn-danger'>Bloquear dias</button>
            
        </div>
    </div>
  )
}

export default OwnerPanel