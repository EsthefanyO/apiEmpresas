const mysql = require('mysql');

const connect = () => {
    const pool = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "",
        Port: 3306,
        database: "empresas"
    });
    global.db = pool;
}

module.exports = { connect }