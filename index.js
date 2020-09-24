
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear Servidor de Express
const app = express();

// Configurar CORS
app.use( cors() );

// Base de Datos
dbConnection();

//mean_user
//PfTxd38pUOXMBSMo

// Rutas
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
});

app.listen( process.env.PORT,() => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT );
});