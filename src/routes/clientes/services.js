const connection = require('../../database/index');
const debug = require('debug')('app:users-controller');

const obtenerTodos = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cliente', (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const obtenerRut = (rut) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM cliente WHERE numrut_cli = ${rut}`, (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const agregarCliente = (cliente) => {
    return new Promise((resolve, reject) => {
        //console.log('cliente desde services: ', cliente)
        connection.query('INSERT INTO cliente SET ?', cliente, (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const modificarCliente = (rut, cliente) => {
    return new Promise((resolve, reject) => {
        // Crear una cadena de actualización basada en los nuevos datos proporcionados
        const updateQuery = 'UPDATE cliente SET ? WHERE numrut_cli = ?';

        // Realizar la consulta de actualización
        connection.query(updateQuery, [cliente, rut], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta de actualización:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const eliminarCliente = (rut) => {
    return new Promise((resolve, reject) => {
        const deleteQuery = 'DELETE FROM cliente WHERE numrut_cli = ?';
        connection.query(deleteQuery, [rut], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta de eliminación:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports.ClientesServices = {
    obtenerTodos,
    obtenerRut,
    agregarCliente,
    modificarCliente,
    eliminarCliente
};