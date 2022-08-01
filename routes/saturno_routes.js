const express = require('express');
const router = express.Router();
//const axios = require('axios');
const mysqlConnection = require('../db/database.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// async function getSmartGreenHouseData () {

//   let res = await axios.get('http://mercurio.thinklink.com.co:1337/smartgreenhouses');
//   let response = res.data;

//   let last = Object.values(response)[Object.values(response).length - 1];

//   //console.log(last.presion); // Ultimo valor de Arduino a enviar a la RPI

//   let data = {
//     presion: last.presion,
//     temp: last.temp,
//     hum: last.hum,
//     dpv: last.dpv,
//     rayos_uv: last.rayos_uv,
//     co2: last.co2,
//     h_suelo1: last.h_suelo1,
//     h_suelo2: last.h_suelo2,
//     h_suelo3: last.h_suelo3,
//     lluvia: last.lluvia,
//     luces: last.luces,
//     bomba: last.bomba,
//     n_tanque: last.n_tanque,
//     valv_1: last.valv_1,
//     valv_2: last.valv_2,
//     rocio: last.rocio
//   }

//   //console.log(data);

//   /* ENVIO A MSYQL RPI - SmartGreenHouse */
//   router.post('/', (req, res) => {
//     console.log('Enviando a RPI database');
//     let sql = "INSERT INTO aloe_vera SET ?";
//     mysqlConnection.query(sql, data,(err, results) => {
//       //mysqlConnection.end();
//       if(err) throw err;
//       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//       console.log(results);
//     });
    
//   });

// }

//setInterval(getSmartGreenHouseData, 5000);
// getSmartGreenHouseData();
function sendDataSaturno() {

    let data = {
        console: 100,
        ping: 200
    }

    router.post('/', (req, res) => {
        console.log('Enviando a RPI database');
        let sql = "INSERT INTO rest SET ?";
        mysqlConnection.query(sql, data,(err, results) => {
            //mysqlConnection.end();
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            console.log(results);
        }
    )}
)};

router.get('/saturno', (req, res) => {
    mysqlConnection.query('SELECT * FROM rest', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });

//sendDataSaturno();

module.exports = router;