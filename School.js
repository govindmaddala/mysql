const { dbConnection } = require("./ConnectDB");

const createDatabase = async () => {
    let query = "create database if not exists School";
    let connection = dbConnection();
    connection.query(query, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });
}

const connectDatabase = async () => {
    let query = "use School";
    let connection = dbConnection();
    connection.query(query, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });
}

const createTable = async () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let query = 'create table studentRegister (id serial primary key, surname varchar(200), studentname varchar(200), class int);'

    connection.query(query, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log(result);
            return result
        }
    });
}

const insertAllValuesType1 = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let data1 = 'insert into studentRegister (surname, studentname, class) values ("alla", "rajesh", 10);'
    connection.query(data1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("insertion", result);
            return result
        }
    });

    let data2 = 'insert into studentRegister values (4, "boddeda", "Ramya", 10);'
    connection.query(data2, (err, result, fields) => {
        if (err) {
            console.log("err", err);
            return err
        } else {
            console.log("insertion", result);
            return result
        }
    });
    connection.end();
}

const insertAllValuesType2 = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let data1 = 'insert into studentRegister values (4, "boddeda", "Ramya", 10);'
    connection.query(data1, (err, result, fields) => {
        if (err) {
            console.log("err", err);
            return err
        } else {
            console.log("insertion", result);
            return result
        }
    });
    connection.end();
}

const insertParticularValues = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let data1 = 'insert into studentRegister (surname, studentname) values ("Challa", "Shyam");'
    connection.query(data1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("insertion", result);
            return result
        }
    });
    connection.end();
}

const updateQuery = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let updateQuery = "update studentRegister set studentname = 'Prakash' where id = 4"
    connection.query(updateQuery, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("updateQuery", result);
            return result
        }
    });
}

const deleteQuery = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let deleteQuery = "delete from studentRegister where id = 4"
    connection.query(deleteQuery, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("deleteQuery", result);
            return result
        }
    });
}

const readQuery = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let readQuery = "select * from studentRegister"
    connection.query(readQuery, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("readQuery", result);
            return result
        }
    });
}

const changeTableName = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let query = "alter table studentRegister rename to register"
    connection.query(query, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("query", result);
            return result
        }
    });
}

const changeColumnName = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let query = "alter table register rename column studentname to name"
    connection.query(query, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("query", result);
            return result
        }
    });
}

const changeColumnDataType = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let query = "alter table register modify name varchar(100)"
    connection.query(query, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("query", result);
            return result
        }
    });
}

// alter table register add dob date;

const addColumn = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let query = "alter table register add dob date;"
    connection.query(query, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("query", result);
            return result
        }
    });
}

const handleDates = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let query = 'select concat(surname, " ", name) as "Full Name", date_format(dob, "%d-%m-%y") as birthdate from register;'
    connection.query(query, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("query", result);
            /*
            [
                RowDataPacket { 'Full Name': 'alla rajesh', birthdate: '14-06-99' },
                RowDataPacket { 'Full Name': 'Challa Shyam', birthdate: '20-10-95' }
            ]
            
            */
            return result
        }
    });
}

const getAges = () => {
    let connection = dbConnection();
    let query1 = "use School";
    connection.query(query1, (err, result, fields) => {
        if (err) {
            return err
        } else {
            return result
        }
    });

    let query = "SELECT concat(surname, ' ', name) as 'Full Name', DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dob, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dob, '00-%m-%d')) AS age FROM register;"


    let query2 = "select concat(surname, ' ', name ) as 'full name', date_format(now(), '%Y') - date_format(dob, '%Y') - (date_format(now(), '00-%m-%d') < date_format(dob, '00-%m-%d')) as age from register;"
    connection.query(query2, (err, result, fields) => {
        if (err) {
            return err
        } else {
            console.log("age", result);
            /*

            [
                RowDataPacket { 'Full Name': 'alla rajesh', age: 24 },
                RowDataPacket { 'Full Name': 'Challa Shyam', age: 27 }
            ]
            
            */
            return result
        }
    });
}

// createDatabase();
// connectDatabase();
// createTable();
// insertAllValuesType1();
// insertAllValuesType2();
// insertParticularValues();
// updateQuery();
// deleteQuery()
// readQuery();
// changeTableName();
// changeColumnName()
// changeColumnDataType()
// addColumn();
// handleDates();
// getAges();