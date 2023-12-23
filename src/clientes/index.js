const express = require('express');
const { ClientesController } = require('./controller');

const router = express.Router();

module.exports.ClientesAPI = (app) => {
    router
        .get('/', ClientesController.obtenerClientes);
    
    app.use('/api/clientes', router);
};