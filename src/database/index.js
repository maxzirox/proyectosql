var mysql = require('mysql');
const debug = require('debug')('app:database');
const { Config } = require('../config/index');


const dbConfig = {
  host: Config.host_bd,
  user: Config.nombre_usuario,
  password: Config.contrasena,
  database: Config.nombre_bd,
  port: 3306
};


const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    debug('Conexión exitosa a la base de datos');
    
  }
});

// Manejar errores de conexión
connection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err);
});

module.exports = connection;