import React from 'react';
import './QRMIC.css';
import {Link} from 'react-router-dom';


function QRMIC() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= 'https://1.bp.blogspot.com/-vMgoEm8XjoE/X1TCRgGg6TI/AAAAAAAAAII/s4cm2Jk-YEImwJFAfHXrChvwtTmxwm5ZQCLcBGAsYHQ/s320/logo-brochure.png' className="logomenu" alt />
        <img src= 'https://1.bp.blogspot.com/-6lhPAUf7n3s/X2pxyYHQAtI/AAAAAAAAAKg/5mWk4VRyu88QJ5VgwNWAIJu8Dfdurw7QwCLcBGAsYHQ/s320/qr.png' className="qr" alt />
        <button  className="camara">
          <Link to="/chatconmicrofono" className="link">
         <img class='foto1' src="https://1.bp.blogspot.com/-MQiwIhDXUmE/X2p2o384i0I/AAAAAAAAAKs/-Azo6mjMzfE6yuXHpklvZZ4AaVYLPav3QCLcBGAsYHQ/s320/iconfinder_General_Office_60_3592837.png" alt="camara ico" height="80px" />
         </Link>
        </button>
        
      </header>
    </div>
    
  );
  
 
   }
   
export default QRMIC;
