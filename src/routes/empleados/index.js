const express = require('express');
const { EmpleadosController } = require('./controller');

const router = express.Router();

module.exports.EmpleadosAPI = (app) => {
    router
        .get('/', EmpleadosController.obtenerEmpleados)
        .get('/:rut/:verificador', EmpleadosController.obtenerPorRut)
        .post('/', EmpleadosController.crearEmpleado)
        .put('/:rut', EmpleadosController.editarEmpleado)
        .delete('/:rut', EmpleadosController.removerEmpleado)
    
    app.use('/api/empleados', router);
};