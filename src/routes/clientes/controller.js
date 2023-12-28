const createError = require('http-errors')
const { ClientesServices } = require('./services')
const debug = require('debug')('app:users-controller');
const { Response } = require('../../common/response');

//error en controlador para mostrar el obj con los usuarios.

module.exports.ClientesController = {
    obtenerClientes: async (req, res) => {
        try {
            const clientes = await ClientesServices.obtenerTodos()
            Response.succes(res, 200, 'Lista de clientes', clientes)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }

    },
    
    obtenerPorRut: async (req, res) => {
        try {
            const { params: { rut }, } = req;
            const cliente = await ClientesServices.obtenerRut(rut)
            Response.succes(res, 200, 'Lista de clientes', cliente)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    crearCliente: async (req, res) =>{
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else{
                await ClientesServices.agregarCliente(body);
                Response.succes(res, 201, 'Cliente agregado', body);
            }
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    editarCliente: async (req, res) => {
        const { body } = req;
        try {
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else{
                const { body, params: { rut } } = req;
                const updateById = await ClientesServices.modificarCliente(rut, body)
                Response.succes(res, 200, `Cliente ${rut} modificado`, updateById)
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    removerCliente: async (req, res) =>{
        try {
            const { body, params: { rut } } = req;
                await ClientesServices.eliminarCliente(rut)
                Response.succes(res, 200, `Cliente ${rut} elimnado`)
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
}
