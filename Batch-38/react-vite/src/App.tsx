//  import icons
import { FaApple, FaGoogle, FaFacebook, FaGithub     } from "react-icons/fa";

import Attributes from "./components/Attributes";
import "./App.css";
import ButtonSocial from "./components/ButtonSocial";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Attributes />
      
      <span className="attr_item">Bala</span>

      {/* <div className="flex flex-col gap-y-5">
      < ButtonSocial  lable="Apple"/>
      < ButtonSocial  lable="Google"/>
      < ButtonSocial  lable="Facebook"/>
      < ButtonSocial  lable="Github"/>
      </div> */}

      <div className="flex flex-col gap-y-5">
      <ButtonSocial icon = {<FaApple />}  lable="Apple" />
      <ButtonSocial varian="outline" icon = {<FaGoogle />}  lable="Google" />
      <ButtonSocial varian="outline" icon = {<FaFacebook  />}  lable="Facebook" />
      <ButtonSocial varian="success" icon = {<FaGithub/>}  lable="Github" />
      </div>
    </>
  );
}

export default App;
