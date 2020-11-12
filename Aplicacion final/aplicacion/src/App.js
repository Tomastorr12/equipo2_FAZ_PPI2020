import React from 'react';
import './App.css';
import Login from './Home/Login'
import Register from './Home/Register'
import menuciego from './Home/Menuciego';
import menusordomudo from './Home/Menusordomudo';
import menuhablante from './Home/Menuhablante';
import QRMIC from './Home/QRMIC';
import QRMIC2 from './Home/QRMIC2';
import QRSINMIC from './Home/QRSINMIC'
import señas from './Home/señas';
import chatconmicrofono from './Home/chatconmicrofono';
import chatsinmicrofono from './Home/chatsinmicrofono';
import chatconmicrofono2 from './Home/chatconmicrofono2';
import Route from 'react-router-dom/Route';
import carga from './Home/pantallacarga';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Route exact path="/" component={carga} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Menuciego" component={menuciego} />
            <Route exact path="/Menusordo" component={menusordomudo} />
            <Route exact path="/Menuhablante" component={menuhablante} />
            <Route exact path="/señas" component={señas} />
            <Route exact path="/QRMIC" component={QRMIC} />
            <Route exact path="/QRMIC2" component={QRMIC2} />
            <Route exact path="/QRSINMIC" component={QRSINMIC} />
            <Route exact path="/chatconmicrofono" component={chatconmicrofono} />
            <Route exact path="/chatsinmicrofono" component={chatsinmicrofono} />
            <Route exact path="/chatconmicrofono2" component={chatconmicrofono2} />
            <Route exact path="/carga" component={carga} />
        </BrowserRouter>
    </div>
  );
}

export default App;
