const createError = require('http-errors')
const { PropiedadesServices } = require('./services')
const debug = require('debug')('app:users-controller');
const { Response } = require('../../common/response');

//error en controlador para mostrar el obj con los usuarios.

module.exports.PropiedadesController = {
    obtenerPropiedades: async (req, res) => {
        try {
            const  propiedades = await PropiedadesServices.obtenerTodos()
            Response.succes(res, 200, 'Lista de propiedades',  propiedades)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }

    },
    
    obtenerPorNumero: async (req, res) => {
        try {
            const { params: { nro_propiedad }, } = req;
            const propiedades = await PropiedadesServices.obtenerNumPropiedad(nro_propiedad)
            Response.succes(res, 200, 'Propiedad seleccionada', propiedades)
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    crearPropiedad: async (req, res) =>{
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else{
                await PropiedadesServices.agregarPropiedad(body);
                Response.succes(res, 201, 'Propiedad agregada', body);
            }
            
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    editarPropiedad: async (req, res) => {
        const { body } = req;
        try {
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else{
                const { body, params: { nro_propiedad } } = req;
                const updateById = await PropiedadesServices.modificarPropiedad(nro_propiedad, body)
                Response.succes(res, 200, `Propiedad ${nro_propiedad} modificada`, updateById)
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    removerPropiedad: async (req, res) =>{
        try {
            const { body, params: { nro_propiedad } } = req;
                await PropiedadesServices.eliminarPropiedad(nro_propiedad)
                Response.succes(res, 200, `Propiedad ${nro_propiedad} elimnada`)
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
}
