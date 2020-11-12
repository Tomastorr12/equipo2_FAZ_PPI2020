const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
    mysqlConnection.query('SELECT * FROM Qr ', 
    (err, rows,
      fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
});
  

router.get('/Qr/:id;', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query(`SELECT * FROM Qr
  WHERE id = ?`, [id],
  (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});  
  
router.post('/nuevo-Qr',(req,res)=>{  
  const {id_usuario,code_qr,fecha_sys,
} = req.body;
  
 let datosQr = [id_usuario,code_qr,fecha_sys,
];

  let nuevoQr = `INSERT INTO Qr(id_usuario,
    code_qr,fecha_sys,
) VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoQr, datosQr, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`Qr registrado`, })
    });
  });  
  
router.put('/Qr/:id', (req, res) => {
  const {id_usuario,code_qr,fecha_sys,
} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE Qr SET id_usuario =?,
     code_qr = ?, fecha_sys = ?, WHERE id = ?`, 
      [id_usuario,code_qr,fecha_sys,
    ], 
        (err, rows, fields) => {
          if(!err) {
            res.json({status: 'Qr actualizado'});
          } else {
            console.log(err);
        }
      });
});
  



module.exports = router;