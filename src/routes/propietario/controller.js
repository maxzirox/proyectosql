const createError = require('http-errors')
const { PropietariosServices } = require('./services')
const debug = require('debug')('app:users-controller');
const { Response } = require('../../common/response');

//error en controlador para mostrar el obj con los usuarios.

module.exports.propietarioController = {
    obtenerPropietarios: async (req, res) => {
        try {
            const  propietarios = await PropietariosServices.obtenerTodos()
            Response.succes(res, 200, 'Lista de propietarios',  propietarios)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }

    },
    
    obtenerPorRut: async (req, res) => {
        try {
            const { params: { numrut_prop, dvrut_prop }, } = req;
            const propietario = await PropietariosServices.obtenerNumPropiedad(numrut_prop, dvrut_prop)
            Response.succes(res, 200, 'Propiedatario seleccionada', propietario)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    crearPropietario: async (req, res) =>{
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else{
                await PropitarioServices.agregarPropiedad(body);
                Response.succes(res, 201, 'Propietario agregada', body);
            }
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    editarPropietario: async (req, res) => {
        const { body } = req;
        try {
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else{
                const { body, params: { numrut_prop, dvrut_prop } } = req;
                const updateById = await PropietarioServices.modificarPropiedad(numrut_prop, dvrut_prop, body)
                Response.succes(res, 200, `Propietario ${numrut_prop} modificada`, updateById)
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    removerPropietario: async (req, res) =>{
        try {
            const { body, params: { numrut_prop, dvrut_prop } } = req;
                await PropietarioServices.eliminarPropiedad(rut, dvrut_prop)
                Response.succes(res, 200, `Propietario ${numrut_prop} elimnada`)
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
}
