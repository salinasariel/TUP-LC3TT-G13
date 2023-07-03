import SelectStadium from "../SelectStadium/SelectStadium";
import "./Reserve.css";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/*EXPLICACION COMPONENTE RESERVE
 se importan los módulos necesarios y se define el componente Reserve. El componente recibe una prop llamada onFinish, que parece ser una función para manejar un evento de finalización.

Dentro del componente Reserve, se definen dos estados usando el Hook useState. 'stadiums' es un estado que almacena una lista de canchas, y stadiumId es un estado que almacena el ID de la cancha seleccionada.

Se utiliza el Hook useEffect con una función de callback para cargar los datos de las canchitas una vez que el componente se monta en el DOM. La función getData se define para realizar una solicitud GET a la URL 'https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium' y obtener la lista de canchitas. Luego, la lista de canchas se actualiza en el estado 'stadiums' mediante setStadiums.

El componente renderiza una lista de canchas utilizando el método map en el estado 'stadiums'. Por cada cancha, se crea un componente 'SelectStadium' pasando las propiedades name, address, id y los días disponibles (monday, tuesday, wednesday, thursday, friday).

Dentro del componente SelectStadium, se renderiza la información de la cancha y se asigna un evento onClick a cada opción para manejar la selección de la cancha. La función handleStadium se llama con el ID del estadio seleccionado.

Finalmente, el componente 'Reserve' tiene una sección opcional que muestra un botón "Admin Panel" si la prop admin es true. Al hacer clic en este botón, se navega hacia la ruta "/adminpanel" utilizando el Hook useNavigate.

En resumen, el componente Reserve muestra una lista de canchas y permite al usuario seleccionar una de ellas. Cuando se selecciona una cancha, se llama a la función handleStadium y se actualiza el estado stadiumId. Además, si la prop admin es true, se muestra un botón adicional para navegar al "Admin Panel".

 */

const Reserve = ({ onFinish }) => {

    const [stadiums, setStadiums] = useState([])
    const setStadiumId = useState();

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
   
    const StadiumList = stadiums.map((v) => {
        return <SelectStadium name={v.name} address={v.address} id={v.id} monday={v.monday} tuesday={v.tuesday} wednesday={v.wednesday} thursday={v.thursday} friday={v.friday} />
    })
    const location = useLocation();
    const { admin } = location.state;
    const navigate = useNavigate();
    const goToAdmin = () => {
        navigate('/adminpanel');
      };  
    return (
        <div className="backplate scale-up-center">
            <h1>Reservar</h1>
            <p>Seleccione el establecimiento en el que quiere reservar.</p>

            {StadiumList}
            <div>
                {admin && (<button onClick={goToAdmin} className='btn btn-danger justify-content-center mt-2 ' href='/adminpanel' >Admin Panel</button>)}
            </div>
        </div>

    );

}
export default Reserve;