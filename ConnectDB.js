var mysql = require('mysql');

exports.dbConnection = () => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2107'
    });
    connection.connect();
    return connection;
}