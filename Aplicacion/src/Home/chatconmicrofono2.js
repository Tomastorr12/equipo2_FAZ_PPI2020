import React from 'react';
import './chatconmicrofono2.css';
import {Link} from 'react-router-dom';

function chatsinmicrofono2() {
  return (
    <div className="App">
        <div className="cabecera">
        <button className="Regresar">
            <Link to="/Menuciego" className="link">
           <img src="https://1.bp.blogspot.com/-J2o7uCILkDU/X2DJmHhtMNI/AAAAAAAAAJo/TJEtHd8AG_8Yz1YEPY4mgjpn5FV7aHmVACLcBGAsYHQ/s0/flecha.png" 
           alt="" height="70px" />
           </Link>
           </button>
           <img className="Fotodeperfil" src="https://1.bp.blogspot.com/-OP2Dlab-tIc/X2DMbSjO07I/AAAAAAAAAJ0/He_1nFZLvdc8sh9c8wiCD3jqFKMYltQEQCLcBGAsYHQ/s0/perfil.png" alt=""
           height="60px"/>
           <label className="Nombre">
             Daniel
           </label>
        </div>
        <div className="Medio">
          <img className="Logotransparente" src="https://1.bp.blogspot.com/-vMgoEm8XjoE/X1TCRgGg6TI/AAAAAAAAAII/s4cm2Jk-YEImwJFAfHXrChvwtTmxwm5ZQCLcBGAsYHQ/s320/logo-brochure.png" 
          alt=""/>
        </div>
        <div className="Abajo">
          <button className="Microfono">
            <img src="https://1.bp.blogspot.com/-adV0fp9PMWE/X2DQZkxiN-I/AAAAAAAAAKA/IZoH4SSkxTIIRGCu6xl9C3d_mMiidd4DwCLcBGAsYHQ/s320/Microfono.png" 
            alt="" height="150px" />
          </button>
        </div>
    </div>
  );
}

export default chatsinmicrofono2;