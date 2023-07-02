


import { useState } from "react";
import MenuBar from "../MenuBar/MenuBar";
import Reserve from "../Reserve/Reserve";
import SelectDay from "../SelectDay/SelectDay";

const HomePage = ({ onLogout }) =>{
    const [stadiumId,setStadiumId] = useState(-1);

    const handleReserve = (id) => {
        setStadiumId(id);
    }

    return(
        <>
            <MenuBar/>
            {stadiumId === -1
            ? <Reserve onFinish={handleReserve}/>
            : <SelectDay stadiumId={stadiumId}/>
            }
        </>
    );

}
export default HomePage;