
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear Servidor de Express
const app = express();

// Configurar CORS
app.use( cors() );

// Lectura y Parseo del Body
app.use( express.json() );

// Base de Datos
dbConnection();


// Rutas
app.use( '/api/usuarios', require( './routes/usuarios' ) );
app.use( '/api/login', require( './routes/auth' ) );


app.listen( process.env.PORT,() => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT );
});




// USUARIO Y CONTRASEÑA DE MONGODB COMPASS
//mean_user
//PfTxd38pUOXMBSMo