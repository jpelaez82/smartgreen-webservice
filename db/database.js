const mysql = require('mysql');

//CONNECT TO RPI LEGO - SMARTGREENHOUSE
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306', 
    user: 'root',
    password: 'Th1nkL1nk@2021',
    database: 'SmartGreenHouse',
    multipleStatements: true
});


mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Database Saturno server connected successfully!');
    }
});

module.exports = mysqlConnection;