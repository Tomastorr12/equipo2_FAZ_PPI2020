import React from 'react';
import {Link} from 'react-router-dom';
import './Menuciego.css';


function menuciego() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= 'https://1.bp.blogspot.com/-vMgoEm8XjoE/X1TCRgGg6TI/AAAAAAAAAII/s4cm2Jk-YEImwJFAfHXrChvwtTmxwm5ZQCLcBGAsYHQ/s320/logo-brochure.png' className="logomenu" alt />
        <h5 className="eligeconquien">Elige con quien deseas comunicarte</h5>
        <button className="botoncambio">
        <Link to="/QRMIC2" className="link">
          <img src= 'https://1.bp.blogspot.com/-2yTuk1zlMbk/X1bs7D_xxnI/AAAAAAAAAIc/iYH5TjSOZFEy97DocOSa_yl7LmSxUBlCgCLcBGAsYHQ/s0/379448-64.png' className="" alt />
          <br></br>
           Quiero comunicarme con una persona sordo-muda.
          </Link>
          </button>
       
        
        <nav>
        <ul id="menu">
        <button className="botoncambio2">
            <Link to="/Login" className="link">Cerrar sesión</Link>
          </button>
          
        </ul>
      </nav>
          
      </header>
    </div>
    
  );
  
   }



export default menuciego;