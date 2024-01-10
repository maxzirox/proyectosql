const connection = require('../../database/index');
const debug = require('debug')('app:users-controller');

const obtenerTodos = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM propiedad', (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const obtenerNumPropiedad = (nro_propiedad) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM propiedad WHERE nro_propiedad = ?`, [nro_propiedad], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const agregarPropiedad = (propiedad) => {
    return new Promise((resolve, reject) => {
        //console.log('cliente desde services: ', cliente)
        connection.query('INSERT INTO propiedad SET ?', [propiedad], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const modificarPropiedad = (nro_propiedad, propiedad) => {
    return new Promise((resolve, reject) => {
        // Crear una cadena de actualización basada en los nuevos datos proporcionados
        const updateQuery = 'UPDATE cliente SET ? WHERE numrut_cli = ?';

        // Realizar la consulta de actualización
        connection.query(updateQuery, [propiedad, nro_propiedad], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta de actualización:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const eliminarPropiedad = (nro_propiedad) => {
    return new Promise((resolve, reject) => {
        const deleteQuery = 'DELETE FROM cliente WHERE nro_propiedad = ?';
        connection.query(deleteQuery, [nro_propiedad], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta de eliminación:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports.PropiedadesServices = {
    obtenerTodos,
    obtenerNumPropiedad,
    agregarPropiedad,
    modificarPropiedad,
    eliminarPropiedad
};