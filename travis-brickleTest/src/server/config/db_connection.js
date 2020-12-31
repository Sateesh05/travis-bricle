//import "prop"
let prop = require("./db_properties");
let mysql = require("mysql");
//export the json object
let conn = {
    getConnection : ()=>{
        return mysql.createConnection(prop);
    }
};
module.exports = conn;