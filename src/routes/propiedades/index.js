const express = require('express');
const { PropiedadesController } = require('./controller');

const router = express.Router();

module.exports.PropiedadesAPI = (app) => {
    router
        .get('/', PropiedadesController.obtenerPropiedades)
        .get('/:nro_propiedad', PropiedadesController.obtenerPorNumero)
        .post('/', PropiedadesController.crearPropiedad)
        .put('/:nro_propiedad', PropiedadesController.editarPropiedad)
        .delete('/:nro_propiedad', PropiedadesController.removerPropiedad)
    
    app.use('/api/propiedades', router);
};