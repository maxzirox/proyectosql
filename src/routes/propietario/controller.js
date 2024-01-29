const createError = require('http-errors')
const { PropietarioServices } = require('./services')
const debug = require('debug')('app:users-controller');
const { Response } = require('../../common/response');

//error en controlador para mostrar el obj con los usuarios.

module.exports.PropiedadesController = {
    obtenerPropietarios: async (req, res) => {
        try {
            const  propiedades = await PropietariosServices.obtenerTodos()
            Response.succes(res, 200, 'Lista de propiedades',  propiedades)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }

    },
    
    obtenerPorNumero: async (req, res) => {
        try {
            const { params: { nro_propiedad }, } = req;
            const propiedades = await PropitariosServices.obtenerNumPropiedad(nro_propiedad)
            Response.succes(res, 200, 'Propiedad seleccionada', propiedades)
            
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
                Response.succes(res, 201, 'Propiedad agregada', body);
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
                const { body, params: { nro_propiedad } } = req;
                const updateById = await PropietarioServices.modificarPropiedad(nro_propiedad, body)
                Response.succes(res, 200, `Propiedad ${nro_propiedad} modificada`, updateById)
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    removerPropietario: async (req, res) =>{
        try {
            const { body, params: { nro_propiedad } } = req;
                await PropietarioServices.eliminarPropiedad(rut)
                Response.succes(res, 200, `Propiedad ${nro_propiedad} elimnada`)
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
}
