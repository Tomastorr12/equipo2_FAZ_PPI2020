const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//Get todo ok
router.get('/', (req, res, next) => {
    var sql = "SELECT * FROM usuarios";
    mysqlConnection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results)
    });
});

// Get by id ok
router.get('/user/:id', (req, res, next) => {
    console.log('si pasa')
    const { id } = req.params;
    let sql = `SELECT * FROM usuarios WHERE Id_usuario = ${id}`
    mysqlConnection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results)
    });
});

router.post('/nuevo-usuario', (req, res) => {
    const {
        nombre,
        id_comunidad,
        perfil,
        correo,
        contraseña,
        id_usuario
    } = req.body;

    let datosusuario = [nombre, id_comunidad, perfil, correo,
        contraseña, id_usuario
    ];

    let nuevousuario = `INSERT INTO usuarios(nombre,
    id_comunidad,perfil,correo,
    contraseña,id_usuario) VALUES(?,?,?,?,?,?)`;
    mysqlConnection.query(nuevousuario, datosusuario, (err, results,
        fields) => {
        if (err) {
            return console.error(err.message);
        }
        res.json({ message: `usuarios registrados`, })
    });
});

router.put('/usuarios/:id', (req, res) => {
    const {
        nombre,
        id_comunidad,
        perfil,
        correo,
        contraseña,
    } = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE usuarios SET nombre =?,
     id_comunidad = ?, perfil = ?,correo = ?,contraseña = ? WHERE id = ?`, [nombre, id_comunidad, perfil, correo, contraseña, ],
        (err, rows, fields) => {
            if (!err) {
                res.json({ status: 'usuario actualizado' });
            } else {
                console.log(err);
            }
        });
});

router.delete('/usuario/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM usuario
     WHERE id = ?`, [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'usuario eliminado' });
        } else {
            console.log(err);
        }
    });
});


module.exports = router;