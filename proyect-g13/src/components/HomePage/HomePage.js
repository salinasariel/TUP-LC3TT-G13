import { Button, Col, Row } from "react-bootstrap"


import MenuBar from "../MenuBar/MenuBar";
import Reserve from "../Reserve/Reserve";
import { useNavigate } from "react-router-dom";

const HomePage = ({onLogout}) =>{
    const navigation = useNavigate()
    const onLogoutHandler = () =>{
        onLogout()
        navigation("/login")
    }

    return(
        <>
        <Row className="me-2 my-4">
            <Col />
            <Col md={3} className="d-flex justify-content-end">
                <Button variant="primary" onClick={onLogoutHandler}>
                     Cerrar Sesion
                </Button>
            </Col>
        </Row>
        <MenuBar/>
        <Reserve />
        </>
    );

}
export default HomePage;