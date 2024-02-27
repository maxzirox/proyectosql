const connection = require('../../database/index');
const debug = require('debug')('app:users-controller');

const obtenerTodos = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM propietario', (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const obtenerNumPropiedad = (numrut_prop, dvrut_prop) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM propietario WHERE nro_propiedad = ? AND dcrut_prop = ?`, [numrut_prop, dvrut_prop], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const agregarPropietario = (propiedad) => {
    return new Promise((resolve, reject) => {
        //console.log('cliente desde services: ', cliente)
        connection.query('INSERT INTO propietario SET ?', [propiedad], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const modificarPropietario= (nro_propiedad, propiedad) => {
    return new Promise((resolve, reject) => {
        // Crear una cadena de actualización basada en los nuevos datos proporcionados
        const updateQuery = 'UPDATE propietario SET ? WHERE numrut_cli = ?';

        // Realizar la consulta de actualización
        connection.query(updateQuery, [numrut_prop, dvrut_prop], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta de actualización:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const eliminarPropietario = (nro_propiedad) => {
    return new Promise((resolve, reject) => {
        const deleteQuery = 'DELETE FROM propietario WHERE nro_propiedad = ?';
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
    agregarPropietario,
    modificarPropietario,
    eliminarPropietario
};