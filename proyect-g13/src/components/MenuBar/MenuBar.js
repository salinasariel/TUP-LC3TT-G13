import "./MenuBar.css"
import Logo from "../../../src/Img/logoFootbal.png"
import Reserve from "../Reserve/Reserve";

function MenuBar()  {
  return (
    <nav  class=" navbar navbar-expand-lg navbar-light backcolor">
      <div>
        <img class="high" src={Logo} />
        </div>
    
    <div class=" collapse navbar-collapse pad" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#"><b>Home</b> <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>Reservar</b></a>
        </li>
        
      </ul>
    </div>
  </nav>
  );
}
export default MenuBar;