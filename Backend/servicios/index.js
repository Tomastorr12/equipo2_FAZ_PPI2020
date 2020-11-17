const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

// Ajustes
app.set('port',3000);

// Middlewares
app.use(express.json());



app.use('/api',routes);



// Routes//
app.get('/', (req,res)=>{
  res.send('pagina de inicio')
})

app.set('json spaces',2);
//require ('dotenv').config



// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 
