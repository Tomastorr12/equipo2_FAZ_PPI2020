import React from 'react';
import {Link} from 'react-router-dom';
import './Menusordomudo.css';



function menusordomudo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= 'https://1.bp.blogspot.com/-vMgoEm8XjoE/X1TCRgGg6TI/AAAAAAAAAII/s4cm2Jk-YEImwJFAfHXrChvwtTmxwm5ZQCLcBGAsYHQ/s320/logo-brochure.png' className="logomenu" alt />
        <h5 className="eligeconquien">Elige con quien deseas comunicarte</h5>
        <button className="botoncambio">
          <Link to="/QRSINMIC">
          <img src= 'https://1.bp.blogspot.com/-qKOfszT2xms/X1btVvCCzlI/AAAAAAAAAIo/kLiI2ukVA0AWVwgEiAjKZYyZxBAC_XIZACLcBGAsYHQ/s0/379444-128.png' className="" alt />
          <br></br>
          Con una persona invidente.
          </Link>     
        </button>
        <button className="botoncambio"><Link to="/QRSINMIC" className="link">
          <img src= 'https://1.bp.blogspot.com/-Hn29x7nDGPU/X1btyCfru1I/AAAAAAAAAIw/N9Q2B8KgUtYSlidn8LFaT7wXs2g-yaVswCLcBGAsYHQ/s0/379357-128.png' className="" alt />
          <br></br>
          Con una persona sin discapacidad.
          </Link>
          </button>
        
        <nav>
        
          <button className="botoncambio2">
            <Link to="/Login" className="link">Cerrar sesión</Link>
          </button>
          
          
         
          
        
        
      </nav>
          
      </header>
    </div>
    
  );
 
   }



export default menusordomudo;
