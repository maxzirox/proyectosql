const createError = require('http-errors')
const { EmpleadosServices } = require('./services')
const debug = require('debug')('app:users-controller');
const { Response } = require('../../common/response');

//error en controlador para mostrar el obj con los usuarios.

module.exports.EmpleadosController = {
    obtenerEmpleados: async (req, res) => {
        try {
            const empleados = await EmpleadosServices.obtenerTodos()
            Response.succes(res, 200, 'Lista de Empleados', empleados)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }

    },
    
    obtenerPorRut: async (req, res) => {
        try {
            const { params: { rut, verificador }, } = req;
            const empleado = await EmpleadosServices.obtenerRut(rut, verificador)
            Response.succes(res, 200, 'Lista de Empleados', empleado)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    crearEmpleado: async (req, res) =>{
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else{
                await EmpleadosServices.agregarEmpleado(body);
                Response.succes(res, 201, 'Empleado agregado', body);
            }
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    editarEmpleado: async (req, res) => {
        const { body } = req;
        try {
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else{
                const { body, params: { rut } } = req;
                const updateById = await EmpleadosServices.modificarEmpleado(rut, body)
                Response.succes(res, 200, `Empleado ${rut} modificado`, updateById)
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    removerEmpleado: async (req, res) =>{
        try {
            const { body, params: { rut } } = req;
                await EmpleadosServices.eliminarEmpleado(rut)
                Response.succes(res, 200, `Empleado ${rut} elimnado`)
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
}
