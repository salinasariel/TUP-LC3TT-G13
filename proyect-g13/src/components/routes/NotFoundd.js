import React from "react";

import { useNavigate } from "react-router-dom";

const NotFoundd = () => {
    const navigation = useNavigate();
    

    const goBackHandler = () => {
        navigation("/Login");
    };

    return (

    <div className="d-flex flex-column justify-content-center aling-item-center">
     <h2> La pagina no esta disponible </h2>
        <button className="w-25">
            volver al login
        </button>
    </div>
    
    );
};

export default NotFoundd;