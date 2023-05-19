import React from "react";
import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const NotFoundd = () => {
    const navigation = useNavigate();
    

    const goBackHandler = () => {
        navigation("/login");
    };

    return (

    <div className="d-flex flex-column justify-content-center aling-item-center">
     <h2> La pagina no esta disponible </h2>
        <Button className="w-25" onClick={goBackHandler}>
            volver al login
        </Button>
    </div>
    
    );
};

export default NotFoundd;