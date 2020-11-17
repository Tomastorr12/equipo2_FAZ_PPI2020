const express = require('express');
const app = express();
const usersRouter = require('./routes/usuaios'); //Ruta o rutas de donde se conectara

// Ajustes
app.set('port', 3000 || 8080);

// Middlewares
app.use(express.json());


// Acá agregamos las nuevas rutas
app.use('/', usersRouter);
// app.use('/', historyRouter);
// app.use('/', chatRouter);



// Routes//
// app.get('/', (req, res) => {
//     res.send('pagina de inicio')
// })

app.set('json spaces', 2);
//require ('dotenv').config



// Ajustes del servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});