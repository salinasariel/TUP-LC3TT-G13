import "./MenuBar.css"
import Logo from "../../../src/Img/logoFootbal.png"

function MenuBarLogin()  {
  return (
    <nav  class="scale-up-vertical-top navbar navbar-expand-lg navbar-light backcolor">
      <div>
        <img class="high" src={Logo} />
        </div>
    
    <div class=" collapse navbar-collapse pad" id="navbarNav">
    </div>
  </nav>
  );
}
export default MenuBarLogin