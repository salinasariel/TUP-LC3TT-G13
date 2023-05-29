import { Link } from "react-router-dom";
import React, { useState } from 'react';
import MenuBar from "../MenuBar/MenuBar";


const SelectDay = ({ stadiumId }) => {
    
    const [stadiumsDisponibility, setStadiumsDisponibility] = React.useState([])
    
    React.useEffect(() =>{
        if(stadiumId != -1)
            getData()
    }, [stadiumId]);

    const getData = async () => {
        const data = await fetch(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${stadiumId}`)
        const stadium = await data.json()
        setStadiumsDisponibility(getDays(stadium))
    }

    const getDays = (stadium) => {
        const days = [];
        if(stadium.monday)
            days.push('lunes')
        if(stadium.thuesday)
            days.push('martes')
        if(stadium.whendesday)
            days.push('miercoles')
        if(stadium.thursday)
            days.push('jueves')
        if(stadium.friday)
            days.push('viernes')
        return days;
    }

    return(
        <MenuBar/>,
        <div className="backplate">
            <h1>Seleccione dia</h1>
            
            <form>
                <label>Seleccione el dia</label>
                <select className="form-select" name="Canchas">
                        {
                            stadiumsDisponibility.map(day =>(
                                <option key="day">{day}</option>
                            ))
                        }                   

                </select> <br></br>
                <button className="btn btn-success">Continuar</button>
            </form>
        </div>
    );

}
export default SelectDay;