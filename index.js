const express = require('express')
const debug = require('debug')('app:server');
const bodyParser = require('body-parser');
const path = require('path');
const { Config } = require('./src/config/index');
const { ClientesAPI } = require('./src/clientes/index')

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

ClientesAPI(app);


app.listen(Config.port, ()=> {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
    //console.log('Servidor escuchando en puerto ', 3300)
});