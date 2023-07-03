import "./MenuBar.css"
import Logo from "../../../src/Img/logoFootbal.png"
import Reserve from "../Reserve/Reserve";
import { useNavigate } from 'react-router-dom';
/*EXPLICACION DEL COMPONENTE MenuBar
creamos la función MenuBar que define un componente de función llamado 'MenuBar'.
Dentro de la función, se utiliza useNavigate de React Router para acceder a la función de navegación.

La función handleClick se ejecuta cuando se hace clic en el botón "Cerrar Sesión". Utiliza la función navigate para redirigir al usuario a la página principal ("/").

El componente MenuBar devuelve JSX que representa una barra de navegación. 

Hay un botón "Cerrar Sesión" representado por la etiqueta button. Al hacer clic en el botón, se llama a la función handleClick para redirigir al usuario a la página principal. */

function MenuBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <nav  class=" navbar navbar-expand-lg navbar-light backcolor">
      <div>
        <img class="high logo pagina" src={Logo} />
      </div>
    
    <div class="nag collapse navbar-collapse pad" id="navbarNav">
    
      <h4 className="titelLog">CanchitasGol APP</h4>
      <button onClick={handleClick} className='btn btn-danger btn-sm ml-auto custom-button padi'  >Cerrar Sesión</button>
      
    </div>
  </nav>
  );
}
export default MenuBar;