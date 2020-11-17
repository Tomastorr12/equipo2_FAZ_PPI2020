const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
    mysqlConnection.query('SELECT * FROM historial ', 
    (err, rows,
      fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
});
  

router.get('/historials/:id;', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query(`SELECT * FROM historial
  WHERE id = ?`, [id],
  (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});  
  
router.post('/nuevo-historial',(req,res)=>{  
  const {comunidad1,comunidad2,id_usuario1,id_usuario2,
 id_historial} = req.body;
  
 let datoshistorial = [comunidad1,comunidad2,id_usuario1,id_usuario2,
,id_historial];

  let nuevohistorial = `INSERT INTO historials(comunidad1,
    comunidad2,id_usuario1,id_usuario2,
,id_historial) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevohistorial, datoshistorial, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`historiales registrados`, })
    });
  });  
  
router.put('/historials/:id', (req, res) => {
  const {comunidad1,comunidad2,id_usuario1,id_usuario2,
  id_historial} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE historials SET comunidad1 =?,
     comunidad2 = ?, id_usuario1 = ?,id_usuario2 = ? = ?,
      id_historial = ?, WHERE id = ?`, 
      [comunidad1,comunidad2,id_usuario1,id_usuario2,
        id_historial], 
        (err, rows, fields) => {
          if(!err) {
            res.json({status: 'historial actualizado'});
          } else {
            console.log(err);
        }
      });
});
  
router.delete('/historial/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM historial
     WHERE id = ?`,
     [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'historial eliminado'});
      } else {
        console.log(err);
      }
    });
  });


module.exports = router;