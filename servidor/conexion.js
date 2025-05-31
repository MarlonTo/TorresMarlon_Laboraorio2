/**
 * Configuración del pool de conexiones a MySQL
 */
const mysql = require('mysql2');

// Crear el pool de conexiones
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda'
});

/**
 * Obtiene una conexión del pool
 * @param {Function} callback - (err, connection)
 */
function getConnection(callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('❌ Error de Conexion: ' + err.stack);
            return callback(err);
        }
        console.log('✅ Conexión exitosa. Thread ID: ' + connection.threadId);
        callback(null, connection);
    });
}

module.exports = getConnection;