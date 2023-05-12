import "./MenuBar.css"
import Logo from "../../../src/Img/logoFootbal.png"

function MenuBar()  {
  return (
    <nav  class="scale-up-vertical-top navbar navbar-expand-lg navbar-light backcolor">
      <div>
        <img class="high" src={Logo} />
        </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
    </button>
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