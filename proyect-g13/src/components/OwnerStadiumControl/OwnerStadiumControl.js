import {React, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { navigate } from 'react-router-dom';

const OwnerStadiumControl = ({ id, name, monday, tuesday, wednesday, thursday, friday, address }) => {

    const [mondaydayS, setmonday] = useState(monday)
    const [tuesdaydayS, setTuesday] = useState(tuesday)
    const [wednesdayS, setWendesday] = useState(wednesday)
    const [thursdayS, setThursdayS] = useState(thursday)
    const [fridayS, setFridayS] = useState(friday)

    const allowDay = (day) => {

        const updatedDay = {
            [day]: true
        };

        axios.put(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${id}`, updatedDay)
            .then(response => {
                console.log(response.data);
                if (day === 'monday') {
                    setmonday(true)
                }
                if (day === 'tuesday') {
                    setTuesday(true)
                }
                if (day === 'wednesday') {
                    setWendesday(true)
                }
                if (day === 'thursday') {
                    setThursdayS(true)
                }
                if (day === 'friday') {
                    setFridayS(true)
                }
                
            })
            .catch(error => {
                console.error(error);
                toast.error("Ocurrio un error" + error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            });

    };
    const blockDay = (day) => {
        
        const updatedDay = {
            [day]: false
        };
        

        axios.put(`https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/stadium/${id}`, updatedDay)
            .then(response => {
                console.log(response.data);
                if (day === 'monday') {
                    setmonday(false)
                }
                if (day === 'tuesday') {
                    setTuesday(false)
                }
                if (day === 'wednesday') {
                    setWendesday(false)
                }
                if (day === 'thursday') {
                    setThursdayS(false)
                }
                if (day === 'friday') {
                    setFridayS(false)
                }
            })

            .catch(error => {
                console.error(error);
                toast.error("Ocuttio un error" + error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            });

    };

    return (
        <div className='ownerstadium scale-up-center'>
            <h4>{name}</h4>
            <p>{address}</p>
            {mondaydayS ? (<button onClick={() => blockDay("monday")} className="btn btn-success">LUNES</button>) : (<button onClick={() => allowDay("monday")} className="btn btn-danger">LUNES</button>)}
            {tuesdaydayS ? (<button onClick={() => blockDay("tuesday")}  className="btn btn-success">MARTES</button>) : (<button onClick={() => allowDay("tuesday")} className="btn btn-danger">MARTES</button>)}
            {wednesdayS ? (<button onClick={() => blockDay("wednesday")} className="btn btn-success">MIERCOLES</button>) : (<button onClick={() => allowDay("wednesday")} className="btn btn-danger">MIERCOLES</button>)}
            {thursdayS ? (<button onClick={() => blockDay("thursday")} className="btn btn-success">JUEVES</button>) : (<button onClick={() => allowDay("thursday")} className="btn btn-danger">JUEVES</button>)}
            {fridayS ? (<button onClick={() => blockDay("friday")} className="btn btn-success">VIERNES</button>) : (<button onClick={() => allowDay("friday")} className="btn btn-danger">VIERNES</button>)}

        <ToastContainer/>
        </div>
    );



};

export default OwnerStadiumControl