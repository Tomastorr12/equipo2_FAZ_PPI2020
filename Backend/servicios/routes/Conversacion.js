const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
    mysqlConnection.query('SELECT * FROM conversacion ', 
    (err, rows,
      fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
});
  

router.get('/conversacion/:id;', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query(`SELECT * FROM conversacion
  WHERE id = ?`, [id],
  (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});  
  
router.post('/nuevo-conversacion',(req,res)=>{  
  const {Codigo_qr,id_usuario1,id_usuario2,Fecha_systema,
} = req.body;
  
 let datosconversacion = [Codigo_qr,id_usuario1,id_usuario2,Fecha_systema,
];

  let nuevoconversacion = `INSERT INTO conversacions(Codigo_qr,
    id_usuario1,id_usuario2,Fecha_systema,
) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoconversacion, datosconversacion, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`conversacions registrados`, })
    });
  });  
  
router.put('/conversacion/:id', (req, res) => {
  const {Codigo_qr,id_usuario1,id_usuario2,Fecha_systema,
  } = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE conversacion SET Codigo_qr =?,
     id_usuario1 = ?, id_usuario2 = ?,Fecha_systema = ? = ? WHERE id = ?`, 
      [Codigo_qr,id_usuario1,id_usuario2,Fecha_systema,
        ], 
        (err, rows, fields) => {
          if(!err) {
            res.json({status: 'conversacion actualizado'});
          } else {
            console.log(err);
        }
      });
});
  
router.delete('/conversacion/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM conversacion
     WHERE id = ?`,
     [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'conversacion eliminado'});
      } else {
        console.log(err);
      }
    });
  });


module.exports = router;