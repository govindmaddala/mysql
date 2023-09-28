var mysql = require('mysql');
exports.dbConnection = (dbName) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2107',
        database: dbName
    });
    connection.connect();
    return connection;

}