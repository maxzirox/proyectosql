const connection = require('../database/index');
const debug = require('debug')('app:users-controller');

const getAll = () => {
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

module.exports.ClientesServices = {
    getAll
};