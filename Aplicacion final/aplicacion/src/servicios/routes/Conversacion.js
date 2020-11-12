const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
    mysqlConnection.query('SELECT * FROM Conversacion ', 
    (err, rows,
      fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
});
  

router.get('/Conversacions/:id;', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query(`SELECT * FROM Conversacion
  WHERE id = ?`, [id],
  (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});  
  
router.post('/nuevo-Conversacion',(req,res)=>{  
  const {Codigo_qr,id_usuario1,id_usuario2,Fecha_systema,
} = req.body;
  
 let datosConversacion = [Codigo_qr,id_usuario1,id_usuario2,Fecha_systema,
];

  let nuevoConversacion = `INSERT INTO Conversacions(Codigo_qr,
    id_usuario1,id_usuario2,Fecha_systema,
) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoConversacion, datosConversacion, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`Conversacions registrados`, })
    });
  });  
  
router.put('/Conversacion/:id', (req, res) => {
  const {Codigo_qr,id_usuario1,id_usuario2,Fecha_systema,
  } = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE Conversacions SET Codigo_qr =?,
     id_usuario1 = ?, id_usuario2 = ?,Fecha_systema = ? = ? WHERE id = ?`, 
      [Codigo_qr,id_usuario1,id_usuario2,Fecha_systema,
        ], 
        (err, rows, fields) => {
          if(!err) {
            res.json({status: 'Conversacion actualizado'});
          } else {
            console.log(err);
        }
      });
});
  
router.delete('/Conversacion/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM Conversacion
     WHERE id = ?`,
     [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Conversacion eliminado'});
      } else {
        console.log(err);
      }
    });
  });


module.exports = router;