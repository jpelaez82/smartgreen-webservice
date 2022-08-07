const express = require('express');
const router = express.Router();
const axios = require('axios');
const mysqlConnection = require('../db/connection_saturno.js');

async function getSensorKakaoData () {

  let res = await axios.get('http://mercurio.thinklink.com.co:1337/kakaos');
  let response = res.data;

  let last = Object.values(response)[Object.values(response).length - 1];

  //console.log(last.presion); // Ultimo valor de Arduino a enviar a la RPI

  let data = {
    post_temp1: last.post_temp1,
    post_temp2: last.post_temp2,
    post_temp3: last.post_temp3,
    post_temp4: last.post_temp4,
    post_temp5: last.post_temp5,
    post_temp6: last.post_temp6,
    post_temp7: last.post_temp7,
    post_temp8: last.post_temp8,
    post_temp9: last.post_temp9,
    post_Alert1: last.post_Alert1,
    post_Alert2: last.post_Alert2,
    post_Alert3: last.post_Alert3,
    post_temp: last.post_temp,
    post_humedad: last.post_humedad
  }

  console.log(data);

  /* ENVIO A SATURNO SERVER - sensorkakao Database */
  console.log('Enviando a Sensorkakao Database - SATURNO');    

  let sql = "INSERT INTO hallbar SET ?";
  mysqlConnection.query(sql, data, function (err, result) {
    if (err) throw err;
    console.log("Registro guardado exitosamente, ID: " + result.insertId);
  });
   
  
}

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM hallbar', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

setInterval(getSensorKakaoData, 10000);

module.exports = router;