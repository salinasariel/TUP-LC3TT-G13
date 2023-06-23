import SelectStadium from "../SelectStadium/SelectStadium";
import "./Reserve.css";
import React, { useState, useEffect } from 'react';

const Reserve = ({ onFinish }) =>{
    
    const [stadiums, setStadiums]= useState([])
    const [stadiumId,setStadiumId] = useState();

    useEffect(() =>{
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
    //const StadiumList = stadiums.map(item =>(
    //    <option key="item.id" onClick={() => handleStadium(item.id)}>{item.name}</option>
    //))
    const StadiumList = stadiums.map((v) =>{
        return <SelectStadium name= {v.name} address= {v.address} id={v.id} monday= {v.monday} tuesday={v.tuesday} wednesday={v.wednesday} thursday={v.thursday} friday={v.friday}/>
    })

    return(
        <div className="backplate">
            <h1>Reservar</h1>
            <p>Seleccione el establecimiento en el que quiere reservar.</p>
            
            {StadiumList}

        </div>
    );

}
export default Reserve;