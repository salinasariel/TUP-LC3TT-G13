import "./MenuBar.css"
import Logo from "../../../src/Img/logoFootbal.png"
import Reserve from "../Reserve/Reserve";
import { useNavigate } from 'react-router-dom';

function MenuBar()  {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <nav  class=" navbar navbar-expand-lg navbar-light backcolor">
      <div>
        <img class="high" src={Logo} />
      </div>
    
    <div class="nag collapse navbar-collapse pad" id="navbarNav">
    
      <h4 className="titelLog">CanchitasGol APP</h4>
      <button onClick={handleClick} className='btn btn-danger btn-sm ml-auto custom-button padi'  >Cerrar Sesión</button>
      
      
    </div>
  </nav>
  );
}
export default MenuBar;