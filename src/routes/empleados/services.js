const connection = require('../../database/index');
const debug = require('debug')('app:users-controller');

const obtenerTodos = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM empleado', (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const obtenerRut = (rut, digito) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM empleado WHERE numrut_emp = ? AND dvrut_emp = ?'
        connection.query(query, [rut, digito], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const agregarEmpleado = (empleado) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO empleado SET ?', [empleado], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const modificarEmpleado = (rut, empleado) => {
    return new Promise((resolve, reject) => {
        // Crear una cadena de actualización basada en los nuevos datos proporcionados
        const updateQuery = 'UPDATE empleado SET ? WHERE numrut_emp = ?';

        // Realizar la consulta de actualización
        connection.query(updateQuery, [empleado, rut], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta de actualización:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const eliminarEmpleado = (rut, verificador) => {
    return new Promise((resolve, reject) => {
        const deleteQuery = 'DELETE FROM empleado WHERE numrut_emp = ? AND dvrut_emp = ?';
        connection.query(deleteQuery, [rut, verificador], (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta de eliminación:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports.EmpleadosServices = {
    obtenerTodos,
    obtenerRut,
    agregarEmpleado,
    modificarEmpleado,
    eliminarEmpleado
};