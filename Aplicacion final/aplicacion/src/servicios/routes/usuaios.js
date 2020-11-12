const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
    mysqlConnection.query('SELECT * FROM Usuario ', 
    (err, rows,
      fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
});
  

router.get('/Usuarios/:id;', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query(`SELECT * FROM Usuario
  WHERE id = ?`, [id],
  (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});  
  
router.post('/nuevo-usuario',(req,res)=>{  
  const {nombre,id_comunidad,perfil,correo,contraseña,
 id_usuario} = req.body;
  
 let datosUsuario = [nombre,id_comunidad,perfil,correo,
    contraseña,id_usuario];

  let nuevoUsuario = `INSERT INTO Usuarios(nombre,
    id_comunidad,perfil,correo,
    contraseña,id_usuario) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoUsuario, datosUsuario, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`Usuarios registrados`, })
    });
  });  
  
router.put('/Usuarios/:id', (req, res) => {
  const {nombre,id_comunidad,perfil,correo,contraseña,
  } = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE Usuarios SET nombre =?,
     id_comunidad = ?, perfil = ?,correo = ?,contraseña = ? WHERE id = ?`, 
      [nombre,id_comunidad,perfil,correo,contraseña,
        ], 
        (err, rows, fields) => {
          if(!err) {
            res.json({status: 'Usuario actualizado'});
          } else {
            console.log(err);
        }
      });
});
  
router.delete('/usuario/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM Usuario
     WHERE id = ?`,
     [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Usuario eliminado'});
      } else {
        console.log(err);
      }
    });
  });


module.exports = router;