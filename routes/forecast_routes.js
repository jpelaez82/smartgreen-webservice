const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Guardar datos de Sensor Kakao en DB con req.body.params
// router.post('/kakao',(req, res) => {
//   let data = {
//     temperatura: req.body.temperatura, 
//     humedad: req.body.humedad
//   };
//   let sql = "INSERT INTO sensor_kakao SET ?";
//   mysqlConnection.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });

// Guardar datos de SensorKakao usando req.query.params
router.post('/forecast',(req, res) => {
  let data = {
    temp: req.body.temp, 
    pressure: req.body.pressure,
    humidity: req.body.humidity,
    dew_point: req.body.dew_point,
    uvi: req.body.uvi
  };
  let sql = "INSERT INTO forecast SET ?";
  mysqlConnection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

// Obtener datos de Sensor Kakao desde DB
router.get('/forecast', (req, res) => {
  mysqlConnection.query('SELECT * FROM forecast', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
  
module.exports = router;