import React from 'react';
import './chatsinmicrofono.css';
import {Link} from 'react-router-dom';

function chatsinmicrofono() {
  return (
    <div className="App">
        <div className="cabecera">
          <button className="Regresar">
          <Link to="/Menusordo" className="link">
           <img src="https://1.bp.blogspot.com/-J2o7uCILkDU/X2DJmHhtMNI/AAAAAAAAAJo/TJEtHd8AG_8Yz1YEPY4mgjpn5FV7aHmVACLcBGAsYHQ/s0/flecha.png" 
           alt="" height="70px" />
           </Link>
           </button>
           
           <label className="Nombre">
             Carla
           </label>
        </div>
        <div className="Medio">
          <img className="Logotransparente" src="https://1.bp.blogspot.com/-vMgoEm8XjoE/X1TCRgGg6TI/AAAAAAAAAII/s4cm2Jk-YEImwJFAfHXrChvwtTmxwm5ZQCLcBGAsYHQ/s320/logo-brochure.png" 
          alt=""/>
        </div>
        <div className="Abajo">
        <input 
        id="msg"
        name="msg"
        placeholder="Escribe un mensaje"
        type="text"
       />
        </div>
    </div>
  );
}

export default chatsinmicrofono;