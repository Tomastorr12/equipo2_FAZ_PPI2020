import React from 'react';
import Label from './Components/pages/Labelcreate/Label';
import './señas.css'
import {Link} from 'react-router-dom';
 

function señas() {
  return (
    <div className="App">
      <header className="App-header">
      <button className="Regresar">
            <Link to="/Menuhablante" className="link">
           <img src="https://1.bp.blogspot.com/-J2o7uCILkDU/X2DJmHhtMNI/AAAAAAAAAJo/TJEtHd8AG_8Yz1YEPY4mgjpn5FV7aHmVACLcBGAsYHQ/s0/flecha.png" 
           alt="" height="70px" />
           </Link>
           </button>
        <img src="logo-brochure.png" className="logoseña" alt="" />
       
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
       <h1 className="seleccionaunaletra">SELECCIONA UNA LETRA </h1> 
        </a>
      </header>
      <ul id="lista1">
             <li>
                 <a><button className="button12"><img src="a.JPG" className="" alt=""  width="50" height="50"/><center>A</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="b.JPG" className="" alt=""  width="50" height="50" /><center>B</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="c.JPG" className="" alt=""  width="50" height="50"/><center>C</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="d.JPG" className="" alt="" width="50" height="50" /><center>D</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="e.JPG" className="" alt=""   width="50" height="50" /><center>E</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="f.JPG" className="" alt=""  width="50" height="50"/><center>F</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="g.JPG" className="" alt=""  width="50" height="50"/><center>G</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="h.JPG" className="" alt=""  width="50" height="50"/><center>H</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="i.JPG" className="" alt=""  width="50" height="50" /><center>I</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="j.JPG" className="" alt=""  width="50" height="50"/><center>J</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="k.JPG" className="" alt=""  width="50" height="50"/><center>K</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="l.JPG" className="" alt=""  width="50" height="50"/><center>L</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="m.JPG" className="" alt=""  width="50" height="50"/><center>M</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="n.JPG" className="" alt=""  width="50" height="50"/><center>N</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="o.JPG" className="" alt=""  width="50" height="50"/><center>O</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="p.JPG" className="" alt=""  width="50" height="50"/><center>P</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="q.JPG" className="" alt=""  width="50" height="50"/><center>Q</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="r.JPG" className="" alt=""  width="50" height="50"/><center>R</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="s.JPG" className="" alt=""  width="50" height="50"/><center>S</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="t.JPG" className="" alt=""  width="50" height="50"/><center>T</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="u.JPG" className="" alt="" width="50" height="50"/><center>U</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="w.JPG" className="" alt="" width="50" height="50" /><center>V</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="w.JPG" className="" alt="" width="50" height="50" /><center>W</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="x.JPG" className="" alt="" width="50" height="50"/><center>X</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="y.JPG" className="" alt="" width="50" height="50"/><center>Y</center></button></a>
             </li>
             <li>
                 <a><button className="button12"><img src="z.JPG" className="" alt="" width="50" height="50"/><center>Z</center></button></a>
             </li>
         </ul>
    </div>
  );
}

export default señas;
