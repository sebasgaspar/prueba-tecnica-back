import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import http from 'http';
import routes from './routes';
import { dbConnection } from './database/config';
require('dotenv').config();

//MONGOCONNECT
dbConnection();

// App de Express
const app: Application = express();

const port = process.env.PORT || '3001';
app.set('port', port);

//Lectura y parseo del body
app.use(express.json()); 

// CORS
app.use(cors())

// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//Mis Rutas
app.use('/', routes);

// CREATE SERVER
var server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
    console.log('Servidor corriendo en puerto as', process.env.PORT);
});
