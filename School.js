const { dbConnection } = require("./ConnectDB");

let connection = dbConnection('School');

connection.query("select * from register;", (err, results, fields) => {
    if (err) throw err;
    console.log('The solution is: ', results);
})

connection.query('select concat(surname, " ", name) as "Full Name", date_format(dob, "%d-%m-%y") as birthdate from register;', (err, results, fields) => {
    if (err) throw err;
    console.log('The solution is: ', results);
})

connection.query("SELECT concat(surname, ' ', name) as 'Full Name', DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dob, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dob, '00-%m-%d')) AS age FROM register;", (err, results, fields) => {
    if (err) throw err;
    console.log('The solution is: ', results);
})
connection.end();