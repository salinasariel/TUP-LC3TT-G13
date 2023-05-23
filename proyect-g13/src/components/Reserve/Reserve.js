import "./Reserve.css";
import React from 'react';

const Reserve = () =>{
    
    const [stadiums, setStadiums]= React.useState([])
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

    return(
        <div className="backplate">
            <h1>Reservar</h1>
            
            <form>
                
                <label>Seleccione el establecimiento en el que quiere reservar.</label>
                <select className="form-select" name="Canchas">
                        {
                            stadiums.map(item =>(
                                <option key="item.id">{item.name}</option>
                            ))
                        }                   

                </select> <br></br>
                <button className="btn btn-success">Continuar</button>
            </form>
        </div>
    );

}
export default Reserve;