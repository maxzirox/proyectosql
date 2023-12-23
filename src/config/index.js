require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    nombre_bd: process.env.NOMBRE_BD,
    contrasena: process.env.PASSWORD,
    nombre_usuario: process.env.NOMBRE_USUARIO,
    host_bd: process.env.HOST_BD
}