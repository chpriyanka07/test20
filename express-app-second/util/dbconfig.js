const mysql = require('mysql');
module.exports = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'book_inventory' 
});