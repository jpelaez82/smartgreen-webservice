const mysql = require('mysql');

//CONNECT TO SATURNO SERVER MYSQL - SMARTGREENHOUSE
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306', 
    user: 'root',
    password: 'Th1nkL1nk@2021',
    database: 'sensorkakao',
    multipleStatements: true
});

// CONNECT TO RPI LEGO MYSQL - TESTING
// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     port: '3306', 
//     user: 'root',
//     password: 'thinklink2022',
//     database: 'testing',
//     multipleStatements: true
// });


mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Database Saturno Server connected successfully!');
    }
});

module.exports = mysqlConnection;