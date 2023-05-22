import "./MenuBar.css"
import Logo from "../../../src/Img/logoFootbal.png"

function MenuBarLogin()  {
  return (
    <nav  class="scale-up-vertical-top navbar navbar-expand-lg navbar-light backcolor">
      <div>
        <img class="high" src={Logo} />
        </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" collapse navbar-collapse pad" id="navbarNav">
    </div>
  </nav>
  );
}
export default MenuBarLogin