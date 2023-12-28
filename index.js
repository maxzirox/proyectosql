const express = require('express')
const debug = require('debug')('app:server');
const bodyParser = require('body-parser');
const path = require('path');
const { Config } = require('./src/config/index');
const { ClientesAPI } = require('./src/routes/clientes/index')
const { EmpleadosAPI } = require('./src/routes/empleados/index')

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

ClientesAPI(app);
EmpleadosAPI(app);


app.listen(Config.port, ()=> {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
    //console.log('Servidor escuchando en puerto ', 3300)
});