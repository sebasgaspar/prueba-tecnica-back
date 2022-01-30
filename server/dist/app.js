"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const routes_1 = __importDefault(require("./routes"));
const config_1 = require("./database/config");
require('dotenv').config();
//MONGOCONNECT
(0, config_1.dbConnection)();
// App de Express
const app = (0, express_1.default)();
const port = process.env.PORT || '3001';
app.set('port', port);
//Lectura y parseo del body
app.use(express_1.default.json());
// CORS
app.use((0, cors_1.default)());
// Path público
const publicPath = path_1.default.resolve(__dirname, 'public');
app.use(express_1.default.static(publicPath));
//Mis Rutas
app.use('/', routes_1.default);
// CREATE SERVER
var server = http_1.default.createServer(app);
server.listen(port);
server.on('listening', () => {
    console.log('Servidor corriendo en puerto as', process.env.PORT);
});
