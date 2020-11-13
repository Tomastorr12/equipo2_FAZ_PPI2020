const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
    mysqlConnection.query('SELECT * FROM Historial ', 
    (err, rows,
      fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
});
  

router.get('/Historials/:id;', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query(`SELECT * FROM Historial
  WHERE id = ?`, [id],
  (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});  
  
router.post('/nuevo-Historial',(req,res)=>{  
  const {comunidad1,comunidad2,id_usuario1,id_usuario2,
 id_Historial} = req.body;
  
 let datosHistorial = [comunidad1,comunidad2,id_usuario1,id_usuario2,
,id_Historial];

  let nuevoHistorial = `INSERT INTO Historials(comunidad1,
    comunidad2,id_usuario1,id_usuario2,
,id_Historial) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoHistorial, datosHistorial, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`Historiales registrados`, })
    });
  });  
  
router.put('/Historials/:id', (req, res) => {
  const {comunidad1,comunidad2,id_usuario1,id_usuario2,
  id_Historial} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE Historials SET comunidad1 =?,
     comunidad2 = ?, id_usuario1 = ?,id_usuario2 = ? = ?,
      id_Historial = ?, WHERE id = ?`, 
      [comunidad1,comunidad2,id_usuario1,id_usuario2,
        id_Historial], 
        (err, rows, fields) => {
          if(!err) {
            res.json({status: 'Historial actualizado'});
          } else {
            console.log(err);
        }
      });
});
  
router.delete('/Historial/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM Historial
     WHERE id = ?`,
     [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Historial eliminado'});
      } else {
        console.log(err);
      }
    });
  });


module.exports = router;