const express = require('express');
const { ClientesController } = require('./controller');

const router = express.Router();

module.exports.ClientesAPI = (app) => {
    router
        .get('/', ClientesController.obtenerClientes)
        .get('/:rut', ClientesController.obtenerPorRut)
        .post('/', ClientesController.crearCliente)
        .put('/:rut', ClientesController.editarCliente)
        .delete('/:rut', ClientesController.removerCliente)
    
    app.use('/api/clientes', router);
};