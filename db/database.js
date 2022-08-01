const mysql = require('mysql');

// CONNECT TO RPI LEGO - SMARTGREENHOUSE
// const mysqlConnection = mysql.createConnection({
//     host: '4.tcp.ngrok.io',
//     port: '11178', 
//     user: 'smart',
//     password: 'green@2022',
//     database: 'SmartGreenHouse',
//     multipleStatements: true
// });

/* CONNECT TO SATURNO SERVER */
const mysqlConnection = mysql.createConnection({
    host: '4.tcp.ngrok.io',
    port: '11178',
    user: 'root',
    password: 'Th1nkL1nk@2021',
    database: 'testwebservice'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Database RPI Lego connected successfully!');
    }
});

module.exports = mysqlConnection;