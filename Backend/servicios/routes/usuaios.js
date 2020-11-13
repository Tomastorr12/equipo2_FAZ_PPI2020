const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
    mysqlConnection.query('SELECT * FROM usuario ', 
    (err, rows,
      fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
});
  

router.get('/usuarios/:id;', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query(`SELECT * FROM usuario
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
  
 let datosusuario = [nombre,id_comunidad,perfil,correo,
    contraseña,id_usuario];

  let nuevousuario = `INSERT INTO usuarios(nombre,
    id_comunidad,perfil,correo,
    contraseña,id_usuario) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevousuario, datosusuario, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`usuarios registrados`, })
    });
  });  
  
router.put('/usuarios/:id', (req, res) => {
  const {nombre,id_comunidad,perfil,correo,contraseña,
  } = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE usuarios SET nombre =?,
     id_comunidad = ?, perfil = ?,correo = ?,contraseña = ? WHERE id = ?`, 
      [nombre,id_comunidad,perfil,correo,contraseña,
        ], 
        (err, rows, fields) => {
          if(!err) {
            res.json({status: 'usuario actualizado'});
          } else {
            console.log(err);
        }
      });
});
  
router.delete('/usuario/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM usuario
     WHERE id = ?`,
     [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'usuario eliminado'});
      } else {
        console.log(err);
      }
    });
  });


module.exports = router;