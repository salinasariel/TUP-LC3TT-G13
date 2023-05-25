import "./Reserve.css";
import React, { useState } from 'react';
import MenuBar from "../MenuBar/MenuBar";

const Reserve = ({ onFinish }) =>{
    
    const [stadiums, setStadiums]= React.useState([])
    const [stadiumId,setStadiumId] = React.useState();

    React.useEffect(() =>{
        //console.log('useEffect')
        getData()
        
    }, []);

    const getData = async () =>{
        const data = await fetch('https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium')
        const ourStadiums = await data.json()
        //console.log(ourStadiums)
        setStadiums(ourStadiums)
    }

    const handleStadium = (id) => {
        console.log(id)
        setStadiumId(id);
    }

    return(
        <div className="backplate">
            <h1>Reservar</h1>
            
            <form>
                
                <label>Seleccione el establecimiento en el que quiere reservar.</label>
                <select className="form-select" name="Canchas">
                        {
                            stadiums.map(item =>(
                                <option key="item.id" onClick={() => handleStadium(item.id)}>{item.name}</option>
                            ))
                        }                   

                </select> <br></br>
                <button className="btn btn-success" onClick={() => onFinish(stadiumId)}>
                    Continuar
                </button>
            </form>
        </div>
    );

}
export default Reserve;