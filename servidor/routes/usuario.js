/**
 * Rutas relacionadas a usuarios
 */
const express = require('express');
const router = express.Router();
const getConnection = require('../conexion');

// Consultar todos los usuarios
router.get('/consultarUsuarios', (req, res) => {
    console.log('Consultando todos los usuarios...');
    getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: 'Error de conexión a la base de datos' });
        }
        connection.query('SELECT * FROM usuario', (err, rows) => {
            connection.release();
            if (err) {
                return res.status(500).json({ error: 'Error al consultar los usuarios' });
            }
            res.json(rows);
        }
        );
    });
});

// Consultar usuario por cédula
router.get('/buscarUsuarioCedula/:cedula', (req, res) => {
    console.log('Consultando usuario por cédula...');
    const cedula = req.params.cedula;
    getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: 'Error de conexión a la base de datos' });
        }
        connection.query(
            'SELECT * FROM usuario WHERE cedulausuario = ?',
            [cedula],
            (err, rows) => {
                connection.release();
                if (err) {
                    return res.status(500).json({ error: 'Error al consultar el usuario' });
                }
                if (!rows || rows.length === 0) {
                    return res.status(404).json({ message: 'Usuario no encontrado' });
                }
                res.json(rows[0]);
            }
        );
    });
});

//insetra nuevo usuario

router.post('/insertarUsuario', (req, res, next) => {
    console.log('Insertando nuevo usuario...');
    const data= {
        nombreusuario: req.body.nombreusuario,
        cedulausuario: req.body.cedulausuario,
        telefonousuario: req.body.telefonousuario,
        direccionusuario: req.body.direccionusuario,
        correousuario: req.body.correousuario,

    }
   const query = 'INSERT INTO usuario (nombreusuario, cedulausuario, telefonousuario, direccionusuario, correousuario) VALUES (?, ?, ?, ?, ?)';
    const params = [
        data.nombreusuario,
        data.cedulausuario,
        data.telefonousuario,
        data.direccionusuario,
        data.correousuario
    ];
    getConnection(function (err, connection) {
        if (err) {
            console.log('No se pudo insertar el usuario: ', err); 
        }
        connection.query(query, params, function (err, results) {
            if(!err) {
                res.json({status : 'Usuario insertado correctamente'});
            }
            else {
                console.log('Error al insertar el usuario: ', err);
            }
        }
        );
    }
    );
});

// Actualizar usuario por idusuario
router.put('/actualizarUsuario/:idusuario', (req, res) => {
    console.log('Actualizando usuario por idusuario...');
    const idusuario = req.params.idusuario;
    const data = {
        nombreusuario: req.body.nombreusuario,
        cedulausuario: req.body.cedulausuario,
        telefonousuario: req.body.telefonousuario,
        direccionusuario: req.body.direccionusuario,
        correousuario: req.body.correousuario
    };
    getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: 'Error de conexión a la base de datos' });
        }
        connection.query(
            'UPDATE usuario SET ? WHERE idusuario = ?',
            [data, idusuario],
            (err, result) => {
                connection.release();
                if (err) {
                    return res.status(500).json({ error: 'Error al actualizar el usuario' });
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Usuario no encontrado' });
                }
                res.json({ message: 'Usuario actualizado correctamente' });
            }
        );
    });
}
);

// Eliminar usuario por cédula

router.delete('/eliminarUsuario/:id', (req, res) => {
  const id = req.params.id;
  getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: 'Error de conexión a la base de datos' });
    }
    connection.query('DELETE FROM usuario WHERE idusuario = ?', [id], (err, result) => {
      connection.release();
      if (err) {
        return res.status(500).json({ error: 'Error al eliminar usuario' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado correctamente' });
    });
  });
});


// Consultar usuario por id
router.get('/buscarUsuarioId/:idusuario', (req, res) => {
    console.log('Consultando usuario por id...');
    const idusuario = req.params.idusuario;
    getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: 'Error de conexión a la base de datos' });
        }
        connection.query(
            'SELECT * FROM usuario WHERE idusuario = ?',
            [idusuario],
            (err, rows) => {
                connection.release();
                if (err) {
                    return res.status(500).json({ error: 'Error al consultar el usuario' });
                }
                if (!rows || rows.length === 0) {
                    return res.status(404).json({ message: 'Usuario no encontrado' });
                }
                res.json(rows[0]);
            }
        );
    });
}
);


module.exports = router;