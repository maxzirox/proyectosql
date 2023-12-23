const createError = require('http-errors')
const { ClientesServices } = require('./services')
const debug = require('debug')('app:users-controller');
const { Response } = require('../common/response');

//error en controlador para mostrar el obj con los usuarios.

module.exports.ClientesController = {
    obtenerClientes: async (req, res) => {
        try {
            const clientes = await ClientesServices.getAll()
            Response.succes(res, 200, 'Lista de clientes', clientes)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }

    }
}
