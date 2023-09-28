const { dbConnection } = require("./ConnectDB");

let connection = dbConnection('School');

let creationQuery = 'create table details '